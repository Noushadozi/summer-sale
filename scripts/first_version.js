let purchasedItemsNumbers = 1;
let totalPrice = 0;

document.getElementById("card-1").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-1").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-1").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;

  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }

  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-2").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-2").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-2").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-3").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-3").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-3").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-4").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-4").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-4").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-5").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-5").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-5").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-6").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-6").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-6").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-7").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-7").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-7").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-8").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-8").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-8").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
});

document.getElementById("card-9").addEventListener("click", function () {
  const purchasedItems = document.getElementById("purchased-items");
  const productName = document.getElementById("product-name-9").innerText;
  const p = document.createElement("p");
  p.classList.add("text-[#111]");
  p.classList.add("text-[24px]");
  p.classList.add("pl-[24px]");
  p.classList.add("pt-[20px]");
  p.classList.add("font-semibold");
  p.innerText = `${purchasedItemsNumbers}. ${productName}`;
  purchasedItems.appendChild(p);
  const price = parseFloat(document.getElementById("price-9").innerText);
  totalPrice += price;
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice >= 200) {
    document
      .getElementById("coupon-input-field-button")
      .removeAttribute("disabled");
  }
  purchasedItemsNumbers++;
  document.getElementById("make-purchase").removeAttribute("disabled");
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

document.getElementById("modal-button").addEventListener("click", function () {
  document.getElementById("total").innerText = "00.00";
  document.getElementById("discount").innerText = "00.00";
  document.getElementById("total-price").innerText = "00.00";
  document.getElementById("coupon-input-field").value = "";
  document.getElementById("purchased-items").innerHTML = '';
  totalPrice = 0;
  purchasedItems = 0;
});
