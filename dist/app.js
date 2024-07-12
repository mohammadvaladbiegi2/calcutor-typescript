import { backspace, clearData, equalresult, handleKeydown } from "./utils.js";
const equal = document.querySelector(".equal");
const clearbtn = document.querySelector("#clear");
const backspacebtn = document.querySelector("#backspace");
window.addEventListener("keydown", handleKeydown);
equal.addEventListener("click", () => {
    equalresult();
});
clearbtn.addEventListener("click", () => {
    clearData();
});
backspacebtn.addEventListener("click", () => {
    backspace();
});
