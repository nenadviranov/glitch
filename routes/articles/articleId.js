const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const articles = await readFile('articles.json');
  const { articleId } = req.params;

  res.json(articles.find(({ id }) => id === articleId));
};