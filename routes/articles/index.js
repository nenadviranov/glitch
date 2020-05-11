const articlesRouter = require('express').Router();
const articles = require('./articles');
const articleId = require('./articleId');
const comments = require('./comments');
const addArticles = require('./addArticle');
const deleteAricle = require('./deleteArticle');
const updateArticle = require('./updateArticle');

articlesRouter.route('/').get(articles).post(addArticles);

articlesRouter
  .route('/:articleId')
  .get(articleId)
  .post(updateArticle)
  .delete(deleteAricle);
articlesRouter.route('/:articleId/comments').get(comments);
// articlesRouter.delete('/:articleId', deleteAricle);

module.exports = articlesRouter;