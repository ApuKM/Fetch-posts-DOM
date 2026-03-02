const loadPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       displayPosts(data);
  //     });
  const res = await fetch(url);
  const data = await res.json();
  displayPosts(data);
};

const displayPosts = (posts) => {
  const postContainer = document.getElementById("posts-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    // console.log(post.title)
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-blue-400 hover:scale-102 transition-all duration-200 p-4 rounded-md">
                <h2 class="text-gray-800 font-bold text-xl">${post.title}</h2>
                <p class="text-gray-700 font-semibold text-sm mt-2">${post.body}</p>
            </div>
        `;
    postContainer.appendChild(div);
  });
};
