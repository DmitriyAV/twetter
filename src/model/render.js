const Render = function () {

    const renderComment = function (comment, appendElm) {
        const div =
            `<div id="${comment.id}" class="comments">${comment.text}</div>`

        $(appendElm).append(div)


    }

    const renderPost = function (post, appendElem) {
        const div =
            `<div id="${post.id}" class="post">${post.text}</div>`
        $(appendElem).append(div)
    }

    return {
        renderComment,
        renderPost

    }

}