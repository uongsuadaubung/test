import {Router} from "express";
import {getProducts, getProductById, deleteProduct, updateProductById} from '../controllers/product_controller'


const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProduct)

export default router;
