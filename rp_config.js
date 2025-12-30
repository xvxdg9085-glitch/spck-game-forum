first = {
     rpvalue: 340,
    bonus: 'no',
    price: '50k'
}
second = {
     rpvalue: 690,
    bonus: 'yes',
    price: '100k'
}
third = {
     rpvalue: 1400,
    bonus: 'yes',
    price: '200k'
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
function third_pack() {
    rp_value.textContent = third.rpvalue;
    bonus.textContent = third.bonus;
    price.textContent = third.price;
}
