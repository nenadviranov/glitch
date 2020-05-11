const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const authors = await readFile('authors.json');
  res.json(authors);
};