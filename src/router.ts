import { Router } from "express";
import { authenticateToken } from "./middlewares/auth";
import AuthController from "./controllers/AuthController";
import UsuarioController from "./controllers/UsuarioController";
import UnidadeController from "./controllers/UnidadeController";

const apiRouter = Router();

apiRouter.use("/v1/auth", AuthController);
apiRouter.use("/v1/usuarios", authenticateToken, UsuarioController);
apiRouter.use("/v1/unidades", authenticateToken, UnidadeController);

export default apiRouter;
