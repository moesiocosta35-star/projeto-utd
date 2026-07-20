import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    data_aniversario: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
}, {
tableName: 'clientes',
});

export default Cliente;
