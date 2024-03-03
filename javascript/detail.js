const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
let productNumbers = document.querySelector(".product-numbers");
let price = document.querySelector(".number-price");
let wholePrice = document.querySelector(".whole-price");
const originPrice = document.querySelector(".price");

//-------------------------------price-----------------------

plusButton.addEventListener("click", plusNumber);

function plusNumber(event) {
  let n = Number(productNumbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const ORIGINRICE = Number(originPrice.innerText.replaceAll(/(원|,)/g, ""));
  //replace(바꿀 인자, 바꿀 값)--replace는 처음 발견한 하나만 바꾸기 때문에 보통 replaceAll을 씀 replaceAll은 전부 다 바꿈
  let plus = (price.innerText = p + ORIGINRICE);

  price.innerText = plus.toLocaleString("ko-KR") + "원";
  wholePrice.innerText = price.innerText;
  productNumbers.innerText = n + 1;
}
// 가장 위에 있는 절 대 바뀌지 않을 price 클래스를 가진 요소를 const로 변수 선언하고 그를 이용해 상품 수량별 가격을 더하고 뺌
minusButton.addEventListener("click", minusNumber);

function minusNumber(event) {
  let n = Number(productNumbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const ORIGINRICE = Number(originPrice.innerText.replaceAll(/(원|,)/g, ""));
  if (n > 1) {
    productNumbers.innerText = n - 1;
  }
  if (n !== 1) {
    let minus = (price.innerText = p - ORIGINRICE);
    price.innerText = minus.toLocaleString("ko-KR") + "원";
    wholePrice.innerText = price.innerText;
  }
}

//--------------------wish-----------------------------------
const cartBtn = document.querySelector(".cart-button");
const heart = document.querySelector(".heart");
const wishHeart = document.querySelector(".fa-heart");
const REMOVE = "remove";
const WISH = "wish";
let productBrand = document.querySelector(".brand");
let productName = document.querySelector(".product-name");
let productPrice = document.querySelector(".price");
const productImg = document.querySelector(".product-img").src;
const ONLOGIN = "onLogin";
const WISHBRAND = "wishBrand";
const WISHNAME = "wishName";
const WISHPRICE = "wishPrice";
const WISHIMG = "wishImg";

heart.addEventListener("click", goToLogin);

function goToLogin(event) {
  if (localStorage.getItem(ONLOGIN) !== "null") {
    heart.addEventListener("click", onWishList);
  } else {
    alert("로그인이 필요한 서비스입니다.");
    location.href = "/html/header/login.html";
  }
}
let wishBrand = Array(0);
let wishName = Array(0);
let wishPrice = Array(0);
let wishImg = Array(0);

function onWishList(event) {
  wishBrand.push(productBrand.innerText);
  wishName.push(productName.innerText);
  wishPrice.push(productPrice.innerText);
  wishImg.push(productImg);

  if (localStorage.getItem(WISHNAME) == null) {
    localStorage.setItem(WISHBRAND, JSON.stringify(wishBrand));
    localStorage.setItem(WISHNAME, JSON.stringify(wishName));
    localStorage.setItem(WISHPRICE, JSON.stringify(wishPrice));
    localStorage.setItem(WISHIMG, JSON.stringify(wishImg));
  } else {
    saveWish();
  }
}

let wishBrands = JSON.parse(localStorage.getItem(WISHBRAND) || "[]");
let wishNames = JSON.parse(localStorage.getItem(WISHNAME) || "[]");
let wishPrices = JSON.parse(localStorage.getItem(WISHPRICE) || "[]");
let wishImgs = JSON.parse(localStorage.getItem(WISHIMG) || "[]");

function saveWish() {
  wishBrands.push(productBrand.innerText);
  wishNames.push(productName.innerText);
  wishPrices.push(productPrice.innerText);
  wishImgs.push(productImg);

  wishIntoLocalStorage();
  location.reload();
}

function wishIntoLocalStorage(saveWish) {
  localStorage.setItem(WISHBRAND, JSON.stringify(wishBrands));
  localStorage.setItem(WISHNAME, JSON.stringify(wishNames));
  localStorage.setItem(WISHPRICE, JSON.stringify(wishPrices));
  localStorage.setItem(WISHIMG, JSON.stringify(wishImgs));
}

let parseWishBrand = JSON.parse(localStorage.getItem(WISHBRAND) || "[]");
let parseWishName = JSON.parse(localStorage.getItem(WISHNAME) || "[]");
let parseWishPrice = JSON.parse(localStorage.getItem(WISHPRICE));
let parseWishImg = JSON.parse(localStorage.getItem(WISHIMG));

if (
  parseWishName[parseWishName.indexOf(productName.innerText)] ==
  productName.innerText
) {
  heart.classList.add(REMOVE);
  wishHeart.setAttribute("id", "");
  wishHeart.classList.add(WISH);
}

wishHeart.addEventListener("click", offWishList);

function offWishList(event) {
  heart.classList.remove(REMOVE);
  wishHeart.classList.remove(WISH);
  wishHeart.classList.add(REMOVE);

  parseWishBrand.splice(parseWishBrand.indexOf(productBrand.innerText), 1);
  parseWishName.splice(parseWishName.indexOf(productName.innerText), 1);
  parseWishPrice.splice(parseWishPrice.indexOf(productPrice.innerText), 1);
  parseWishImg.splice(parseWishImg.indexOf(productImg), 1);

  localStorage.setItem(WISHBRAND, JSON.stringify(parseWishBrand));
  localStorage.setItem(WISHNAME, JSON.stringify(parseWishName));
  localStorage.setItem(WISHPRICE, JSON.stringify(parseWishPrice));
  localStorage.setItem(WISHIMG, JSON.stringify(parseWishImg));
  location.reload();
}

//-----------------------link copy----------------------
const copyButton = document.querySelector(".share");

copyButton.addEventListener("click", copy);

function copy(event) {
  let url = "";
  let textArea = document.createElement("textarea");

  document.body.appendChild(textArea);
  url = window.document.location.href;
  textArea.value = url;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("URL이 복사 되었습니다");
}

//-----------------------login/out---------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";

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
//--------------------------------cart----------------------------------------------
const CARTBRAND = "cartBrand";
const CARTNAME = "cartName";
const CARTPRICE = "cartPrice";
const CARTIMG = "cartImg";
const CARTONEPRODUCTPRICE = "cartOneProductPrice";

let cartBrand = Array(0);
let cartName = Array(0);
let cartPrice = Array(0);
let cartImg = Array(0);
let cartOneProdutPrice = Array(0);

if (localStorage.getItem(ONLOGIN) !== null) {
  cartBtn.addEventListener("click", onCart);
}

function onCart(event) {
  cartBrand.push(productBrand.innerText);
  cartName.push(productName.innerText);
  cartPrice.push(wholePrice.innerText);
  cartImg.push(productImg);
  cartOneProdutPrice.push(productPrice.innerText);

  if (localStorage.getItem(CARTNAME) == null) {
    localStorage.setItem(CARTBRAND, JSON.stringify(cartBrand));
    localStorage.setItem(CARTNAME, JSON.stringify(cartName));
    localStorage.setItem(CARTPRICE, JSON.stringify(cartPrice));
    localStorage.setItem(CARTIMG, JSON.stringify(cartImg));
    localStorage.setItem(
      CARTONEPRODUCTPRICE,
      JSON.stringify(cartOneProdutPrice)
    );
    location.reload();
  } else {
    saveCart();
  }
  if (localStorage.getItem(ONLOGIN) == "null") {
    alert("로그인이 필요한 서비스 입니다.");
    location.href = "/html/header/login.html";
  }
}

let cartBrands = JSON.parse(localStorage.getItem(CARTBRAND));
let cartNames = JSON.parse(localStorage.getItem(CARTNAME));
let cartPrices = JSON.parse(localStorage.getItem(CARTPRICE));
let cartImgs = JSON.parse(localStorage.getItem(CARTIMG));
let cartOneProdutPrices = JSON.parse(localStorage.getItem(CARTONEPRODUCTPRICE));

function saveCart() {
  if (cartBrands.indexOf(productBrand.innerText) != -1) {
    alert("이미 장바구니에 추가 한 상품입니다.");
  } else {
    cartBrands.push(productBrand.innerText);
    cartNames.push(productName.innerText);
    cartPrices.push(wholePrice.innerText);
    cartImgs.push(productImg);
    cartOneProdutPrices.push(productPrice.innerText);
  }

  cartIntoLocalStorage();
  location.reload();
}

function cartIntoLocalStorage(saveCart) {
  localStorage.setItem(CARTBRAND, JSON.stringify(cartBrands));
  localStorage.setItem(CARTNAME, JSON.stringify(cartNames));
  localStorage.setItem(CARTPRICE, JSON.stringify(cartPrices));
  localStorage.setItem(CARTIMG, JSON.stringify(cartImgs));
  localStorage.setItem(
    CARTONEPRODUCTPRICE,
    JSON.stringify(cartOneProdutPrices)
  );
}

//--------------------------------------------------------search--------------------------------------------------
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
