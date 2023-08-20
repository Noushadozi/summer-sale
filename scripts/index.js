document.getElementById("card-1").addEventListener("click", function () {
  functionsCalling("product-name-1", "price-1");
});
document.getElementById("card-2").addEventListener("click", function () {
  functionsCalling("product-name-2", "price-2");
});
document.getElementById("card-3").addEventListener("click", function () {
  functionsCalling("product-name-3", "price-3");
});
document.getElementById("card-4").addEventListener("click", function () {
  functionsCalling("product-name-4", "price-4");
});
document.getElementById("card-5").addEventListener("click", function () {
  functionsCalling("product-name-5", "price-5");
});
document.getElementById("card-6").addEventListener("click", function () {
  functionsCalling("product-name-6", "price-6");
});
document.getElementById("card-7").addEventListener("click", function () {
  functionsCalling("product-name-7", "price-7");
});
document.getElementById("card-8").addEventListener("click", function () {
  functionsCalling("product-name-8", "price-8");
});
document.getElementById("card-9").addEventListener("click", function () {
  functionsCalling("product-name-9", "price-9");
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
      document.getElementById("coupon-input-field").value = "";
    }
  });

document.getElementById("modal-button").addEventListener("click", function () {
  document.getElementById("total").innerText = "00.00";
  document.getElementById("discount").innerText = "00.00";
  document.getElementById("total-price").innerText = "00.00";
  document.getElementById("coupon-input-field").value = "";
  document.getElementById("purchased-items").innerHTML = "";
  totalPrice = 0;
  purchasedItemsNumbers = 1;
});
