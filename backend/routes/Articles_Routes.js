const express = require('express');
const router = express.Router();
const multer = require('multer');
const ArticleController = require('../controllers/Article_Controller');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images/articles/');
    },
    filename: function(req, file, cb) {
        cb(null, "article" + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Routes
router.post('/create', ArticleController.create);
router.get('/articles', ArticleController.getArticles); // Base route for all articles
router.get('/articles/limit/:number', ArticleController.getArticles); // Route with limit parameter
router.get('/article/:id', ArticleController.getOne); // Route with limit parameter
router.delete('/article/:id', ArticleController.deleteArticle); // Route with limit parameter
router.put('/article/:id', ArticleController.editArticle); // Route with limit parameter
router.post('/upload-image/:id', [upload.single("file0")], ArticleController.uploadImage); // Route with limit parameter
router.get('/image/:file', ArticleController.image); // Route with limit parameter
router.get('/search/:search', ArticleController.search); // Route with limit parameter

module.exports = router;