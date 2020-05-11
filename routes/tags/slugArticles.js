const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const tags = await readFile('tags.json');
  const articles = await readFile('articles.json');

  const { slug } = req.params;
  const tagsArticles = articles.filter(article => {
    if (article.tags.includes(slug)) {
      return article;
    }
  });

  res.json(tagsArticles);
};