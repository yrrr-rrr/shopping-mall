const loginForm = document.querySelector("form");
const loginUserName = loginForm.querySelector(".name");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".pw");
const reconfirmPw = loginForm.querySelector(".re-pw");
const loginBtn = loginForm.querySelector(".btn");
const SAVEUSERNAME = "saveUserName";
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
// const userName = localStorage.getItem(SAVEUSERNAME);
const userId = localStorage.getItem(SAVEUSERID);
const userPw = localStorage.getItem(SAVEUSERPW);
const same = document.querySelector(".same");

document.addEventListener("keydown", eneterEvent);

function eneterEvent(event) {
  if (loginId.value === userId) {
    available();
    loginId.value = null;
    loginPw.value = null;
  } else {
    loginPw.addEventListener("focus", reconfirmPassword);
  }
}

function available(event) {
  alert("이미 가입된 회원입니다.");
  //  loginUserName.required = false; 인풋 속성 접근은 걍 엘리먼트.속성이름 = 트루/펄스;
}

function reconfirmPassword() {
  if (loginPw.value !== reconfirmPw.value) {
    same.innerHTML = "비밀번호가 일치하지 않습니다";
    same.style.color = "red";
    loginBtn.disabled = true;
  } else {
    same.innerHTML = "비밀번호가 일치합니다.";
    same.style.color = "blue";
    loginBtn.disabled = false;

    loginForm.addEventListener("submit", saveLogin);
  }
}
loginPw.onchange = reconfirmPassword;
reconfirmPw.onkeyup = reconfirmPassword;

function saveLogin(event) {
  event.preventDefault();
  fetch("https://shoppingmall.fly.dev/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json ; charset=utf-8",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "https://shoppingmallserver.fly.dev/",
    },
    body: JSON.stringify({
      id: loginId.value,
      password: loginPw.value,
      name: loginUserName.value,
    }),
  })
    .then((response) =>
      response
        .json()
        .then((data) => localStorage.setItem(SAVEUSERNAME, data.name))
    )
    .catch((error) => console.log("err"));
  goToLogin();
}
function goToLogin() {
  location.href = "/html/header/login.html";
}
// if (localStorage.getItem(ONLOGIN) == "null") {
//   alert("로그인이 필요한 서비스 입니다.")
// location.href = "/html/header/login.html";
// }
