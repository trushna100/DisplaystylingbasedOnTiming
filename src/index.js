//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const ctime = new Date(2020, 1, 1, 10).toLocaleTimeString();
console.log(ctime.toString());
let message = "";
let gcolor = "";
if (ctime.toString() >= "0:0:0 AM" && ctime.toString() <= "12:00:00 PM") {
  message = "Good Morning";
  gcolor = "red";
} else if (
  ctime.toString() > "12:00:00 PM" &&
  ctime.toString() < "6:00:00 PM"
) {
  message = "Good Afternoon";
  gcolor = "green";
} else {
  message = "Good Evening";
  gcolor = "blue";
}

const istyle = {
  color: gcolor
};
console.log(ctime);
ReactDom.render(
  <h1 style={istyle}>{message}</h1>,
  document.getElementById("root")
);
