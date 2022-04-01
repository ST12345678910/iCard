const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const cardRoutes = require('./cardRoutes.js');

router.use('/user', userRoutes);
router.use('/card', cardRoutes);

module.exports = router;
