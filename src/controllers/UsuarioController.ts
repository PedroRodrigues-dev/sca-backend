import { Router } from "express";
import UsuarioService from "../services/UsuarioService";

const UsuarioController = Router();

const usuarioService = new UsuarioService();

/**
 * @openapi
 * /api/v1/usuarios:
 *   post:
 *     summary: Cria um novo usuário.
 *     tags:
 *       - Usuários
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: integer
 *                 nullable: true
 *                 description: ID do usuário (opcional).
 *               senha:
 *                 type: string
 *                 description: Senha do usuário.
 *               nivel_acesso:
 *                 type: integer
 *                 description: Nível de acesso do usuário.
 *               flag:
 *                 type: boolean
 *                 description: Sinalizador do usuário.
 *           example:
 *             usuario: 1
 *             senha: "minhaSenha"
 *             nivel_acesso: 2
 *             flag: true
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *       500:
 *         description: Erro ao criar usuário.
 */
UsuarioController.post("/", async (req, res) => {
  try {
    const novoUsuario = await usuarioService.criarUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

/**
 * @openapi
 * /api/v1/usuarios:
 *   get:
 *     summary: Obtém a lista de todos os usuários.
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *       500:
 *         description: Erro ao listar usuários.
 */
UsuarioController.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const usuario = await usuarioService.encontrarUsuarioPorId(id);
    if (!usuario) {
      res.status(404).json({ error: "Usuário não encontrado" });
    } else {
      res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   get:
 *     summary: Obtém um usuário pelo ID.
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     responses:
 *       200:
 *         description: Dados do usuário.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro ao buscar usuário.
 */
UsuarioController.get("/", async (req, res) => {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
});

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID.
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: integer
 *                 nullable: true
 *                 description: ID do usuário (opcional).
 *               senha:
 *                 type: string
 *                 description: Senha do usuário.
 *               nivel_acesso:
 *                 type: integer
 *                 description: Nível de acesso do usuário.
 *               flag:
 *                 type: boolean
 *                 description: Sinalizador do usuário.
 *           example:
 *             senha: "novaSenha"
 *             nivel_acesso: 3
 *             flag: true
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro ao atualizar usuário.
 */
UsuarioController.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const usuarioAtualizado = await usuarioService.atualizarUsuario(
      id,
      req.body
    );
    if (!usuarioAtualizado) {
      res.status(404).json({ error: "Usuário não encontrado" });
    } else {
      res.json(usuarioAtualizado);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID.
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro ao excluir usuário.
 */
UsuarioController.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const sucesso = await usuarioService.deletarUsuario(id);
    if (sucesso) {
      res.json({ message: "Usuário deletado com sucesso" });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

export default UsuarioController;
