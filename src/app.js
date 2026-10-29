// const print = require("./test.js");
// const { print, data } = require("./test.js");
// import print from "./test.js";
import { print } from "./test.js";
import "./style.css";
import image from "./image.png";
// import _ from "lodash";

// const res = _.defaults({ a: 1 }, { b: 2 });
// console.log(res);

function addElement() {
  const h1 = document.createElement("h1");
  h1.textContent = "Hello world";
  document.body.append(h1);
}

addElement();

print();

let a = 1;

const b = a + 1;

alert(b);

if (a === b) {
  //...
}

function addParagraph() {
  document.body.insertAdjacentHTML(
    "beforeend",
    "<p>Lorem ipsum solid sit amet</p>",
  );
}

addParagraph();

function addImage() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<img src="${image}">`,
  );
}

addImage();
