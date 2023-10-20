import { Router } from "express";
import helloController from "./controllers/helloController";
import authController from "./controllers/authController";
import { authenticateToken } from "./middlewares/auth";

const apiRouter = Router();

apiRouter.use("/v1/auth", authController);
apiRouter.use("/v1/hello", authenticateToken, helloController);

export default apiRouter;
