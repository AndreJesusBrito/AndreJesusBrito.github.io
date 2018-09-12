const FADETIME = 100;

document.querySelectorAll(".list").forEach(element => {
    element.children[0].addEventListener("click", event => {
        const list = event.path[1].children[1].children;
        const deltaTime = FADETIME / list.length;
        const state = list[0].style.display === "none" ? "" : "none";

        list[0].style.display = state;
        for(let i = 1; i < list.length; i++) {
            setTimeout(() => {
                list[i].style.display = state;
            }, deltaTime*i);
        }

        event.stopPropagation();
    });
});
