const API_URL="https://jsonplaceholder.typicode.com/posts/",API_URL_COMMENTS="https://jsonplaceholder.typicode.com/comments?postId=",searchInput=document.querySelector(".search-field"),findBtn=document.querySelector(".find-btn"),postList=document.querySelector(".posts-holder"),commentsHolder=document.querySelector(".comments-holder"),fetchPosts=(findBtn.addEventListener("click",()=>{postList.innerHTML="",commentsHolder.innerHTML="";var e=searchInput.value;1<=e&&e<=100?fetchPosts(e):(searchInput.value="",alert("no post with that id"))}),async e=>{try{var t=await(await fetch(API_URL+e)).json();renderPost(t,e)}catch(e){console.log("Something wrong"+e)}}),renderPost=(e,t)=>{var n=document.createElement("div");n.innerHTML=`
      <span class="post-id">Post ID: ${e.id}</span>
      <span class="user-id">User ID: ${e.userId}</span>
      <h3 class="post-title">${e.title}</h3>
      <p class="post-body">${e.body}</p>
      <button class="view-btn">View Comments</button>
      `,postList.appendChild(n),document.querySelector(".view-btn").addEventListener("click",()=>{fetchComments(API_URL_COMMENTS+t)})},fetchComments=async e=>{try{var t=await(await fetch(e)).json();renderComents(t)}catch(e){console.log("Something wrong"+e)}},renderComents=e=>{commentsHolder.innerHTML="",e.forEach(e=>{var t=document.createElement("div");t.innerHTML=`
     <span class="comment-id">#${e.id}</span>
     <h3 class="comment-title">${e.name}</h3>
     <p class="comment-email">${e.email}</p>
     <p class="comment-text">${e.body}</p>
     `,commentsHolder.appendChild(t)})};