import jwt from "jsonwebtoken";

import { Router, Request, Response } from "express";
import { JWT_SECRET_KEY } from "../configs/env";

const authController = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Return JWT token
 *     tags:
 *       - AuthController
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Seu usuario.
 *               password:
 *                 type: string
 *                 description: Sua senha.
 *           example:
 *             username: "usaurio1"
 *             password: "123456"
 *     responses:
 *       200:
 *         description: {"token": "your-token"}
 */
authController.post("/login", (req: Request, res: Response) => {
  const userId = "1";

  const token = jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

export default authController;
