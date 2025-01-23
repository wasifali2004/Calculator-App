const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const dzero = document.querySelector(".doublezero");
const slash = document.querySelector(".Slash");
const dot = document.querySelector(".Dot");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const mul = document.querySelector(".mul");
const clear = document.querySelector(".Clear");
const del = document.querySelector(".Del");
const dis = document.querySelector("input[name='display']");

one.addEventListener("click", () => {
    dis.value += 1;
});

two.addEventListener("click", () => {
    dis.value += 2;
});

three.addEventListener("click", () => {
    dis.value += 3;
});

four.addEventListener("click", () => {
    dis.value += 4;
});

five.addEventListener("click", () => {
    dis.value += 5;
});

six.addEventListener("click", () => {
    dis.value += 6;
});

seven.addEventListener("click", () => {
    dis.value += 7;
});

eight.addEventListener("click", () => {
    dis.value += 8;
});

nine.addEventListener("click", () => {
    dis.value += 9;
});

zero.addEventListener("click", () => {
    dis.value += 0;
});

dzero.addEventListener("click", () => {
    dis.value += "00";
});

slash.addEventListener("click", () => {
    dis.value += "/";
});

dot.addEventListener("click", () => {
    dis.value += ".";
});

add.addEventListener("click", () => {
    dis.value += "+";
});

minus.addEventListener("click", () => {
    dis.value += "-";
});

mul.addEventListener("click", () => {
    dis.value += "*";
});

clear.addEventListener("click", () => {
    dis.value = "";
});

del.addEventListener("click", () => {
    dis.value = dis.value.slice(0, -1);
});

equal.addEventListener("click", () => {
    try {
        dis.value = eval(dis.value);
    } catch (e) {
        dis.value = "Error";
    }
});
