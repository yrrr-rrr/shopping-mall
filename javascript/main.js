const bannerBox = document.querySelector(".banner-box");
const bannerList = document.querySelector(".banner-list");
const banners = document.querySelectorAll(".banner");
let currentIndex = 0;
//----------------------------------------------------------------/
// localStorage.setItem("onLogin", "null");

banners.forEach((banner) => {
  banner.style.width = `${bannerBox.clientWidth}px`;
});

bannerList.style.width = `${bannerBox.clientWidth * banners.length}px`;

//`문자열` = 문자열 `${내용(자스 코드 적을 수 있음)}

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  //current-index = (current-index < 0) ? 0 : current-index;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex;
  }

  bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  clearInterval(interval);
  interval = getInterval();
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= banners.length ? banners.length - 1 : currentIndex;
  bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  clearInterval(interval);
  interval = getInterval();
});

const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= banners.length ? 0 : currentIndex;
    bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  }, 3000);

  function rotation() {
    currentIndex++;
    currentIndex = currentIndex >= banners.length ? 0 : currentIndex;
    bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  }
  return setInterval(rotation, 4000);
};

let interval = getInterval();

//---------------------------------login/out----------------------------------------
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

if (userId != null) {
  logout.classList.remove(REMOVE);
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
} else {
  login.classList.remove(REMOVE);
  logout.classList.add(REMOVE);
}

function doLogout(event) {
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}
//----------------------------------------search-------------------------------------------------
const search = document.querySelector(".fa-magnifying-glass");
const head = document.querySelector(".head-ul-1");
const categoey = document.querySelector(".category");
const input = document.querySelector(".searching");
const BRANDARRAY = "brandArray";
const LINKARRAY = "linkArray";
const IMGARRAY = "imgArray";
const PRICEARRAY = "priceArray";
const SEARCHBRAND = "searchBrand";
const SEARCHLINK = "searchLink";
const SEARCHIMG = "searchImg";
const SEARCHPRICE = "searchPrice";

const brandArray = [
  "도로시",
  "디니크스튜디오",
  "로이드",
  "쇼브오프",
  "실버태그",
  "안나수이",
  "알루미",
  "알루미",
  "에이지씨",
  "통쉐",
  "겟미블링",
  "까롯",
  "까롯",
  "나다주얼리",
  "르마스크",
  "르마스크",
  "바이실",
  "살갖",
  "일리앤",
  "텐타클",
  "하이메",
  "라이크재즈",
  "로울",
  "로제리",
  "로제리",
  "스쿠도",
  "앵브록스",
  "어거스트하모니",
  "엔프프",
  "잇더즌매터",
  "잇더즌매터",
  "레끌라",
  "비아베간테",
  "키튼브릿지",
  "스테이잼",
  "판도라",
];
const linkArray = [
  "./html/detail/bracelet/b-3.html",
  "./html/detail/bracelet/b-2.html",
  "./html/detail/bracelet/b-9.html",
  "./html/detail/bracelet/b-4.html",
  "./html/detail/bracelet/b-1.html",
  "./html/detail/bracelet/b-7.html",
  "./html/detail/bracelet/b-8.html",
  "./html/detail/necklace/n-8.html",
  "./html/detail/bracelet/b-5,html",
  "./html/detail/bracelet/b-6.html",
  "./html/detail/earing/e-1.html",
  "./html/detail/earing/e-9.htmml",
  "./html/detail/ring/r-1.html",
  "./html/detail/earing/e-2.html",
  "./html/detail/earing/e-3.html",
  "./html/detail/ring/r-4.html",
  "./html/detail/earing/e-4.html",
  "./html/detail/earing/e-5.html",
  "./html/detail/earing/e-6.html",
  "./html/detail/earing/e-7.html",
  "./html/detail/earing/e-8.html",
  "./html/detail/necklace/n-3.html",
  "./html/detail/necklace/n-1.html",
  "./html/detail/necklace/n-7.html",
  "./html/detail/ring/r-3.html",
  "./html/detail/necklace/n-9.html",
  "./html/detail/necklace/n-2.html",
  "./html/detail/necklace/n-4.html",
  "./html/detail/necklace/n-5.html",
  "./html/detail/necklace/n-6.html",
  "./html/detail/ring/r-7.html",
  "./html/detail/ring/r-2.html",
  "./html/detail/ring/r-5.html",
  "./html/detail/ring/r-8.html",
  "./html/detail/ring/r-6.html",
  "./html/detail/ring/r-9.html",
];
const imgArray = [
  "./img/bracelet/도로시.png",
  "./img/bracelet/디니크스튜디오.png",
  "./img/bracelet/로이드.png",
  "./img/bracelet/쇼브오프.png",
  "./img/bracelet/실버태그.png",
  "./img/bracelet/안나수이.png",
  "./img/bracelet/알루미.png",
  "./img/necklace/알루미.png",
  "./img/bracelet/에이지씨.png",
  "./img/bracelet/통쉐.png",
  "./img/earring/겟미블링.png",
  "./img/earring/까롯.png",
  "./img/ring/까롯.png",
  "./img/earring/나다주얼리.png",
  "./img/earring/르마스크.png",
  "./img/ring/르마스크.png",
  "./img/earring/바이실.png",
  "./img/earring/살갗.png",
  "./img/earring/일리앤.png",
  "./img/earring/텐타클.png",
  "./img/earring/하이메.png",
  "./img/necklace/라이크재즈.png",
  "./img/necklace/로울.png",
  "./img/necklace/로제리.png",
  "./img/ring/로제리.png",
  "./img/necklace/스쿠도.png",
  "./img/necklace/앵브록스.png",
  "./img/necklace/어거스트하모니.png",
  "./img/necklace/앤프프.png",
  "./img/necklace/잇더즌매터.png",
  "./img/ring/잇더즌매터.png",
  "./img/ring/레끌라.png",
  "./img/ring/비아베간테.png",
  "./img/ring/키튼브릿지.png",
  "./img/ring/스테이잼.png",
  "./img/ring/판도라.png",
];
const priceArray = [
  "57,000원",
  "67,000원",
  "83,000원",
  "78,000원",
  "62,000원",
  "72,000원",
  "76,000원",
  "76,000원",
  "59,000원",
  "57,000원",
  "59,000",
  "83,000원",
  "67,000원",
  "58,000원",
  "52,000원",
  "87,000원",
  "61,000원",
  "78,000원",
  "48,000원",
  "58,000원",
  "76,000원",
  "79,000원",
  "72,000원",
  "42,000원",
  "67,000원",
  "83,000원",
  "68,000",
  "88,000원",
  "59,000원",
  "57,000원",
  "42,000원",
  "58,000원",
  "69,000원",
  "67,000원",
  "58,000원",
  "78,000원",
];

localStorage.setItem(BRANDARRAY, JSON.stringify(brandArray));
localStorage.setItem(LINKARRAY, JSON.stringify(linkArray));
localStorage.setItem(IMGARRAY, JSON.stringify(imgArray));
localStorage.setItem(PRICEARRAY, JSON.stringify(priceArray));

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
    location.href = "./html/header/search.html";
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
  for (let a = 0; a < brandArray.length; a++) {
    letterOfItem[a] = Array(0);

    for (let i = 0; i < brandArray.length; i++) {
      letterOfItem[a][i] = brandArray[a].substring(i, i + 1);
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
      saveBrand.push(brandArray[searchFirst[c]]);
      saveImg.push(imgArray[searchFirst[c]]);
      saveLink.push(linkArray[searchFirst[c]]);
      savePrice.push(priceArray[searchFirst[c]]);
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
// localStorage.setItem("onLogin", "a");
