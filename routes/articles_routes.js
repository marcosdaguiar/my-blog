const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/Article_Controller');

// Testing route
router.get('/testing-route', ArticleController.test);
router.get('/course-route', ArticleController.course);

// Create article route
router.post('/create', ArticleController.create);



module.exports = router;