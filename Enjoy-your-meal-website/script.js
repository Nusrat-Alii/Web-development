document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');

    });
})

const icons = document.querySelectorAll(".section-1-icons i");
let value = 1;
setInterval(() => {
    value++;
    const icon = document.querySelector(".section-1-icons .change");
    icon.classList.remove("change");
    if (value > icons.length) {
        icons[0].classList.add("change");
        value = 1;
    } else {
        icon.nextElementSibling.classList.add("change");

    }
}, 4000)