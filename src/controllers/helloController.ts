import { Router, Request, Response } from "express";

const helloController = Router();

/**
 * @openapi
 * /api/v1/hello:
 *   get:
 *     summary: Return Hello World
 *     tags:
 *       - HelloController
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Hello World.
 */
helloController.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

export default helloController;
