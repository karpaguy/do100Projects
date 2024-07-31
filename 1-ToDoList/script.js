// FUNCTIONS
function addItem() {
    let itemNew = document.createElement('li');
    let inputItem = document.querySelector('.inputItem')

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('itemCheck');

    let textItem = document.createElement('LABEL');
    textItem.classList.add('itemText');
    textItem.textContent = inputItem.value

    itemNew.append(textItem);
    itemNew.append(checkBox);
    itemList.append(itemNew);
}

// --------

let itemList = document.querySelector('.itemList');
let addBtn = document.querySelector('.addItem');

addBtn.addEventListener('click', addItem);

// DEBUG
// console.log(
//     window.document.querySelector('.container')
// );
