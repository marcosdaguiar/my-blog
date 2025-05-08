const validator = require('validator');
const Article = require('../models/Article_Models');

const create = async (req, res) => {
    try {
        // Get data from request body
        let params = req.body;
        
        // Debug params
        console.log('Params:', params);

        // validate data
        if (!params.title || !params.content) {
            throw new Error("Missing required fields: title and content");
        }

        let validate_title = !validator.isEmpty(params.title) &&
                           validator.isLength(params.title, {min: 5, max: undefined});
        let validate_content = !validator.isEmpty(params.content);

        if (!validate_title || !validate_content) {
            throw new Error("Invalid data: title must be at least 5 characters and content cannot be empty");
        }
        
        // create article object
        const article = new Article(params);  

        // save article to database using async/await
        const articleStored = await article.save();
        
        // return response
        return res.status(200).send({
            status: "success",
            message: "Article saved successfully",
            article: articleStored
        });

    } catch(error) {
        return res.status(400).send({
            status: "error",
            message: "Error processing request",
            error: error.message
        });
    }
}

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        
        if (!articles || articles.length === 0) {
            return res.status(404).send({
                status: "error",
                message: "No articles found"
            });
        }

        return res.status(200).send({
            status: "success",
            articles
        });
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error fetching articles",
            error: error.message
        });
    }
};


module.exports = {
    create,
    getArticles
}