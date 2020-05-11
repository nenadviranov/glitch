const { readFile } = require('../utilis');

module.exports = async (req, res) => {
  const comments = await readFile('comments.json');
  const articles = await readFile('articles.json');

  const articleId = articles.find(({ id }) => id === req.params.articleId);
  const comm = comments.filter(comment => {
    if (comment.articleId === articleId.id) {
      return comment;
    }
  });

  res.json(comm);
};