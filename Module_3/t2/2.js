
const node = document.getElementById("target");

const item1 = document.createElement("li");
item1.innerText = "First Item";

const item2 = document.createElement("li");
item2.innerText = "Second Item";

const item3 = document.createElement("li");
item3.innerText = "Third Item";

node.appendChild(item1);
node.appendChild(item2);
node.appendChild(item3);