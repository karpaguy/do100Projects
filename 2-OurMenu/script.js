const menu = [
    {
        id: 1,
        title: "Panquecas com Frutas",
        category: "Cafe",
        price: 15.99,
        img: "./images/Pancakes_with_fruit.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error facilis odit corrupti modi sunt ipsam itaque, incidunt quo aspernatur?"
    },
    {
        id: 2,
        title: "Bolo Sabooroso",
        category: "Almoço",
        price: 15.99,
        img: "./images/Quinoa_Chocolate_Cake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error facilis odit corrupti modi sunt ipsam itaque, incidunt quo aspernatur?"
    },
    {
        id: 3,
        title: "Carne",
        category: "Jantar",
        price: 49.99,
        img: "./images/Quinoa_Chocolate_Cake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error facilis odit corrupti modi sunt ipsam itaque, incidunt quo aspernatur?"
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);


    // Futuramente usaremos um outro método, mas no momento, é preciso aprender a como usar o "reduce", apesar do ES6 introduzir novos aspectos que funcionaram melhor.
    const categories = menu.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['Todos']);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
    
            if(category === 'Todos') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item)
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        </div>
        </article>`;
    });
    
    displayMenu = displayMenu.join(''); // Impede de aparecer uma vírgula entre elementos, que pode atrapalhar.
    sectionCenter.innerHTML = displayMenu;
}
