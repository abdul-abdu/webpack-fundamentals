import nav from "./nav";
import { bottom, top } from "./footer";
import { makeColorStyle } from "./colors";
import makeButton from "./button";

const button = makeButton("Yay Press Me!");

document.body.appendChild(button);

console.log(nav(), top, bottom, makeColorStyle("blue"));
