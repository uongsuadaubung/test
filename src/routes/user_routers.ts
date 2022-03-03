import {Router} from "express";
import {buyProduct, getBoughtProductById, getUsers} from "../controllers/user_controller";



const router = Router();

router.get('/',getUsers )
router.get('/product/:id', getBoughtProductById)
router.post('/buy', buyProduct)
// router.delete('/:id', deleteProduct)

export default router;