import Usuario from "../entities/Usuario";
import { getRepository, Repository } from "typeorm";

class UsuarioService {
  private usuarioRepository: Repository<Usuario>;

  constructor() {
    this.usuarioRepository = getRepository(Usuario);
  }

  async criarUsuario(data: Partial<Usuario>): Promise<Usuario> {
    const novoUsuario = this.usuarioRepository.create(data);
    return this.usuarioRepository.save(novoUsuario);
  }

  async encontrarUsuarioPorId(id: number): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({ where: { id } });
  }

  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async atualizarUsuario(
    id: number,
    data: Partial<Usuario>
  ): Promise<Usuario | null> {
    const resultado = await this.usuarioRepository.update(id, data);

    if (resultado.affected && resultado.affected > 0) {
      return this.usuarioRepository.findOne({ where: { id } });
    }

    return null;
  }

  async deletarUsuario(id: number): Promise<boolean> {
    const resultado = await this.usuarioRepository.delete(id);
    return resultado.affected === 1;
  }
}

export default UsuarioService;
