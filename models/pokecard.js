// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize')
// import our database connection from config.js
const sequelize = require('../config/connection')

// Initialize Product model (table) by extending off Sequelize's Model class
class PokeCard extends Model {}

PokeCard.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    image: {
      type: DataTypes.STRING,
    },
    backgroundimage: {
      type: DataTypes.STRING,
    },
    attack1name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack1damage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack1description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack2name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack2damage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack2description: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'PokeCard'
  }
)

module.exports = PokeCard