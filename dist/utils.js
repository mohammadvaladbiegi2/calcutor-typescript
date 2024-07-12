export let data = {
    num1: 0,
    num2: 0,
    oparator: "",
};
export let numbersData = [];
const mainNumber = document.querySelector(".main-number");
const operators = document.querySelectorAll(".operator");
const numbersbtn = document.querySelectorAll(".number");
numbersbtn.forEach((num) => {
    num.addEventListener("click", (e) => {
        let target = e.target;
        let value = target.value;
        numbersData.push(value);
        let concatnumbers = numbersData.join("");
        if (!data.oparator.length) {
            data.num1 = +concatnumbers;
            updateMainNumber(concatnumbers);
        }
        else {
            data.num2 = +concatnumbers;
            updateMainNumber(concatnumbers);
        }
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        let target = e.target;
        let value = target.value;
        data.oparator = value;
        numbersData = [];
        updateMainNumber("0");
    });
});
export function calculatios(params) {
    switch (params.oparator) {
        case "+": {
            return params.num1 + params.num2;
        }
        case "-": {
            return params.num1 - params.num2;
        }
        case "x": {
            return params.num1 * params.num2;
        }
        case "/": {
            return params.num1 / params.num2;
        }
        default: {
            let result = 0;
            return result;
        }
    }
}
export const updateMainNumber = (value) => {
    mainNumber.innerHTML = value;
};
export const backspace = () => {
    numbersData.pop();
    let concatnumbers = numbersData.join("");
    if (!data.oparator.length) {
        data.num1 = +concatnumbers;
        updateMainNumber(concatnumbers);
    }
    else {
        data.num2 = +concatnumbers;
        updateMainNumber(concatnumbers);
    }
};
export const equalresult = () => {
    let result = calculatios(data);
    let stringresulte = result.toString();
    updateMainNumber(stringresulte);
};
export const clearData = () => {
    data = {
        num1: 0,
        num2: 0,
        oparator: "",
    };
    numbersData = [];
    updateMainNumber("0");
};
export function handleKeydown(e) {
    switch (e.keyCode) {
        case 8: {
            backspace();
            break;
        }
        case 13: {
            equalresult();
            break;
        }
        case 27: {
            clearData();
            break;
        }
        default: {
            return neverHandler(e);
        }
    }
}
export function neverHandler(e) {
    throw new Error(`Unexpected event: ${e}`);
}
