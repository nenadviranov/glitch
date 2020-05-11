const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const tags = await readFile('tags.json');
  res.json(tags);
};