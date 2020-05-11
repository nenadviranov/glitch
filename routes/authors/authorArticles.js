const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const authors = await readFile('authors.json');
  const articles = await readFile('articles.json');
  const authorId = authors.find(({ id }) => id === req.params.authorId);

  const authorArticles = articles.filter(artilce => {
    if (artilce.authorId === authorId.id) {
      return artilce;
    }
  });

  res.json(authorArticles);
};