import { accounts } from "./data.js";

const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNavModal = document.querySelector(".mobile-nav-modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.getElementById("modal-close");
const accountsHTML = document.getElementById("accounts");
const spendingsHTML = document.getElementById("spendings");

// trigger mobile nav modal OPEN
mobileNavBtn.addEventListener("click", function () {
  overlay.classList.toggle("active");
});

// trigger mobile nav CLOSE
modalClose.addEventListener("click", function () {
  overlay.classList.toggle("active");
});

// account HTML RENDER
accountsHTML.innerHTML = `
<h3>Accounts</h3>
<div class="left-inner-box">
  <div class="account-outputs" id="main-account-output">
  <div>${accounts[0].title}</div>
  <div>$ ${accounts[0].balance}</div>
   
  </div>
  <div class="account-outputs" id="expenses-account-output"></div>
  <div class="account-outputs" id="saving-account-output"></div>
</div>
`;

// SPENDING HTML RENDER
spendingsHTML.innerHTML = `
<h3>Spending</h3>
<div class="right-inner-box">
  <div class="spending-outputs" >
  </div>
  <div class="spending-outputs" ></div>
  <div class="spending-outputs" ></div>
</div>
`;
