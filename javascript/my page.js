const wishUl = document.querySelector(".wish-list");
const WISHBRAND = "wishBrand";
const WISHNAME = "wishName";
const WISHPRICE = "wishPrice";
const WISHIMG = "wishImg";

let parseWishBrand = JSON.parse(localStorage.getItem(WISHBRAND) || "[]");
let parseWishName = JSON.parse(localStorage.getItem(WISHNAME) || "[]");
let parseWishPrice = JSON.parse(localStorage.getItem(WISHPRICE) || "[]");
let parseWishImg = JSON.parse(localStorage.getItem(WISHIMG) || "[]");

// console.log(parseWishBrand);

let wishLi = null;
let wishDiv = null;
let wishItem = null;
let brand = null;
let img = null;
let name = null;
let price = null;
let onWishBtn = null;

for (let a = 0; a < Object.values(parseWishName).length; a++) {
  wishLi = document.createElement("li");
  wishLi.className = "wish-li";
  wishLi.classList.add(a);

  wishDiv = document.createElement("div");
  wishDiv.className = "wish-div";

  wishInpo = document.createElement("div");
  wishInpo.className = "wish-inpo";

  onWishBtn = document.createElement("i");
  onWishBtn.className = "fa-solid fa-heart";
  onWishBtn.classList.add("off");

  img = document.createElement("img");
  img.className = "wish-img";

  brand = document.createElement("p");
  brand.className = "wish-brand";

  name = document.createElement("sub");
  name.className = "wish-name";

  price = document.createElement("p");
  price.className = "wish-price";

  wishInpo.appendChild(brand);
  wishInpo.appendChild(name);
  wishInpo.appendChild(price);
  wishDiv.appendChild(img);
  wishDiv.appendChild(wishInpo);
  wishDiv.appendChild(onWishBtn);
  wishLi.appendChild(wishDiv);
  wishUl.appendChild(wishLi);
}

let wishBrand = {};
let wishName = {};
let wishPrice = {};
let wishImg = {};

for (let c = 0; c < Object.values(parseWishName).length; c++) {
  wishBrand[`w` + c] = parseWishBrand[c];
  wishName[`w` + c] = parseWishName[c];
  wishPrice[`w` + c] = parseWishPrice[c];
  wishImg[`w` + c] = parseWishImg[c];
  // [`키값`] = 밸류; 딕셔너리 객체
  let brands = document.querySelectorAll(".wish-brand");
  let names = document.querySelectorAll(".wish-name");
  let prices = document.querySelectorAll(".wish-price");
  let imgs = document.querySelectorAll(".wish-img");
  brands[c].innerText = wishBrand[`w` + c];
  names[c].innerText = wishName[`w` + c];
  prices[c].innerText = wishPrice[`w` + c];
  imgs[c].src = wishImg[`w` + c];
}

const offBtn = document.querySelectorAll(".off");

offBtn.forEach((off) => {
  off.addEventListener("click", offWish);
});

function offWish(event) {
  const deleteWish = event.target.parentElement;

  parseWishBrand.splice(deleteWish.parentElement.classList.item(1), 1);
  parseWishName.splice(deleteWish.parentElement.classList.item(1), 1);
  parseWishPrice.splice(deleteWish.parentElement.classList.item(1), 1);
  parseWishImg.splice(deleteWish.parentElement.classList.item(1), 1);

  localStorage.setItem(WISHBRAND, JSON.stringify(parseWishBrand));
  localStorage.setItem(WISHNAME, JSON.stringify(parseWishName));
  localStorage.setItem(WISHPRICE, JSON.stringify(parseWishPrice));
  localStorage.setItem(WISHIMG, JSON.stringify(parseWishImg));
  location.reload();
}

//-------------------------login/out-----------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";
const ONLOGIN = "onLogin";
const REMOVE = "remove";

const userId = localStorage.getItem(ONLOGIN);

const login = document.querySelector(".login");
const ul = document.querySelector(".head-ul-2");

const logout = document.createElement("li");
const createP = document.createElement("p");

createP.innerText = "로그아웃";
logout.appendChild(createP);
ul.insertBefore(logout, ul.firstChild);
logout.classList.add("logout");

if (userId === null) {
  login.classList.remove(REMOVE);
  logout.classList.add(REMOVE);
} else {
  logout.classList.remove(REMOVE);
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
}

function doLogout(event) {
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}

//------------------------------change name-------------------------------------

const userName = document.querySelector(".user-name");
const nameChange = document.querySelector(".change-name");
const nameBox = document.querySelector(".name-box");
const submit = document.querySelector(".submit-button");

const createUserName = document.createElement("h3");

