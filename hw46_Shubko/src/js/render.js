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
