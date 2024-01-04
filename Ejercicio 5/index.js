// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const myList = document.createElement("ul")

for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    
    const myLi = document.createElement("li")
    myLi.textContent = album

    myList.append(myLi)
}

document.body.append(myList)