// Add JavaScript code here
const header = document.querySelector(".header");
const main = document.querySelector("main");
const bubble = document.querySelector(".bubble");
const blockquoteElement = document.querySelector('blockquote.speech');
const initialText = blockquoteElement.innerHTML;


document.querySelector(".header span").addEventListener('click', function () {
    header.style.scale = "0";
    setTimeout(() => {
        header.style.scale = "1";
    }, "3000");
});

document.querySelector("main span").addEventListener('click', function () {
    main.style.scale = "0";
    setTimeout(() => {
        main.style.scale = "1";
    }, "3000");
});

document.querySelector(".btns button:last-child").addEventListener('click', function () {
    main.style.scale = "0";
    setTimeout(() => {
        main.style.scale = "1";
    }, "3000");
});

document.querySelector(".btns button:first-child").addEventListener('click', function () {
    bubble.setAttribute(
  "style",
        "opacity: 1; scale: 1; top: 0.5rem; left: calc(50% - 5.6rem);"
    );
    blockquoteElement.innerHTML = "Thank you";
    blockquoteElement.setAttribute("style", "top: 20%;");
    document.querySelector("img").style.scale = "1.1";
    setTimeout(() => {
        document.querySelector("img").style.scale = "1";
        bubble.removeAttribute("style");
        setTimeout(() => {
            blockquoteElement.innerHTML = initialText;
            blockquoteElement.removeAttribute("style");
        }, 201);
    }, "3000");
});