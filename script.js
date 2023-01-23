const firstSmile = document.createElement("img");
const secondSmile = document.createElement("img");
const thirdSmile = document.createElement("img");
const forthSmile = document.createElement("img");
const fifthSmile = document.createElement("img");
const div = document.getElementById("1");

firstSmile.setAttribute("src", "images/first.png");
firstSmile.setAttribute("alt", "smile");
secondSmile.setAttribute("src", "images/second.png");
secondSmile.setAttribute("alt", "smile");
thirdSmile.setAttribute("src", "images/third.png");
thirdSmile.setAttribute("alt", "smile");
forthSmile.setAttribute("src", "images/forth.png");
forthSmile.setAttribute("alt", "smile");
fifthSmile.setAttribute("src", "images/fifth.png");
fifthSmile.setAttribute("alt", "smile");

firstSmile.classList.add("smile");
secondSmile.classList.add("smile");
thirdSmile.classList.add("smile");
forthSmile.classList.add("smile");
fifthSmile.classList.add("smile");

div.append(firstSmile);
div.append(secondSmile);
div.append(thirdSmile);
div.append(forthSmile);
div.append(fifthSmile);

const div2 = document.getElementById("2");
let firstCounter = document.createElement("div");
let secondCounter = document.createElement("div");
let thirdCounter = document.createElement("div");
let forthCounter = document.createElement("div");
let fifthCounter = document.createElement("div");

firstCounter.innerText = "0";
secondCounter.innerText = "0";
thirdCounter.innerText = "0";
forthCounter.innerText = "0";
fifthCounter.innerText = "0";

firstCounter.classList.add("text");
secondCounter.classList.add("text");
thirdCounter.classList.add("text");
forthCounter.classList.add("text");
fifthCounter.classList.add("text");

div2.append(firstCounter);
div2.append(secondCounter);
div2.append(thirdCounter);
div2.append(forthCounter);
div2.append(fifthCounter);

firstSmile.addEventListener("click", () => {
    firstCounter.innerText ++;
})
secondSmile.addEventListener("click", () => {
    secondCounter.innerText ++;
})

thirdSmile.addEventListener("click", () => {
    thirdCounter.innerText ++;
})

forthSmile.addEventListener("click", () => {
    forthCounter.innerText ++;
})

fifthSmile.addEventListener("click", () => {
    fifthCounter.innerText ++;
})



