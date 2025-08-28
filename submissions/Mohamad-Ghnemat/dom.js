// task1
// (1)

// for review 1 
// The output is correct, but it would be better to use bodyElement like this:
//  console.log(bodyElement.childNodes.length - bodyElement.children.length)
// I put it in a variable for Readability and Reusability.
const bodyElement = document.body;
console.log(bodyElement.lastElementChild.tagName)
console.log(bodyElement.children)
console.log(bodyElement.childNodes)
console.log(bodyElement.children.length)
console.log(bodyElement.childNodes.length)
console.log(bodyElement.childNodes.length - document.body.children.length)

// childNodes includes all node types:
// elements, text nodes .
// children includes only element nodes.

// (2)

// the first node is text not element (new line (\n))
const firstChildNodes = bodyElement.childNodes[0]
console.log(firstChildNodes.nodeType)
console.log(firstChildNodes.nodeName)

// for review 2
// Is the first paragraph a sibling of the second, or a descendant? The first paragraph is a sibling of the second paragraph, and both are descendants of the <section>.


// Is the first paragraph a sibling of the second, or a descendant? sibling 

// for review 3
//Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin?Yes

bodyElement.childNodes.forEach((node) => {
  console.log(node.nodeType === Node.TEXT_NODE ? "TEXT:" + JSON.stringify(node.textContent) 
                                               : "ELEMENT:" + node.nodeName);
});

// Text node: "\n " 

// Element node: HEADER

// Text node: "\n " 

// Element node: MAIN

// Text node: "\n" 

//Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin?
// Yes , you will find unexpected text nodes in the DOM structure.
// When you pretty-format the HTML (with newlines and indentation),
//  the browser parses those spaces and line breaks as text nodes .


// =====================================================
// Task 2
const divElement = document.createElement("div");
const headingElement = document.createElement("h2");
const paragraphElement = document.createElement("p");
divElement.classList.add("card");
divElement.setAttribute("data-role","admin");
// divElement.dataset.role = "admin";

headingElement.textContent = "Access Panel";

paragraphElement.textContent = "Authenticated";
divElement.append(headingElement ,paragraphElement);


document.body.append(divElement);
console.log(divElement.dataset.role);
paragraphElement.textContent = "Welcome back , Admin";
divElement.classList.add("authenticated","highlight");
console.log(divElement.classList.contains("card"));
if(divElement.classList.contains("card")){
    divElement.classList.remove("card");
}
console.log(divElement.className)