createUserName.innerText = "닉네임 : " + localStorage.getItem(SAVEUSERNAME);
userName.insertBefore(createUserName, userName.firstChild);
createUserName.classList.add("name");

nameChange.addEventListener("click", changeName);

function changeName(event) {
  nameBox.classList.remove(REMOVE);
  submit.classList.remove(REMOVE);
  nameChange.classList.add(REMOVE);
  nameBox.value = "";
  submit.addEventListener("click", change);
}

function change(event) {
  localStorage.setItem(SAVEUSERNAME, nameBox.value);
  createUserName.innerText = "닉네임 : " + localStorage.getItem(SAVEUSERNAME);
  nameBox.classList.add(REMOVE);
  submit.classList.add(REMOVE);
  nameChange.classList.remove(REMOVE);
}
//--------------------------------my page in--------------------------------------//
if (localStorage.getItem(ONLOGIN) == "null") {
  alert("로그인이 필요한 서비스 입니다.");
  location.href = "./html/header/login.html";
}
const search = document.querySelector(".fa-magnifying-glass");
const head = document.querySelector(".head-ul-1");
const categoey = document.querySelector(".category");
const input = document.querySelector(".searching");
const SEARCHBRAND = "searchBrand";
const SEARCHLINK = "searchLink";
const SEARCHIMG = "searchImg";
const SEARCHPRICE = "searchPrice";
const BRANDARRAY = "brandArray";
const LINKARRAY = "linkArray";
const IMGARRAY = "imgArray";
const PRICEARRAY = "priceArray";

const parseBrand = JSON.parse(localStorage.getItem(BRANDARRAY));
const parseLink = JSON.parse(localStorage.getItem(LINKARRAY));
const parseImg = JSON.parse(localStorage.getItem(IMGARRAY));
const parsePrice = JSON.parse(localStorage.getItem(PRICEARRAY));

let saveBrand = Array(0);
let saveLink = Array(0);
let saveImg = Array(0);
let savePrice = Array(0);

let inputValue = [];

let searchingTextArray = [];

search.addEventListener("click", () => {
  inputValue.push(input.value); //영어 안됨...왜?
  for (let i = 0; i < input.value.length; i++) {
    searchingTextArray[i] = inputValue[0].substring(i, i + 1);
  }
  localStorage.setItem("inputValue", inputValue[0]);
  searchFunction();
  if (saveBrand[0] != undefined) {
    location.href = "../header/search.html";
  }
});

let letterOfItem = [];
let searchKeyword = 0;
let flag = false;

let searchFirst = [];

function searchFunction() {
  if (flag) {
    flag = false;
  }
  for (let a = 0; a < parseBrand.length; a++) {
    letterOfItem[a] = Array(0);

    for (let i = 0; i < parseBrand.length; i++) {
      letterOfItem[a][i] = parseBrand[a].substring(i, i + 1);
    }
  }

  for (let i = 0; i < letterOfItem.length; i++) {
    for (let a = 0; a < letterOfItem[i].length; a++) {
      searchKeyword = a;
      for (let b = 0; b < searchingTextArray.length; b++) {
        if (searchFirst.indexOf(i) == -1) {
          //같은 값이 여러번 푸쉬 되지 않도록 배열에서 같은 값이 없을 때만 푸쉬
          if (searchKeyword == letterOfItem[i].indexOf(searchingTextArray[b])) {
            //searchKeyword == 검색어
            searchFirst.push(i); //i값으로 브랜드 배열에서 값 조회
          }
          searchKeyword = searchKeyword + 1;
        } else {
          break;
        }
        if (b == searchingTextArray.length - 1) {
          //b가 검색어 배열의 길이와 같아 졌을 때 = 검색어를 싹 다 훑었을 때
          flag = true;
        }
      }
    }
  }
  if (flag) {
    for (let c = 0; c < searchFirst.length; c++) {
      saveBrand.push(parseBrand[searchFirst[c]]);
      saveImg.push(parseImg[searchFirst[c]]);
      saveLink.push(parseLink[searchFirst[c]]);
      savePrice.push(parsePrice[searchFirst[c]]);
    }
    localStorage.setItem(SEARCHBRAND, JSON.stringify(saveBrand));
    localStorage.setItem(SEARCHLINK, JSON.stringify(saveLink));
    localStorage.setItem(SEARCHIMG, JSON.stringify(saveImg));
    localStorage.setItem(SEARCHPRICE, JSON.stringify(savePrice));
  }
  if (saveBrand[0] == undefined) {
    alert("잘못된 검색어입니다.");
  }
}
//--------------------------------------------------------search--------------------------------------------------
