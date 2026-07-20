import express from 'express';
import clienteRoutes from './src/routes/clienteRoutes.js';

const port = 8080

const app = express();

app.use(express.json());

app.use('/api/clientes', clienteRoutes);

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
})