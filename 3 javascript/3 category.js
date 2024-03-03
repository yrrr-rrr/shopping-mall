//----------------------login/out----------------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";
const ONLOGIN = "onLogin";
const REMOVE = "remove";

const userId = localStorage.getItem(ONLOGIN);

const login = document.querySelector(".login");
const ul =   document.querySelector(".head-ul-2");

const logout = document.createElement("li")
const createP = document.createElement("p")

createP.innerText = "로그아웃";
logout.appendChild(createP);
ul.insertBefore(logout, ul.firstChild);
logout.classList.add("logout")

if(userId === null) {
  login.classList.remove(REMOVE);
  logout.classList.add(REMOVE);
}
else {
  logout.classList.remove(REMOVE);
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}
//--------------------------------------------------------search--------------------------------------------------
// const CARTBRAND = "cartBrand";
// const CARTIMG = "cartImg";
// const CARTNAME = "cartName";
// const CARTPRICE = "cartPrice";

// function cartIntoLocalStorage (saveCart) {
//   localStorage.setItem(CARTBRAND, JSON.stringify(cartBrands));
//   localStorage.setItem(CARTNAME, JSON.stringify(cartNames));
//   localStorage.setItem(CARTPRICE, JSON.stringify(cartPrices));
//   localStorage.setItem(CARTIMG, JSON.stringify(cartImgs));
//   localStorage.setItem("cartPPrice", JSON.stringify(cPrices));
// }

// let parseCartBrand = JSON.parse(localStorage.getItem(CARTBRAND));

// console.log(parseCartBrand);

/*-----------------------------cart----------------------------------------------------------------------------*/
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
  inputValue.push(input.value);//영어 안됨...왜?
  for (let i = 0; i < input.value.length; i++) {
    searchingTextArray[i] = inputValue[0].substring(i, i + 1);
  }
  localStorage.setItem("inputValue", inputValue[0]);
  searchFunction();
  if(saveBrand[0] != undefined){
    location.href = "/html/header/3 search.html";
  }
})

let letterOfItem = [];
let searchKeyword = 0;
let flag = false;

let searchFirst = [];

function searchFunction() {
  if(flag){
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
        if(searchFirst.indexOf(i) == -1){ //같은 값이 여러번 푸쉬 되지 않도록 배열에서 같은 값이 없을 때만 푸쉬
          if(searchKeyword == letterOfItem[i].indexOf(searchingTextArray[b])){ //searchKeyword == 검색어
            searchFirst.push(i); //i값으로 브랜드 배열에서 값 조회
          }
        searchKeyword = searchKeyword + 1;
        }
        else {
          break;
        }
        if (b == searchingTextArray.length-1) {//b가 검색어 배열의 길이와 같아 졌을 때 = 검색어를 싹 다 훑었을 때
          flag = true;
        }
      }
    }
  }
  if (flag) {
    for(let c = 0; c < searchFirst.length; c++){
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
  if(saveBrand[0] == undefined){
    alert("잘못된 검색어입니다.")
  }
}