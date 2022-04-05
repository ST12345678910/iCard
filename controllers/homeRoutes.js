const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send("Hello")
  
  res.render('main', { layout: 'index' });
 
});

router.get('/loggedin', (req, res) => {
  // res.send("Hello")
  res.render('main', { layout: 'loggedin' });
});

router.get('/aboutus', (req, res) => {

  if (req.session.loggedIn) {
    res.render('aboutus', { layout: 'loggedin' })
  } else {
    res.render('aboutus', { layout: 'index'})
  }
});

module.exports = router;