import { Sequelize } from 'sequelize'
const sequelize = new Sequelize(

    'projetofinaldb',
    'root',
    '921720Mm@',
    {
        host: 'localhost',
        port: 3306 || 3306,
        dialect: 'mariadb',
        logging: true,
        define: {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        },
}
)
export default sequelize