import { Router } from "express";
import UnidadeService from "../services/UnidadeService";

const UnidadeController = Router();
const unidadeService = new UnidadeService();

/**
 * @openapi
 * /api/v1/unidades:
 *   post:
 *     summary: Cria uma nova unidade.
 *     tags:
 *       - Unidades
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da unidade.
 *               ativo_unidade:
 *                 type: boolean
 *                 description: Indica se a unidade está ativa.
 *               sinc:
 *                 type: bigint
 *                 description: Valor de sincronização.
 *           example:
 *             nome: "Minha Unidade"
 *             ativo_unidade: true
 *             sinc: 123456
 *     responses:
 *       201:
 *         description: Unidade criada com sucesso.
 *       500:
 *         description: Erro ao criar unidade.
 */
UnidadeController.post("/", async (req, res) => {
  try {
    const novaUnidade = await unidadeService.criarUnidade(req.body);
    res.status(201).json(novaUnidade);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar unidade" });
  }
});

/**
 * @openapi
 * /api/v1/unidades:
 *   get:
 *     summary: Obtém a lista de todas as unidades.
 *     tags:
 *       - Unidades
 *     responses:
 *       200:
 *         description: Lista de unidades.
 *       500:
 *         description: Erro ao listar unidades.
 */
UnidadeController.get("/", async (req, res) => {
  try {
    const unidades = await unidadeService.listarUnidades();
    res.json(unidades);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar unidades" });
  }
});

/**
 * @openapi
 * /api/v1/unidades/{id}:
 *   get:
 *     summary: Obtém uma unidade pelo ID.
 *     tags:
 *       - Unidades
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da unidade.
 *     responses:
 *       200:
 *         description: Dados da unidade.
 *       404:
 *         description: Unidade não encontrada.
 *       500:
 *         description: Erro ao buscar unidade.
 */
UnidadeController.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const unidade = await unidadeService.encontrarUnidadePorId(id);
    if (!unidade) {
      res.status(404).json({ error: "Unidade não encontrada" });
    } else {
      res.json(unidade);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar unidade" });
  }
});

/**
 * @openapi
 * /api/v1/unidades/{id}:
 *   put:
 *     summary: Atualiza uma unidade pelo ID.
 *     tags:
 *       - Unidades
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da unidade.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da unidade.
 *               ativo_unidade:
 *                 type: boolean
 *                 description: Indica se a unidade está ativa.
 *               sinc:
 *                 type: bigint
 *                 description: Valor de sincronização.
 *           example:
 *             nome: "Minha Unidade Atualizada"
 *             ativo_unidade: true
 *             sinc: 789012
 *     responses:
 *       200:
 *         description: Unidade atualizada com sucesso.
 *       404:
 *         description: Unidade não encontrada.
 *       500:
 *         description: Erro ao atualizar unidade.
 */
UnidadeController.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const unidadeAtualizada = await unidadeService.atualizarUnidade(
      id,
      req.body
    );
    if (!unidadeAtualizada) {
      res.status(404).json({ error: "Unidade não encontrada" });
    } else {
      res.json(unidadeAtualizada);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar unidade" });
  }
});

/**
 * @openapi
 * /api/v1/unidades/{id}:
 *   delete:
 *     summary: Exclui uma unidade pelo ID.
 *     tags:
 *       - Unidades
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da unidade.
 *     responses:
 *       200:
 *         description: Unidade excluída com sucesso.
 *       404:
 *         description: Unidade não encontrada.
 *       500:
 *         description: Erro ao excluir unidade.
 */
UnidadeController.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const sucesso = await unidadeService.deletarUnidade(id);
    if (sucesso) {
      res.json({ message: "Unidade deletada com sucesso" });
    } else {
      res.status(404).json({ error: "Unidade não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar unidade" });
  }
});

export default UnidadeController;
