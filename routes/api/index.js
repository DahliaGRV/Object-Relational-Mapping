const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
