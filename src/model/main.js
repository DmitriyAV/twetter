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

$('#post').on("click", function () {
    const text = $('#input').val()
    tweeter.addPost(text)
    rendered()
})