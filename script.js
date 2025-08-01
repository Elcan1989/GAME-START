// ✅ 評分系統
function rate(stars) {
  let starsElements = document.querySelectorAll("#rating span");
  starsElements.forEach((el, index) => {
    el.classList.toggle("active", index < stars);
  });
  document.getElementById("rating-text").textContent = `感謝你的評分：${stars} ⭐`;
}

// ✅ 玩家留言系統
function addComment(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let comment = document.getElementById("comment").value;
  let list = document.getElementById("comment-list");

  let li = document.createElement("li");
  li.textContent = `${username}：${comment}`;
  list.appendChild(li);

  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
}

// ✅ 聯絡表單
function sendMessage(event) {
  event.preventDefault();
  document.getElementById("status").textContent = "✅ 你的訊息已送出！（示範功能）";
}
