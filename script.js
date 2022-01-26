var count = 00;

let screenPrint = document.getElementById("screen");

function twoDigits(n) {
    if (n < 10)
        return '0' + n;
    return n;
};

function plus() {
    count = count + 1;
    screenPrint.innerHTML = twoDigits(count);
};

function Minus() {
    if (count == 0) {
        count = 0;
    } else {
        count = count - 1;
    }

    screenPrint.innerHTML = twoDigits(count);
}

function reset() {
    count = 00;

    screenPrint.innerHTML = "0" + count;
}