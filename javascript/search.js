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
    location.href = "/html/header/search.html";
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
let parseSearchBrand = JSON.parse(localStorage.getItem(SEARCHBRAND));
let parseSearchImg = JSON.parse(localStorage.getItem(SEARCHIMG));
let parseSearchLink = JSON.parse(localStorage.getItem(SEARCHLINK));
let parseSearchPrice = JSON.parse(localStorage.getItem(SEARCHPRICE));

const searchUl = document.querySelector(".search-ul");

for (let i = 0; i < parseSearchBrand.length; i++) {
  let searchA = document.createElement("a");
  let searchLi = document.createElement("li");
  let searchImg = document.createElement("img");
  let searchBrand = document.createElement("p");
  let searchPrice = document.createElement("p");

  searchA.setAttribute("href", parseSearchLink[i]);
  searchImg.setAttribute("src", parseSearchImg[i]);
  searchBrand.innerText = parseSearchBrand[i];
  searchPrice.innerText = parseSearchPrice[i];

  searchLi.className = "search-li" + i;
  searchPrice.className = "price";
  searchLi.appendChild(searchImg);
  searchLi.appendChild(searchBrand);
  searchLi.appendChild(searchPrice);
  searchA.appendChild(searchLi);
  searchUl.appendChild(searchA);
}
/*--------------------------------------- 리스트이미지, 이름 등 삽입-------------*/
const resultText1 = document.querySelector(".result-text1");
const resultText2 = document.querySelector(".result-text2");
const resultText = document.querySelector(".result-text3");
const resultText4 = document.querySelector(".result-text4");
const resultText5 = document.querySelector(".result-text5");
const secondHeaderLi1 = document.querySelector(".second-header-li-1");
const secondHeaderLi2 = document.querySelector(".second-header-li-2");
const secondHeaderLi = document.querySelector(".second-header-li-3");
const secondHeaderLi4 = document.querySelector(".second-header-li-4");
const secondHeaderLi5 = document.querySelector(".second-header-li-5");
let searchInput = localStorage.getItem("inputValue");

const focus = document.querySelector(".focus");

resultText1.innerText = searchInput;
resultText2.innerText = parseSearchBrand.length;
resultText5.innerText = parseSearchBrand.length;

resultText3.innerText = secondHeaderLi1.innerText.replace("검색", "");

let secondHeaderLiArray = [
  secondHeaderLi1,
  secondHeaderLi2,
  secondHeaderLi3,
  secondHeaderLi4,
  secondHeaderLi5,
];

for (let i = 0; i < secondHeaderLiArray.length; i++) {
  secondHeaderLiArray[i].addEventListener("click", () => {
    headerArray(i);
  });
}

function headerArray(a) {
  // 함수에 인자값을 받아 쓰는걸로 조건에 따라 다르게 함수를 실행시킬 수 있음
  for (let i = 0; i < secondHeaderLiArray.length; i++) {
    secondHeaderLiArray[i].classList.remove("focus");
  }
  secondHeaderLiArray[a].classList.add("focus");
  resultText3.innerText = secondHeaderLiArray[a].innerText;
}
/*---------------------------메인, 세컨드 헤더 -------------------------------------- */
const productListBtn = document.querySelector(".check-btn");

productListBtn.addEventListener("click", () => {
  productListBtn.style.backgroundColor = "red";
  productListBtn.style.border = "1px solid rgb(205, 0, 0)";
  productListBtn.innerText = "√";
});

const filterTitle = document.querySelector(".filter-1-title");
const downBtn = document.querySelector(".fa-caret-down");
const filter1 = document.querySelector(".filter-1-drop");
const REMOVE = "remove";

const upBtn = document.createElement("i");
upBtn.classList.add("fa-solid");
upBtn.classList.add("fa-caret-up");

downBtn.addEventListener("click", () => {
  filter1.classList.remove(REMOVE);
  downBtn.style.display = "none";
  filterTitle.appendChild(upBtn);
});

upBtn.addEventListener("click", () => {
  filter1.classList.add(REMOVE);
  downBtn.style.display = "block";
  console.log("a");
  upBtn.remove();
});

const drop1 = document.querySelector(".filter-1-drop-1");
const drop2 = document.querySelector(".filter-1-drop-2");
const drop = document.querySelector(".filter-1-drop-3");
const drop4 = document.querySelector(".filter-1-drop-4");

const dropDownArray = [drop1, drop2, drop3, drop4];

for (let i = 0; i < dropDownArray.length; i++) {
  dropDownArray[i].addEventListener("click", () => {
    dropDown(i);
  });
}

function dropDown(a) {
  for (let i = 0; i < dropDownArray.length; i++) {
    dropDownArray[i].classList.remove("click");
    console.log(i);
  }
  dropDownArray[a].classList.add("click");
  resultText4.innerText = dropDownArray[a].innerText;
}
