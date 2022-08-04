import nav from "./nav";
import { bottom, top } from "./footer";
import { makeColorStyle } from "./colors";
import makeButton from "./button";

const button = makeButton("Yay Press Me!");
button.style = makeColorStyle("red")

document.body.appendChild(button);

console.log(nav(), top, bottom, makeColorStyle("blue"));
