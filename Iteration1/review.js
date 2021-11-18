// 1. 1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

function addUl() {
  let newUl = document.createElement("ul");
  let body = document.querySelector("body");

  countries.map((country) => {
    let newLi = document.createElement("li");
    let textNode = document.createTextNode(country);
    newLi.appendChild(textNode);
    newUl.appendChild(newLi);
  });

  body.appendChild(newUl);
}

// 1. 2
document.querySelector(".fn-remove-me").remove();

// 1. 3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

printHere = document.querySelector('[data-function="printHere"]');
carsHTML = cars
  .map(
    (car) =>
      `<ul>
    <li>${car}</li>
</ul>
`
  )
  .join("");
prinHere.innerHTML = carsHTML;

// 1. 4
const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

function addObjectList() {
  let newUl = document.createElement("ul");

  countriesTwo.map((countryy) => {
    let newDiv = document.createElement("div");
    let newH4 = document.createElement("h4");
    let newImg = document.createElement("img");
    newH4.appendChild(document.createTextNode(countryy.title));
    newImg.src = `${countryy.imgUrl}`;
    newDiv.appendChild(newH4);
    newDiv.appendChild(newImg);
    newUl.appendChild(newDiv);
  });
  body.appendChild(newUl);
}

// 1. 5
let button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "delete";

const deleteLast = () => {
  let lastItem = myList.lastChild;
  lastItem.parentNode.removeChild(lastItem);
};
button.addEventListener("click", deleteLast);
