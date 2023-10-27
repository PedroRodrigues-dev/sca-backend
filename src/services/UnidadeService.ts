import { Repository, getRepository } from "typeorm";
import Unidade from "../entities/Unidade";

class UnidadeService {
  private unidadeRepository: Repository<Unidade>;

  constructor() {
    this.unidadeRepository = getRepository(Unidade);
  }

  async criarUnidade(data: Partial<Unidade>): Promise<Unidade> {
    const novaUnidade = this.unidadeRepository.create(data);
    return this.unidadeRepository.save(novaUnidade);
  }

  async encontrarUnidadePorId(id: number): Promise<Unidade | null> {
    return this.unidadeRepository.findOne({ where: { id } });
  }

  async listarUnidades(): Promise<Unidade[]> {
    return this.unidadeRepository.find();
  }

  async atualizarUnidade(
    id: number,
    data: Partial<Unidade>
  ): Promise<Unidade | null> {
    try {
      const unidade = await this.unidadeRepository.findOne({ where: { id } });
      if (unidade) {
        Object.assign(unidade, data);
        return this.unidadeRepository.save(unidade);
      }
      return null;
    } catch (error) {
      console.error("Error updating Unidade:", error);
      throw error;
    }
  }

  async deletarUnidade(id: number): Promise<boolean> {
    try {
      const resultado = await this.unidadeRepository.delete(id);
      return resultado.affected === 1;
    } catch (error) {
      console.error("Error deleting Unidade:", error);
      throw error;
    }
  }
}

export default UnidadeService;
