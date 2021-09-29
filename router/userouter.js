const router = require('express').Router(); // initialization

// Response API
router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub',
  });
});

// Export API routes
module.exports = router;
