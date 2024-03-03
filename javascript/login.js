const loginForm = document.querySelector("form");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".password");
const loginBtn = loginForm.querySelector(".login-button");
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";

loginBtn.addEventListener("click", checkUserMembership);

function checkUserMembership(event) {
  fetch("https://shoppingmall.fly.dev/login", {
    method: "POST",
    headers: {
      "content-type": "application/json ; charset=utf-8",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "https://shoppingmallserver.fly.dev/",
    },
    body: JSON.stringify({
      id: loginId.value,
      password: loginPw.value,
    }),
  })
    .then((Response) =>
      Response.json().then((data) => {
        localStorage.setItem(SAVEUSERNAME, data.name);
        success();
      })
    )
    .catch((error) => fail());
}

function success(event) {
  location.href = "/html/main/index.html";
  localStorage.setItem("onLogin", loginId.value);
  console.log("a");
}

function fail(event) {
  alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
}
if (localStorage.getItem(ONLOGIN) == "null") {
  alert("로그인이 필요한 서비스 입니다.");
  location.href = "/html/header/login.html";
}
