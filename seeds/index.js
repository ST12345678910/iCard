const sequelize = require('../config/connection');
const PokeCard = require('../models/pokecard.js');
const seedPokeCards = require('./PokeCard-seeds');
const PokeCardData = require('./PokeCard-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  seedPokeCards();
  console.log('\n----- POKECARDS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
