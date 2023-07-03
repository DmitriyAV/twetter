const tweeter = crud()
const render = Render()

const renderedComments = function (post) {
    $(`#${post.id.comments}`).empty()
    for (let comment of post.comments) {
        render.renderComment(comment, `#${post.id}`)
    }
}
const rendered = function () {
    $('#posts').empty()
    for (let post of tweeter.getPosts()) {
        render.renderPost(post, "#posts")
        renderedComments(post)
    }
}

rendered()

$('#container').on("click", "#post" ,function () {
    let text = $(this).siblings('#input').val();
    tweeter.addPost(text)
    rendered()
})

$('#posts').on("click", ".delete", function () {
    let id = $(this).closest('.post_container').find('.post').attr('id')
    tweeter.deletePost(id)
    rendered()
})

$('#posts').on("mouseenter", ".post", function () {
        let id = $(this).closest('.post').attr('id')
        render.renderInputCommentToPost(`#${id}`)

    })
$('#posts').on("mouseleave", ".post",  function () {
    $(this).find("#included").remove()
})

$('#posts').on("click", ".addCommentToPost", function () {
    const input = $(this).closest('#included').find('#commentInput').val()
    const id = $(this).closest('.post_container').find('.post').attr('id')
    tweeter.addComment(input, id)
    rendered()
})

$('#posts').on("click", ".delete-comment", function (){
    const idComments = $(this).closest('.comments_container').find('.comments').attr('id')
    const postId = $(this).closest('.post_container').find('.post').attr('id')
    tweeter.deleteComment(postId, idComments)
    rendered()
 })