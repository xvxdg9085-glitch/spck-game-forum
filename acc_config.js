first = {
     rpvalue: 'Lucian Vinh Quang',
    bonus: '❌',
    price: '3M'
}
second = {
     rpvalue: 'Aatrox Vinh Quang',
    bonus: '❌',
    price: '400K'
}
const rp_value = document.getElementById('rp_value');
const bonus = document.getElementById('bonus');
const price = document.getElementById('price');

function first_pack() {
    rp_value.textContent = first.rpvalue;
    bonus.textContent = first.bonus;
    price.textContent = first.price;
}
function second_pack() {
    rp_value.textContent = second.rpvalue;
    bonus.textContent = second.bonus;
    price.textContent = second.price;
}
