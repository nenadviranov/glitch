const { writeFile, readFile } = require('../utilis');

module.exports = async (req, res) => {
  const articles = await readFile('articles.json');
  const comments = await readFile('comments.json');
  const { articleId } = req.params;

  const article = articles.find(({ id }) => id === articleId);

  if (!articleId) {
    return res.status(404).send('Error ArticleId not found');
  }

  const removeCommentsArticle = comments.filter(
    comment => comment.articleId !== articleId
  );

  await writeFile('comments.json', removeCommentsArticle);

  const indexOfArticle = articles.indexOf(article);

  articles.splice(indexOfArticle, 1);

  await writeFile('articles.json', articles);

  res.json({ MSG: 'Deleted article', article });
};