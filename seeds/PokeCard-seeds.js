const { PokeCard } = require('../models');

const PokeCardData = [

    {name: 'Test Pokemon',
    type: 'Normal',
    hp: '100',
    image: '...',
    backgroundimage: '...',
    attack1name: 'test attack 1',
    attack1damage: '30',
    attack1description: 'this attack does 30 damage',
    attack2name: 'test attack 2',
    attack2damage: '50',
    attack2description: 'this attack does 50 damage'}


];


const seedPokeCards = () => PokeCard.bulkCreate(PokeCardData);

module.exports = seedPokeCards;
