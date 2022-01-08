const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myDiv = document.querySelector('[data-function = printHere]');

const myList = document.createElement("ul");

for (let i=0; i < countries.length; i++){
    const li = document.createElement('li');

    li.innerHTML = countries[i];
    myList.appendChild(li);
}




myDiv.appendChild(myList);