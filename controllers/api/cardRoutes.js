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

router.get('/create', withAuth, (req, res) => {
  
  res.render('card', { layout: 'loggedin' });
});

router.post('/create', withAuth, async (req, res) => {
//  console.log(req.body)

  try {
    const newPokeCard = await PokeCard.create({
      ...req.body,
      
    });
    // console.log(newPokeCard);
    
  } catch (err) {
    res.status(500).json(err);
    console.log("CardRouteError")
  }
});

router.get('/gallery', async (req, res) => {



  const cardData = await PokeCard.findAll().catch((err) => {
    res.json(err);
  });

  const PokeCards = cardData.map((PokeCard) => PokeCard.get({ plain: true }));

  if (req.session.loggedIn) {
    res.render('gallery', { layout: 'loggedin', PokeCards })
  } else {
    res.render('gallery', { layout: 'index', PokeCards })
  }

});


router.get('/aboutus', withAuth, (req, res) => {

  res.render('aboutus', { layout: 'loggedin' });
});

module.exports = router;