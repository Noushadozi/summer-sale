let purchasedItemsNumbers = 1;
let totalPrice = 0;

function addToCart(productID) {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById(productID).innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItemsNumbers++;
  purchasedItems.appendChild(p);
}

function addPrice(productPrice) {
  const price = parseFloat(document.getElementById(productPrice).innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  return totalPrice;
}

function enableButtons(totalPrice) {
  if (totalPrice >= 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  document.getElementById("make-purchase").removeAttribute("disabled");
}

function functionsCalling(productID, priceID) {
  addToCart(productID);
  const totalPrice = addPrice(priceID);
  enableButtons(totalPrice);
}