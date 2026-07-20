import sequelize from './src/config/database.js';
import Cliente from './src/models/cliente.js';

await sequelize.authenticate();

await Cliente.sync();

console.log('Tabela clientes sincronizada');

process.exit(0);