import express from 'express';
const app = express();
import indexRoute from './routes/index'
import prodctRoute from './routes/product_routes'
import userRoute from './routes/user_routers'

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',indexRoute)
app.use('/products',prodctRoute)
app.use('/users',userRoute)
app.listen(3000, ()=>{
    console.log('ok running at http:localhost:3000/')
})