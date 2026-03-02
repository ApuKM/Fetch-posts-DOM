const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        displayPosts(data)
    })
}

const displayPosts = (posts) => {
    const postContainer = document.getElementById("posts-container");
    posts.forEach(post => {
        // console.log(post.title)
        const li = document.createElement("li");
        li.innerText = post.title
        postContainer.appendChild(li);
    });
}