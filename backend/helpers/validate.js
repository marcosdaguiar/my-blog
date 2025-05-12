const validator = require('validator');

const validateArticle = (params) =>{
    if (!params.title || !params.content) {
        throw new Error("Missing required fields: title and content");
    }

    let validate_title = !validator.isEmpty(params.title) &&
                        validator.isLength(params.title, {min: 5, max: undefined});
    let validate_content = !validator.isEmpty(params.content);

    if (!validate_title || !validate_content) {
        throw new Error("Invalid data: title must be at least 5 characters and content cannot be empty");
    }

}

module.exports = {
    validateArticle
}