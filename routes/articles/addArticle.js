const { readFile, writeFile } = require('../utilis');
const uuid = require('uuid');

module.exports = async (req, res) => {
  const articles = await readFile('articles.json');

  const { authorId, title, summary, body, tags } = req.body;

  if (!authorId) {
    throw new Error('Author Id is required');
  }
  if (!title || title.length < 4) {
    throw new Error('Invalid title');
  }
  if (!summary || summary.length < 20) {
    throw new Error('Invalid summary');
  }
  if (!body || body.length < 30) {
    throw new Error('Invalid article body');
  }
  if (!tags || tags.length < 1) {
    throw new Error('Invalid article tags');
  }

  const newArticle = {
    date: Date.now(),
    id: uuid.v4(),
    authorId,
    title,
    body,
    summary,
    tags
  };
  await writeFile('articles.json', [...articles, newArticle]);

  res.json({ MSG: 'Article added' });
};