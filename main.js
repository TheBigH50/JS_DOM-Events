console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const getNode1 = document.getElementById("node1");
getNode1.innerHTML = `I used the getElementById("node1") method to access this`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const getNode2 = document.getElementsByClassName("node2");
getNode2[0].innerHTML = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const getH3Tags = document.getElementsByTagName("h3");
for (let ele of getH3Tags) {
  ele.innerHTML = `I used the getElementByTagName("h3") method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const newParagraph1 = document.createElement("p");
const paraContent1 = document.createTextNode(
  `This node was created using the createElement() method`
);
// TODO: Append the created node to the parent node using the element.appendChild() method
newParagraph1.appendChild(paraContent1);
const newP = document.getElementById("parent");
newP.appendChild(newParagraph1);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const newA = document.createElement("a");
newA.innerHTML = `I am a <a href="https://geeksforgeeks.org">&lt;a&gt;</a> tag`;
// BONUS: Add a link href to the <a>
//newA.title = "I am a <a> tag"; newA.href = "https://www.geeksforgeeks.org"; newP.appendChild(newA);
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
newP.insertBefore(newA, newParagraph1);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const N1 = document.querySelector("#N1");
const parent = document.querySelector("#exercise-container3");
const newChildNode = document.createElement("p");
newChildNode.textContent = `New Child Node`;
parent.replaceChild(newChildNode, N1);
// TODO: Remove the "New Child Node"
parent.removeChild(newChildNode);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const list1 = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
for (let item of list) {
  let li = document.createElement("li");
  li.textContent = item;
  list1.appendChild(li);
}
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4
let container = document.getElementById("container");
container.appendChild(list1);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function handleEsc(event) {
  if (event.key == "Escape") {
    document.body.removeChild(document.querySelector("#modal"));
  }
}

function show(event) {
  window.addEventListener("keyup", handleEsc);

  let modalContainer = document.createElement("div");
  let modalBody = document.createElement("div");
  let title = document.createElement("h2");
  let content = document.createElement("p");
  let closeButton = document.createElement("button");

  title.textContent = "Action Required";
  content.textContent = "You need to ...";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", (event) => {
    document.body.removeChild(modalContainer);
    window.removeEventListener("keyup", handleEsc);
  });

  modalContainer.id = "modal";
  modalBody.classList.add("modal-card");

  modalContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target == modalContainer) {
      document.body.removeChild(modalContainer);
      window.removeEventListener("keyup", handleEsc);
    }
  });

  modalBody.append(title, content, closeButton);
  modalContainer.appendChild(modalBody);
  document.body.appendChild(modalContainer);
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", show);
