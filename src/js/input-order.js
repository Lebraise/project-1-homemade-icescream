var minus = document.querySelectorAll('.quantity-arrow-minus');
var plus = document.querySelectorAll('.quantity-arrow-plus');

minus.forEach((node) => {
    node.onclick = function () {
        this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1;
}
});

plus.forEach((node) => {
    node.onclick = function () {
        this.previousElementSibling.value =Number(this.previousElementSibling.value) + 1;
}
});