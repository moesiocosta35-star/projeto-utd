import Cliente from '../models/cliente.js';

export async function listar() {
    return Cliente.findAll({ order: [['id', 'ASC']] });
}

export async function buscarPorId(id) {
    return Cliente.findByPk(id);
}

export async function buscarPorCpf(cpf) {
    return Cliente.findOne({ where: { cpf } });
}

export async function criar(dados) {
    return Cliente.create({
    cpf: dados.cpf,
    nome: dados.nome,
    data_aniversario: dados.data_aniversario ?? null,
    endereco: dados.endereco ?? null,
    });
}

export async function atualizar(id, dados) {
    const cliente = await buscarPorId(id);

    if (!cliente) return null;

    await cliente.update({
        ...(dados.cpf !== undefined && { cpf: dados.cpf }),
        ...(dados.nome !== undefined && { nome: dados.nome }),
        ...(dados.data_aniversario !== undefined && { data_aniversario: dados.data_aniversario }),
        ...(dados.endereco !== undefined && { endereco: dados.endereco }),
    });
    return cliente;
}
export async function remover(id) {

    const cliente = await buscarPorId(id);

    if (!cliente) return false;

    await cliente.destroy({where: {id:cliente.id}});

    return true;
}