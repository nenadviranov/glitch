const tagsRouter = require('express').Router();

const tags = require('./tag');
const slug = require('./slug');
const slugArticles = require('./slugArticles');

tagsRouter.get('/', tags);
tagsRouter.get('/:slug', slug);
tagsRouter.get('/:slug/articles', slugArticles);

module.exports = tagsRouter;