const router = require('express').Router();

const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

router.use('/articles', articles);
router.use('/authors', authors);
router.use('/tags', tags);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected' });
});

module.exports = router;