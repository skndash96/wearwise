import { Request, Response, Router } from "express";
import getProducts from "../actions/getProducts";

const productRouter = Router();

const GET = async (req: Request, res: Response) => {
    let gender = req.query.g?.toString();
    let category = req.query.c?.toString();
    let skip = parseInt(req.query.skip?.toString() || '0');
    let limit = parseInt(req.query.limit?.toString() || '20');

    if (!gender) {
        res.status(400).json({
            success: false,
            error: "Invalid Gender"
        });
        return;
    }
    
    if (!category) {
        res.status(400).json({
            success: false,
            error: "Invalid Category"
        });
        return;
    }

    if (!skip) skip = 0;
    if (!limit) limit = 20;

    try {
        let products = await getProducts(gender, category);

        res.json({
            success: true,
            data: products.slice(skip, skip + limit)
        });
    } catch (e: any) {
        res.status(500).json({
            success: false,
            error: e.message || e
        });
    }
};

productRouter.get("/", GET);

export default productRouter;