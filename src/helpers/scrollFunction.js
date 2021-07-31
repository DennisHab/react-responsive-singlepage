export default function scrollFunction(button) {

    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}