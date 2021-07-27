export default function scrollFunction(button) {

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}