let purchasedItemsNumbers = 1;
let totalPrice = 0;

document.getElementById('card-1').addEventListener('click', function(){
    const purchasedItems = document.getElementById('purchased-items');
    const p = document.createElement('p');
    p.classList.add('text-[#111]');
    p.classList.add('text-[24px]');
    p.classList.add('pl-[24px]');
    p.classList.add('pt-[20px]');
    p.classList.add('font-semibold');
    p.innerText = `${purchasedItemsNumbers}. K. Accessories`;
    purchasedItems.appendChild(p);
    purchasedItemsNumbers++;
    const price = parseFloat(document.getElementById('price-1').innerText);
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
})
document.getElementById('card-2').addEventListener('click', function(){
    const purchasedItems = document.getElementById('purchased-items');
    const p = document.createElement('p');
    p.classList.add('text-[#111]');
    p.classList.add('text-[24px]');
    p.classList.add('pl-[24px]');
    p.classList.add('pt-[20px]');
    p.classList.add('font-semibold');
    p.innerText = `${purchasedItemsNumbers}. K. Accessories`;
    purchasedItems.appendChild(p);
    purchasedItemsNumbers++;
    const price = parseFloat(document.getElementById('price-2').innerText);
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
})
document.getElementById('card-3').addEventListener('click', function(){
    const purchasedItems = document.getElementById('purchased-items');
    const p = document.createElement('p');
    p.classList.add('text-[#111]');
    p.classList.add('text-[24px]');
    p.classList.add('pl-[24px]');
    p.classList.add('pt-[20px]');
    p.classList.add('font-semibold');
    p.innerText = `${purchasedItemsNumbers}. Home Cooker`;
    purchasedItems.appendChild(p);
    purchasedItemsNumbers++;
    const price = parseFloat(document.getElementById('price-3').innerText);
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
})