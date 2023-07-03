const Render = function () {

    const renderInputCommentToPost = function (appendElm) {
        const elm = appendElm
        const input =
            `<div id="included"><input id="commentInput" type="text" placeholder="Your comment">
            <button class="addCommentToPost" type="button">Add Comment</button></div>`
        $(elm).append(input)
    }
    const renderComment = function (comment, appendElm) {
        const div = `<div class="comments_container">
            <div class="delete-comment">x</div>
            <div class="comments" id="${comment.id}" >${comment.text}</div></div>`
        $(appendElm).append(div)
    }

    const renderPost = function (post, appendElem) {
        const div = `<div class="post_container">
            <div id="${post.id}" class="post">${post.text}</div>
            <div class="pots_btn_container">
            <button class="delete" type="button">Delete Post</button>
            </div>
            </div> `
        $(appendElem).append(div)
    }

    return {
        renderComment,
        renderPost,
        renderInputCommentToPost

    }
}