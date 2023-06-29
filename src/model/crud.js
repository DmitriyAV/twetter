const crud = function () {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                {id: "c1", text: "First comment on first post!"},
                {id: "c2", text: "Second comment on first post!!"},
                {id: "c3", text: "Third comment on first post!!!"}
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {id: "c4", text: "Don't worry second poster, you'll be first one day."},
                {id: "c5", text: "Yeah, believe in yourself!"},
                {id: "c6", text: "Haha second place what a joke."}
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const addPost = (text) => {
        postIdCounter++
        const newPost = {
            text: `${text}`,
            id: `p${postIdCounter}`,
            comments: []
        }
        posts.push(newPost)
    }

    const getPosts = () => [...posts]
    const removePost = (id) => posts = posts.filter(post => post.id !== id)

    const addComment = (text, postId) => {
        const newComments = {
            text: text,
            id: `c${commentIdCounter}`
        }
       let targetPost = posts.find(post => post.id === postId)
            targetPost.comments.push(newComments)
    }

    const removeComment = (postId, commentId) => {
       let targetPost = posts.find(post => post.id === postId)
            targetPost.comments.filter(comment => comment.id !== commentId)

    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        deletePost: removePost,
        addComment: addComment,
        deleteComment: removeComment,
    }
}
