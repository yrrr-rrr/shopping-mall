const cartUl = document.querySelector(".cart-list");
const CARTBRAND = "cartBrand";
const CARTNAME = "cartName";
const CARTPRICE = "cartPrice";
const CARTIMG = "cartImg";
const CARTONEPRODUCTPRICE = "cartOneProductPrice";


let parseCartBrand = JSON.parse(localStorage.getItem(CARTBRAND) || "[]");
let parseCartName = JSON.parse(localStorage.getItem(CARTNAME) || "[]");
let parseCartPrice = JSON.parse(localStorage.getItem(CARTPRICE) || "[]");
let parseCartImg = JSON.parse(localStorage.getItem(CARTIMG) || "[]");
let parseCprice = JSON.parse(localStorage.getItem(CARTONEPRODUCTPRICE) || "[]");

let cartLi = null;
let cartDiv = null;
let cartItem = null;
let brand = null;
let img = null;
let name = null;
let price = null;
let common = null;
let common2 = null;
let quantity = null;
let orderAmount = null;

for (let a = 0; a < Object.values(parseCartName).length; a++) {
  cartLi = document.createElement("li");
  cartLi.className = "cart-li";
  cartLi.classList.add(a);
  
  cartDiv = document.createElement("div");
  cartDiv.className = "cart-div";
  
  cartInpo = document.createElement("div");
  cartInpo.className = "cart-inpo";
  
  img = document.createElement("img");
  img.className ="cart-img";
  
  brand = document.createElement("p");
  brand.className = "cart-brand";
  
  common = document.createElement("div");
  common.className = "cart-common-div-1";
  
  common2 = document.createElement("div");
  common2.className = "cart-common-div-2";

  quantity = document.createElement("span");
  quantity.innerText = "수량"
  quantity.className = "cart-quantity";
  
  orderAmount = document.createElement("span");
  orderAmount.innerText = "주문 금액";
  orderAmount.className = "cart-order-amount";

  name = document.createElement("sub");
  name.className = "cart-name";
  
  price = document.createElement("p");
  price.className = "cart-price";
  
  common2.appendChild(quantity);
  common2.appendChild(orderAmount);
  common.appendChild(brand);
  common.appendChild(common2);
  cartInpo.appendChild(name);
  cartInpo.appendChild(price);
  cartDiv.appendChild(img);
  cartDiv.appendChild(cartInpo);
  cartLi.appendChild(common);
  cartLi.appendChild(cartDiv);
  cartUl.appendChild(cartLi);
}

let cartBrand = {};
let cartName = {};
let cartPrice = {};
let cartImg = {};


for (let c = 0; c < Object.values(parseCartName).length; c++){
  cartBrand[`c` + c] = parseCartBrand[c];
  cartName[`c` + c] = parseCartName[c];
  cartPrice[`c` + c] = parseCartPrice[c];
  cartImg[`c` + c] = parseCartImg[c];
  // [`키값`] = 밸류; 딕셔너리 객체
  let brands = document.querySelectorAll(".cart-brand");
  let names = document.querySelectorAll(".cart-name");
  let prices = document.querySelectorAll(".cart-price");
  let imgs = document.querySelectorAll(".cart-img");
  brands[c].innerText = cartBrand[`c` + c];
  names[c].innerText = cartName[`c` + c];
  prices[c].innerText = cartPrice[`c` + c];
  imgs[c].src = cartImg[`c` + c];
}

console.log(cartBrand);

const offBtn = document.querySelectorAll(".off");

offBtn.forEach( (off) => {
  off.addEventListener("click" , offWish)
});
//**************************************************************************************************** */


const whole = document.querySelector(".whole");
let a = document.createElement("span");
let d = document.createElement("h2");
let b = Number(price.innerText.replace("원", "").replace(",", ""));
let c = Number(parseCprice[0].replace("원", "").replace(",", ""));
quantity.innerText = b / c +"개";
d.innerText = "수량";
d.className = "amount-title";
whole.appendChild(d);
whole.appendChild(a);
//**************************************************************************************************** */
function offWish (event) {
  const deleteWish = event.target.parentElement;
  
  parseCartBrand.splice(deleteWish.parentElement.classList.item(1), 1);
  parseCartName.splice(deleteWish.parentElement.classList.item(1), 1);
  parseCartPrice.splice(deleteWish.parentElement.classList.item(1), 1);
  parseCartImg.splice(deleteWish.parentElement.classList.item(1), 1);
  
  localStorage.setItem(CARTBRAND, JSON.stringify(parseCartBrand));
  localStorage.setItem(CARTNAME, JSON.stringify(parseCartName));
  localStorage.setItem(CARTPRICE, JSON.stringify(parseCartPrice));
  localStorage.setItem(CARTIMG,JSON.stringify(parseCartImg));
  location.reload();
}

//-----------------------login/out---------------------------
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
  login.classList.add(REMOVE);
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}