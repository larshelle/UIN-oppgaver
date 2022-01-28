// Oppgave 1

const textToRemove = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");

const removeText = () => {
  textToRemove.innerHTML = null;
};

removeBtn.addEventListener("click", removeText);

// Oppgave 2
const textToChange = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

const changeText = () => {
  textToChange.innerHTML =
    "Paul Di’Anno var en bedre vokalist for Iron Maiden enn Bruce Dickinson";
};

changeBtn.addEventListener("click", changeText);

// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

const removeOtherText = () => {
  inputText.innerHTML = null;
};

removeOtherText();

const updateUserInput = (event) => {
  let userText = event.key;
  inputText.innerHTML += userText;
};

input.addEventListener("keyup", updateUserInput);

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeList = document.getElementById("write-list");

const writeItems = () => {
  myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));
};

writeList.addEventListener("click", writeItems);

// Oppgave 5
const select = document.getElementById("select");
const text = document.getElementById("text");
const create = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

const createElement = () => {
  const htmlElement = select.value;
  const userMessage = text.value;
  placeholder.innerHTML += `<${htmlElement}>${userMessage}</${htmlElement}>`;
};

create.addEventListener("click", createElement);

// Oppgave 6
const parentUl = document.getElementById("list");
const removeLi = document.getElementById("remove-li");

const removeLiFromParent = () => {
  const lastElement = parentUl.lastElementChild;
  if (lastElement) {
    parentUl.removeChild(lastElement);
  }
};

removeLi.addEventListener("click", removeLiFromParent);
//sleit nokså godt med denne

// Oppgave 7
const name = document.getElementById("name");
const orderBtn = document.getElementById("order");

const checkKey = () => {
  const checkName = name.value;
  if (checkName && checkName.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = "border: 3px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style = "border: 3px solid green";
  }
};

name.addEventListener("keyup", checkKey);

// Oppgave 8
const ulParent = document.querySelector(".children");
const ulParentChild = ulParent.querySelectorAll("li");
const colorBtn = document.getElementById("color");

const colorBorder = () => {
  Array.from(ulParentChild).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 3px solid pink";
    } else {
      li.style = "border: 3px solid green; margin: 3px";
    }
  });
};

colorBtn.addEventListener("click", colorBorder);


