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

//Module - Create Table Review
//const review = sequelize.define('reviews', {
//    dateReview: {
//        type: Sequelize.STRING
//    },
//    titleReview: {
//        type: Sequelize.STRING
//    },
//    commentReview: {
//        type: Sequelize.TEXT
//    }
//});

const review2 = sequelize.define('reviews2s', {
    dateReview: {
        type: Sequelize.STRING
    },
    titleReview: {
        type: Sequelize.STRING
    },
    commentReview: {
        type: Sequelize.TEXT
    }
});

//review.sync({force: true})

//review.create({
//    dateReview: "Received variable",
//    titleReview: "Received variable",
//    commentReview: "Received variable",
//})

review2.create({
    dateReview: "Received variable",
    titleReview: "Received variable",
    commentReview: "Received variable",
})