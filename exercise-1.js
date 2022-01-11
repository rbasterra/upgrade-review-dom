// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myDiv = document.querySelector('[data-function = printHere]');

const myList = document.createElement("ul");

// for (let i=0; i < countries.length; i++){
//     const li = document.createElement('li');

//     li.innerHTML = countries[i];
//     myList.appendChild(li);
// }

// countries.forEach(country =>{
//     const li = document.createElement('li');

//     li.innerHTML = country;
//     myList.appendChild(li);
// })

for (country of countries){
    const li = document.createElement('li');

    li.innerHTML = country;
    myList.appendChild(li);
}


myDiv.appendChild(myList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const rem = document.getElementsByClassName('fn-remove-me');

// const rem = document.querySelector('[class=fn-remove-me]');

// document.removeChild(rem);

// rem.forEach(element => {
//     document.body.removeChild(element);
// });

for (let r of rem){
    document.body.removeChild(r);
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carList = document.createElement("ul");

for (car of cars){
    const li = document.createElement('li');

    li.innerHTML = car;
    carList.appendChild(li);
}


myDiv.appendChild(carList);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const pictures = [
	{title: 'title 1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const picture of pictures){
    let pictureItem = document.createElement('div');
    pictureItem.innerHTML = `<h4>${picture.title}</h4><img src=${picture.imgUrl}/>`;

    let delButton = document.createElement('button');

    delButton.innerText = 'Delete item';

    pictureItem.appendChild(delButton);

    delButton.addEventListener("click",function(){
        pictureItem.remove();
    })

    document.body.appendChild(pictureItem);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.



document.getElementById('btnToClick').addEventListener('click',function(){
    // let myUl = document.querySelectorAll('ul');
    // myUl[myUl.length-1].removeChild(myUl[myUl.length-1].lastElementChild);
    let selectDivs = document.querySelectorAll('div');
    selectDivs[selectDivs.length-1].remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

//implementado junto con el 1.4