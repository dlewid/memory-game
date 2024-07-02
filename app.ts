//Goal for tomorrow: get greeting from json file
//Goal1: make the menu bar look better
async function loadJsonFile(filename) {}

document.addEventListener("DOMContentLoaded", (event) => {
  let dotMenu = document.getElementById("three-dots") as HTMLElement | null;

  dotMenu?.addEventListener("mouseover", (event) => {
    let menu = document.getElementById("menu") as HTMLElement | null;
    if (menu) {
      menu.style.visibility = "visible";

      dotMenu.addEventListener("mouseout", (event) => {
        menu.style.visibility = "hidden";
      });
    }
  });
});
