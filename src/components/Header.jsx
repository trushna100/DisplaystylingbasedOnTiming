import React from "react";

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
function Header() {
  return <h1 style={istyle}>{message}</h1>;
}

export default Header;
