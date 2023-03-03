import { accounts } from "./data.js";
const mobileNavBtn = document.getElementById("mobile-nav-btn");
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

// ACCOUNT HTML RENDER
accounts.forEach(function (account) {
  accountsHTML.innerHTML += `
    <div class="left-inner-box">
      <div class="account-outputs account-${account.id}" id=${account.id}>
        <div class="account-output">${account.title}</div>
        <div class="account-output">$ ${account.balance}</div>
      </div>
    </div>
    `;
});

// identify individual account that is clicked
document.querySelectorAll(".account-outputs").forEach(function (element) {
  element.addEventListener("click", function (e) {
    let targetId = e.target.id;
    console.log(targetId);
    if (targetId) {
      // Retrieve the clicked account from the accounts array
      let clickedAccount = accounts.find(function (account) {
        return account.id === targetId;
      });

      // Check if a valid account was found?
      if (clickedAccount) {
        // Render the spending HTML for the clicked account
        spendingsHTML.innerHTML = "";
        clickedAccount.spendings.forEach(function (el) {
          spendingsHTML.innerHTML += `
              <div class="right-inner-box">
                <div class="spending-outputs">
                  <div class="spent-output">${el.category}</div>
                  <div class="spent-output">$ ${el.spent}</div>
                </div>
              </div>
            `;
        });
      } else {
        console.error(`Account with ID ${targetId} not found`);
      }
    }
  });
});
