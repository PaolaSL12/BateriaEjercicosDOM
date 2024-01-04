// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div")
document.body.appendChild(div)
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const p = document.createElement("p")

const divP = document.createElement("div")
divP.appendChild(p)
document.body.appendChild(divP)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

let divWhit6p = document.createElement("div");

for (let i = 0; i < 6; i++) {
   let p6 = document.createElement("p")
   
   divWhit6p.appendChild(p6)
}

document.body.appendChild(divWhit6p)

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

let dinamicP = document.createElement("p");
dinamicP.textContent = 'Soy dinámico!'
document.body.append(dinamicP)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.createElement("h2")
h2.className = "fn-insert-here"
h2.textContent = 'Wubba Lubba dub dub'

document.body.append(h2)

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let myUl = document.createElement("ul")

for (let i = 0; i < apps.length; i++) {
    const app = apps[i];

    let myLi = document.createElement("li")
    myLi.textContent = app
    myUl.append(myLi)
}

document.body.append(myUl)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeMe = document.querySelectorAll(".fn-remove-me")

for (let i = 0; i < removeMe.length; i++) {
    const element = removeMe[i];

    element.remove()
    
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let midleP = document.createElement("p")
midleP.textContent = 'Voy en medio!'

const parentNode = divWhit6p.parentNode

parentNode.insertBefore(midleP, divWhit6p)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let pDentro = document.createElement("p")
pDentro.textContent = 'Voy dentro!'

const findDiv = document.querySelector("div.fn-insert-here")
console.log(findDiv);
const parent = findDiv.parentNode

parent.insertBefore(pDentro, findDiv)