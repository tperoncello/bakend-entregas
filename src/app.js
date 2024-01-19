import express from 'express';
import productsRouter from './routers/products.router.js'
import cartsRouter from './routers/cart.router.js'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('esta es mi app/appi ;)')
});

app.use('/api/products', productsRouter);
app.use('/api/cart', cartsRouter)

app.listen(8080, () => console.log('http://localhost:8080/'));