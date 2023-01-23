const menuEmail = document.querySelector('.navbar-email');
// selecciona elemento q tenga la clase .desktop-menu
const desktopMenu = document.querySelector('.desktop-menu');
//selecciona elementos del menu con icono para movil
const MenuburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//selecciona elementos del menu carrito de compras
const MenuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')
//selecciona elementos del container el cual muestra los products
const cardsContainer = document.querySelector('.cards-container')


//EVENTOS para escuchar el click de los elementos
menuEmail.addEventListener('click', toggleDesktopMenu);
MenuburgerIcon.addEventListener('click', toggleMobileMenu);
MenuCarIcon.addEventListener('click',toggleCarAside);

//FUNCIONES que ponen o quitan la clase INACTIVE ubicada en styles.css
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('INACTIVE');

    if(!isAsideClosed) {
        aside.classList.add('INACTIVE')
    }

    desktopMenu.classList.toggle('INACTIVE');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('INACTIVE');

    if(!isAsideClosed) {
        aside.classList.add('INACTIVE')
    }

    mobileMenu.classList.toggle('INACTIVE');
}

function toggleCarAside() { 
    const isMobileMenuClosed = mobileMenu.classList.contains('INACTIVE');
    const isDesktopMenuClosed = desktopMenu.classList.contains('INACTIVE');


    if(!isMobileMenuClosed ||  !isDesktopMenuClosed) {
        mobileMenu.classList.add('INACTIVE')
        desktopMenu.classList.add('INACTIVE');
    }

    aside.classList.toggle('INACTIVE');
}
//mostrar lista de productos mediante arrays
const productList = [];
productList.push({
    name: 'Bike',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-2'+
    '76517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-2'+
    '76517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 7000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-2'+
    '76517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


//funcion q manda a llamar un array
function Renderproduct(arr) {
    //muestra nombres de los products dentro del array
for(product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');

    //iterando prods del array y maquetando la estructura html para q los user vean los prods
    const productimg = document.createElement('img')
    productimg.setAttribute('src',product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div')
    
    const productPrice= document.createElement('p')
    productPrice.innerText = '$' + product.price;
    const productName= document.createElement('p')
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure')
    const productImgCard= document.createElement('img')
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}
}

Renderproduct(productList);



