const menu = [
    {
        id: 1,
        title: "Panquecas com Frutas",
        category: "cafe-manha",
        price: 15.99,
        img: "./images/Pancakes_with_fruit.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error facilis odit corrupti modi sunt ipsam itaque, incidunt quo aspernatur?"
    },
    {
        id: 2,
        title: "Bolo Sabooroso",
        category: "cafe-manha",
        price: 15.99,
        img: "./images/Quinoa_Chocolate_Cake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error facilis odit corrupti modi sunt ipsam itaque, incidunt quo aspernatur?"
    }
];

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

const sectionCenter = document.querySelector('.section-center');
window.addEventListener('DOMContentLoaded', displayMenuItems(menu));
