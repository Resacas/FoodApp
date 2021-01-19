'use strict'




//Selectores
const mainSelector = document.querySelector("");


//Arrays Productos
const platos = [
    
    {
        id: 1,
        nombre: "Fabada Asturiana",
        precio: 13.90,
        unidades: 1,
        descripcion:"Tabla de Fabada Asturiana para 3 personas.",
        foto:"./img/productos/platos/fabada.png",
        categoria: "platos"
    },
    {
        id: 2,
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        unidades: 0,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        id: 3,
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        unidades: 0,
        descripcion:"Media docena de Casadiellas.",
        foto:"./img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    {
        id: 4,
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        unidades: 0,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        id: 5,
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        unidades: 0,
        descripcion:"Media docena de Casadiellas.",
        foto:"../img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    {
        id: 6,
        nombre: "Fabada Asturiana",
        precio: 13.90,
        unidades: 0,
        descripcion:"Tabla de Fabada Asturiana para 3 personas.",
        foto:"./img/productos/platos/fabada.png",
        categoria: "platos"
    },
    {
        id: 7,
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        unidades: 0,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        id: 8,
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        unidades: 0,
        descripcion:"Media docena de Casadiellas.",
        foto:"./img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    
];

let carrito = [];
let total = 0;


//Inyección HTML

const insertarProductosHtml = (platos)=>{

    for (const plato of platos) {

        const section = document.createElement('section');

        //template
        
        section.innerHTML= `<section>
        <article class="menu-plato" id="${plato.id}">
            <figure>
                <img class="img-producto" src="${plato.foto}" alt="">
            </figure> 
            <div class="descplato"> 
                    <p class="precio">${plato.precio}€</p>
                    <p class="tituloproducto">${plato.nombre}</p>
                    <p class="descproducto">${plato.descripcion}</p>
                <ul class="contador">
                    <li><button class="btn-menos btn-mm">-</button></li>
                    <li><label class="btn-counter" counter="${plato.unidades}">${plato.unidades}</label></li>
                    <li><button class="btn-mas btn-mm">+</button></li>
                </ul>
            </div> 
        
        </article>
        </section>`;

    mainSelector.append(section.firstElementChild);

}};

const getPlato= (id)=>{

    //pasandole un elemento recorrer array y encontrar el elemento
    //
return objeto;
}

const sumarPlato= ()=>{

    
    carrito.push(getPlato(id));
    

    //modificar tambien cantidad.

}








insertarProductosHtml(platos);
