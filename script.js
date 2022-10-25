//Question 1

function cat(complain) {
console.log(complain);
}

cat("Meow!")

//Question 2


const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading"

//Question 3

heading.style.fontSize = "2em"

//Question 4

heading.className = "subHeading";


//Question 5

const paragraphs = document.querySelectorAll("p");

paragraphs.style.color = "red"

//or

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++){
    listItems[i].innerHTML.style.color = "red";
}

//Question 6 

var resultContainer = document.querySelector("div.results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.color = "yellow";

//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function list (cats);
console.log(cats.name);

cats.forEach(function(item) {
    console.log("Name of the cat" + ": " + item.name);
});

/*for(let i = 0; i < cats.name.length; i++) {
    console.log(cats.name[i]);
} why does this not work?*/

//Question 8

function createCats(cats) {
    
    for(let i = 0; i < cats.length; i++)
}
const newHTML = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
