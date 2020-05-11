const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const authors = await readFile('authors.json');
  const { authorId } = req.params;

  res.json(authors.find(({ id }) => id === authorId));
};