// LIVE CLOCK
const timeElement = document.querySelector("time");
function updateTime() {
    const now = new Date();
    const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
    timeElement.textContent = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], options)}`;
}
setInterval(updateTime, 1000);
updateTime();

// COLLAPSIBLE ARTICLES
document.querySelectorAll(".col h3").forEach(heading => {
    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => {
        const siblings = Array.from(heading.parentElement.children).filter(el => el !== heading);
        siblings.forEach(el => {
            el.style.display = (el.style.display === "none") ? "block" : "none";
        });
    });
});

// IMAGE MODAL PREVIEW
const images = document.querySelectorAll("main img");

images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = 9999;

        const modalImg = document.createElement("img");
        modalImg.src = img.src;
        modalImg.style.maxWidth = "90%";
        modalImg.style.maxHeight = "90%";
        modalImg.style.border = "5px solid white";
        modalImg.style.borderRadius = "10px";
        modalImg.style.boxShadow = "0 0 10px #fff";

        modal.appendChild(modalImg);

        modal.addEventListener("click", () => document.body.removeChild(modal));
        document.body.appendChild(modal);
    });
});
