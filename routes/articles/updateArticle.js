const { readFile, writeFile } = require('../utilis');

module.exports = async (req, res) => {
  const articles = await readFile('articles.json');

  const { articleId } = req.params;
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    throw new Error('Article ID invalid');
  }

  const { authorId, title, summary, body, tags } = req.body;

  if (!authorId) {
    throw new Error('Author ID required');
  }

  if (!title || title.length < 3) {
    throw new Error('Insert Title');
  }

  if (!summary || summary.length < 20) {
    throw new Error('Insert summary');
  }

  if (!body || body.length < 50) {
    throw new Error('Insert body');
  }

  if (!tags || tags.length < 1) {
    throw new Error('Tag required');
  }

  const updatedArticle = {
    id: articleId,
    authorId,
    title,
    date: new Date(),
    summary,
    body,
    tags
  };

  const articlesUpdated = articles.map(article =>
    article.id === articleId ? updatedArticle : article
  );

  await writeFile('articles.json', articlesUpdated);

  res.json({ MSG: 'Article added', updatedArticle });
};