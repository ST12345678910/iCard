const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send("Hello")
  res.render('main', { layout: 'index' });
});




module.exports = router;