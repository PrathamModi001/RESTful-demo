exports.getPosts = (req,res,next) => {
    res.status(200).json({
        posts: [{title: 'Hello', content: 'This is my first post here!'}]
    })
}

exports.postPosts = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;

    // CREATE A POST IN A DB
    
    res.status(201).json({
        message: 'Post creation was successful!',
        post: {id: new Date().toISOString() , title: title, content: content}
    })
}