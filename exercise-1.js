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

// document.body.removeChild(rem[0]);