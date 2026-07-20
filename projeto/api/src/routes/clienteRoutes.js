import { Router } from 'express';
import { 
            listarClientes, 
            criarCliente, 
            removerCliente, 
            atualizarCliente, 
            buscarClientePorId 
    } from '../controllers/clienteController.js';
const router = Router();

router.get('/', listarClientes);
router.get('/:id', buscarClientePorId);
router.post('/',criarCliente);
router.put('/:id', atualizarCliente);
router.delete('/:id', removerCliente);

export default router;