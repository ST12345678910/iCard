const router = require('express').Router();
const PokeCard = require("../../models/pokecard.js");
const withAuth = require('../../utils/auth.js');

router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  PokeCard.findAll()
  .then(PokeCards => {
    res.json(PokeCards)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/create', (req, res) => {
  
  res.render('card', { layout: 'index' });
});

router.post('/create', withAuth, async (req, res) => {
 

  try {
    const newPokeCard = await PokeCard.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newPokeCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;