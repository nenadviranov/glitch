const authorsRouter = require('express').Router();

const authors = require('./authors');
const authorId = require('./authorId');
const authorArticles = require('./authorArticles');
const addAuthor = require('./addAuthor');
const updateAuhtor = require('./updateAuthor');

authorsRouter.route('/').get(authors).post(addAuthor);
authorsRouter.route('/:authorId').get(authorId).post(updateAuhtor);
authorsRouter.get('/:authorId/articles', authorArticles);

module.exports = authorsRouter;