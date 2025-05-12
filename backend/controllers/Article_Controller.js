const fs = require('fs');
const {validateArticle} = require('../helpers/validate');
const Article = require('../models/Article_Models');
const path = require('path');

const create = async (req, res) => {
    // Get data from request body
    let params = req.body;

    // Debug params
    console.log('Params:', params);

    try {

        // validate data
        validateArticle(params);
        
        // create article object
        const article = new Article(params);  

        // save article to database using async/await
        const articleStored = await article.save();
        
        // return response
        return res.status(200).json({
            status: "success",
            message: "Article saved successfully",
            article: articleStored
        });

    } catch(error) {
        return res.status(400).json({
            status: "error",
            message: "Error processing request",
            error: error.message
        });
    }
}

const getArticles = async (req, res) => {
    try {
        let limit = undefined; // Default limit

        // Check if we have a number parameter
        if (req.params.number) {
            limit = parseInt(req.params.number);
        }

        const articles = await Article.find({})
            .limit(limit)
            .sort({ date: -1 });

        if (!articles || articles.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No articles found"
            });
        }

        return res.status(200).json({
            status: "success",
            count: articles.length,
            articles
        });
    } catch (error) {
        console.error('Error in getArticles:', error);
        return res.status(500).json({
            status: "error",
            message: "Error fetching articles",
            error: error.message
        });
    }
};

const getOne = async (req, res) => {
    try {
        // get by id
        const id = req.params.id;

        // search article using async/await
        const article = await Article.findById(id);

        // return error if not found
        if (!article) {
            return res.status(404).json({
                status: "error",
                message: "Article not found"
            });
        }

        // return article if found
        return res.status(200).json({
            status: "success",
            article
        });
    } catch (error) {
        console.error('Error in getOne:', error);
        return res.status(500).json({
            status: "error",
            message: "Error fetching article",
            error: error.message
        });
    }
}

const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);

        if (!article)
            return res.status(404).json({ 
                status: "error", 
                message: "Article not found" 
            });

        res.status(200).json({ 
            status: "success", 
            message: "Article deleted", 
            article 
        });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ 
            status: "error", 
            message: "Delete failed", 
            error: error.message 
        });
    }
};


const editArticle = async (req, res) => {
    try {
        // get by id
        const id = req.params.id;
        const params = req.body;

        // validate data
        validateArticle(params);

        // search article using async/await
        const article = await Article.findByIdAndUpdate(id, params, { new: true });

        // return error if not found
        if (!article) {
            return res.status(404).json({
                status: "error",
                message: "Article not found"
            });
        }

        // return article if found
        return res.status(200).json({
            status: "success",
            message: "Article updated successfully",
            article
        });
    } catch (error) {
        console.error('Error in edit:', error);
        return res.status(500).json({
            status: "error",
            message: "Error updating article",
            error: error.message
        });
    }
}

const uploadImage = async (req, res) => {
    try {
        // Check if file exists
        if (!req.file) {
            return res.status(404).json({
                status: "error",
                message: "No file uploaded"
            });
        }

        // Get file info
        const originalFileName = req.file.originalname;
        const fileName = req.file.filename;
        const extension = originalFileName.split(".").pop().toLowerCase();

        // Validate extension
        const validExtensions = ["png", "jpg", "jpeg", "gif"];
        if (!validExtensions.includes(extension)) {
            // Delete invalid file
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                }
            });

            return res.status(400).json({
                status: "error",
                message: "Invalid file type. Allowed: png, jpg, jpeg, gif"
            });
        }
        
        const id = req.params.id;
        // search article using async/await
        const article = await Article.findByIdAndUpdate(id, {image: fileName }, { new: true });

        // return error if not found
        if (!article) {
            return res.status(404).json({
                status: "error",
                message: "Article not found"
            });
        }

        // Return success response
        return res.status(200).json({
            status: "success",
            message: "Image uploaded successfully",
            file: req.file
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error processing file",
            error: error.message
        });
    }
};

const image = (req, res) => {
    const file = req.params.file;
    const pathFile = './images/articles/' + file;

    // Check if file exists
    fs.stat(pathFile, (err, found) => {
        if (found) {
            return res.sendFile(path.resolve(pathFile))
        }else{
            return res.status(404).json({
                status: "error",
                message: "Image not found"
            });
        }
    });
};

const search = async (req, res) => {
    try {
        // Get search from request
        const searchTerm = req.params.search;

        // Search for articles that match the search term in title or content
        const articles = await Article.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' }},
                { content: { $regex: searchTerm, $options: 'i' }}
            ]
        })
        .sort({ date: -1 }); // Sort by date in descending order

        if (!articles || articles.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No articles found matching the search term"
            });
        }

        return res.status(200).json({
            status: "success",
            count: articles.length,
            articles
        });

    } catch (error) {
        console.error('Search error:', error);
        return res.status(500).json({
            status: "error",
            message: "Error searching articles",
            error: error.message
        });
    }
}

module.exports = {
    create,
    getArticles,
    getOne,
    deleteArticle,
    editArticle,
    uploadImage,
    image,
    search
}