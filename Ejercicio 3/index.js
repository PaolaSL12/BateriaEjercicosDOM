// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const countrie = countries[i];
    
    const myLi = document.createElement("li");
    myLi.textContent = countrie

    myUl.append(myLi)
}

document.body.append(myUl)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const deleteP = document.querySelector(".fn-remove-me")

deleteP.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const findDiv = document.querySelector("[data-function='printHere']")

const ul = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    const li = document.createElement("li")
    li.textContent = car

    ul.append(li)
}

findDiv.append(ul)


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (let i = 0; i < countries2.length; i++) {
        const element = countries2[i];
        
        const div = document.createElement("div")
        const h4 = document.createElement("h4")
        const img = document.createElement("img")



        img.src = element.imgUrl
        h4.textContent = element.title

        div.append(h4)
        div.append(img)
        document.body.append(div)
}
    

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.


const button = document.createElement("button")
button.textContent = "Eliminar el ultimo"

function deteleLastOne () {
    const allDivs = document.querySelectorAll("div")
    allDivs[allDivs.length - 1].remove()
}

button.addEventListener("click", deteleLastOne)
document.body.appendChild(button)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const allDivs2 = document.querySelectorAll("div")

for (const div of allDivs2) {
    const buttonDiv = document.createElement("button")
    buttonDiv.textContent = "Eliminarme"
    buttonDiv.addEventListener("click", (e) => e.target.parentElement.remove())
    div.append(buttonDiv)
    
}