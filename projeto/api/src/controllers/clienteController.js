import {
         listar,
         buscarPorId, 
         buscarPorCpf, 
         criar, 
         atualizar, 
         remover 
        } from'../services/clienteService.js';

export function listarClientes(req, res) {
    
    listar().then(clientes =>{
        res.status(200).json(clientes)
    }).catch(erro =>{
        res.status(500).json({ erro: 'Erro ao listar clientes' })
})
}

export function buscarClientePorId(req, res) {
   
    const { id } = req.params

    buscarPorId(id).then(cliente => {
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado' })
}
        return res.status(200).json(cliente)
    })

    .catch(erro => {
        return res.status(500).json({ erro: 'Erro ao buscar cliente' })
    });
}

export function criarCliente(req, res) {

    const { cpf, nome, data_aniversario, endereco } = req.body

    if (!cpf || !nome) {
        return res.status(400).json({ erro: 'CPF e nome são obrigatórios' })
}

    buscarPorCpf(cpf).then(existente => {

        if (existente) {
            return res.status(409).json({ erro: 'CPF já cadastrado' })
}
        return criar({ cpf, nome, data_aniversario, endereco })
})

    .then(resultado => {

        if (resultado && !res.headersSent) {
            return res.status(201).json(resultado)
}
})
    .catch(erro => {

        if (!res.headersSent) {
            return res.status(500).json({ erro: 'Erro ao criar cliente 1'+erro })
}
})
}

    export function atualizarCliente(req, res) {

        const { id } = req.params;

        const { cpf, nome, data_aniversario, endereco } = req.body
        
        if (!id) {
            return res.status(400).json({ erro: 'ID é obrigatório' })
}
    atualizar(id, { cpf, nome, data_aniversario, endereco }).then(resultado => {

        if (!resultado) {

            return res.status(404).json({ erro: 'Cliente não encontrado' })
}

        return res.status(200).json(resultado);
})

    .catch(erro => {
        
        return res.status(500).json({ erro: 'Erro ao atualizar cliente '+erro })
})
}

export function removerCliente(req, res) {

    
    remover(id).then(removido => {

        if (removido) {
            return res.status(204).send('Cliente excluido com sucesso');
}
        return res.status(404).json({ erro: 'Cliente não encontrado' })
})
    .catch(erro => {

        return res.status(500).json({ erro: 'Erro ao remover cliente '+erro })
})
}
