import { Router } from "express";
import productRouter from "./productsController";

const apiRouter = Router();

apiRouter.use('/products', productRouter);

export default apiRouter;