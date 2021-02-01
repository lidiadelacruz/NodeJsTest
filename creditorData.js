const Sequelize = require('sequelize')

const creditorData = db.define('creditorData',{
id:{
 type: Sequelize.INTEGER,
 allowNull: false,
},
creditorName:{
  type:Sequelize.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  }
},
firstName: {
  type: Sequelize.STRING,
  allowNull: false,
  validate:{
    notEmpty: true
  }
},
lastName: {
  type: Sequelize.STRING,
  allowNull: false,
  validate:{
    notEmpty: true
  }
},
minPaymentPercentage:{
  type: Sequelize.DECIMAL(5,2),
  allowNull: false,
  validate:{
    notEmpty: true
  }
},
balance:{
  type: Sequelize.DECIMAL,
  allowNull: false,
  validate: {
    notEmpty: true
  }
}

})

module.exports = creditorData
