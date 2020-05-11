const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const articles = await readFile('articles.json');
  res.json(articles);
};