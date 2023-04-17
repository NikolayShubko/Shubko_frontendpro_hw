const API_URL = "https://jsonplaceholder.typicode.com/posts/";
const API_URL_COMMENTS =
  "https://jsonplaceholder.typicode.com/comments?postId=";
const searchInput = document.querySelector(".search-field");
const findBtn = document.querySelector(".find-btn");
const postList = document.querySelector(".posts-holder");
const commentsHolder = document.querySelector(".comments-holder");

findBtn.addEventListener("click", () => {
  postList.innerHTML = "";
  commentsHolder.innerHTML = "";
  const searchValue = searchInput.value;
  if (searchValue >= 1 && searchValue <= 100) {
    fetchPosts(searchValue);
  } else {
    searchInput.value = "";
    alert("no post with that id");
  }
});

const fetchPosts = async (searchValue) => {
  try {
    const response = await fetch(API_URL + searchValue);
    const resolve = await response.json();
    renderPost(resolve, searchValue);
  } catch (err) {
    console.log("Something wrong" + err);
  }
};

const renderPost = (post, searchValue) => {
  const divPost = document.createElement("div");
  divPost.innerHTML = `
      <span class="post-id">Post ID: ${post.id}</span>
      <span class="user-id">User ID: ${post.userId}</span>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-body">${post.body}</p>
      <button class="view-btn">View Comments</button>
      `;

  postList.appendChild(divPost);
  const commnetsBtn = document.querySelector(".view-btn");
  commnetsBtn.addEventListener("click", () => {
    fetchComments(API_URL_COMMENTS + searchValue);
  });
};

const fetchComments = async (link) => {
  try {
    const response = await fetch(link);
    const resolve = await response.json();
    renderComents(resolve);
  } catch (err) {
    console.log("Something wrong" + err);
  }
};
const renderComents = (comments) => {
  commentsHolder.innerHTML = "";
  comments.forEach((element) => {
    const divComment = document.createElement("div");
    divComment.innerHTML = `
    <span class="comment-id">#${element.id}</span>
    <h3 class="comment-title">${element.name}</h3>
    <p class="comment-email">${element.email}</p>
    <p class="comment-text">${element.body}</p>
    `;
    commentsHolder.appendChild(divComment);
  });
};
