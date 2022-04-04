const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send("Hello")
  
  res.render('main', { layout: 'index' });
 
});

router.get('/loggedin', (req, res) => {
  // res.send("Hello")
  res.render('main', { layout: 'loggedin' });
});


module.exports = router;