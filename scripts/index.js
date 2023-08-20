document
  .getElementById("coupon-input-field")
  .addEventListener("keyup", function (e) {
    if (e.target.value === "SELL200") {
      document
        .getElementById("coupon-input-field-button")
        .removeAttribute("disabled");
      console.log(e.target.value);
    }
  });
document.getElementById('coupon-input-field-button').addEventListener('click', function(){
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    if(totalPrice < 200){
        alert('Minimum purchased required TK 200 or above to get discount');
        return;
    }
    const discount = totalPrice * 0.2;
    document.getElementById("discount").innerText = discount;
})