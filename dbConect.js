const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_arcca', 'postgres', 'postgres', {
    host: 'arccadb.cvw8aysdigsk.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});
  
sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database:', error)
})
