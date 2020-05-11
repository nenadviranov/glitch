const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const tags = await readFile('tags.json');
  const { slug } = req.params;

  res.json(tags[slug]);
};