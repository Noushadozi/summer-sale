document.getElementById("card-1").addEventListener("click", function () {
  addToCart("product-name-1");
  const totalPrice = addPrice("price-1");
  enableButtons(totalPrice);
});
document.getElementById("card-2").addEventListener("click", function () {
  addToCart("product-name-2");
  const totalPrice = addPrice("price-2");
  enableButtons(totalPrice);
});
document.getElementById("card-3").addEventListener("click", function () {
  addToCart("product-name-3");
  const totalPrice = addPrice("price-3");
  enableButtons(totalPrice);
});
document.getElementById("card-4").addEventListener("click", function () {
  addToCart("product-name-4");
  const totalPrice = addPrice("price-4");
  enableButtons(totalPrice);
});
document.getElementById("card-5").addEventListener("click", function () {
  addToCart("product-name-5");
  const totalPrice = addPrice("price-5");
  enableButtons(totalPrice);
});
document.getElementById("card-6").addEventListener("click", function () {
  addToCart("product-name-6");
  const totalPrice = addPrice("price-6");
  enableButtons(totalPrice);
});
document.getElementById("card-7").addEventListener("click", function () {
  addToCart("product-name-7");
  const totalPrice = addPrice("price-7");
  enableButtons(totalPrice);
});
document.getElementById("card-8").addEventListener("click", function () {
  addToCart("product-name-8");
  const totalPrice = addPrice("price-8");
  enableButtons(totalPrice);
});
document.getElementById("card-9").addEventListener("click", function () {
  addToCart("product-name-9");
  const totalPrice = addPrice("price-9");
  enableButtons(totalPrice);
});

document
  .getElementById("coupon-input-field-button")
  .addEventListener("click", function () {
    const InputField = document.getElementById("coupon-input-field").value;
    if (InputField === "SELL200") {
      const totalPriceString = document.getElementById("total-price").innerText;
      const totalPrice = parseFloat(totalPriceString);

      const discount = parseFloat(totalPrice * 0.2).toFixed(2);
      document.getElementById("discount").innerText = discount;
      const total = parseFloat(totalPrice - discount).toFixed(2);
      document.getElementById("total").innerText = total;
    }
  });
