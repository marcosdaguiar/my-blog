const test = (req, res) => {
    return res.status(200).send({message: "Testing route"});
}

const course = (req, res) => {

    return res.status(200).send({
        course: "Master in React",
        author: "Marcos",
        url: "www.masterinreact.com"
    });
}

const create = (req, res) => {
    // Get data from request body
    let params = req.body;

    // validate data

    // create article object

    // assign values to object

    // save article to database

    // return response
    return res.status(200).send({
        message: "Create article",
        params
    });
}


module.exports = {
    test,
    course,
    create

}