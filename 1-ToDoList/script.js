const itemList = document.querySelector('.itemList');
const addItemBtn = document.querySelector('.addItem');

addItemBtn.addEventListener('click', function() {
    let newItem = `<li class="item">
    <label class="itemText">${document.querySelector('.inputItem').value}</label>
    <input type="checkbox" class="itemCheck">
    </li>`
    itemList.innerHTML += newItem;
});


