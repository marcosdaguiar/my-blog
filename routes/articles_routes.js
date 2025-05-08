const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/Article_Controller');

// Create article route
router.post('/create', ArticleController.create);
router.get('/articles', ArticleController.getArticles);


module.exports = router;