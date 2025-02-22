import { backspace, clearData, equalresult, handleKeydown } from "./utils.js";

const equal = document.querySelector(".equal") as HTMLButtonElement;
const clearbtn = document.querySelector("#clear") as HTMLButtonElement;
const backspacebtn = document.querySelector("#backspace") as HTMLButtonElement;

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
