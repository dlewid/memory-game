document.addEventListener("DOMContentLoaded", function (event) {
    var dotMenu = document.getElementById("three-dots");
    dotMenu === null || dotMenu === void 0 ? void 0 : dotMenu.addEventListener("mouseover", function (event) {
        var menu = document.getElementById("menu");
        if (menu) {
            menu.style.visibility = "visible";
            dotMenu.addEventListener("mouseout", function (event) {
                menu.style.visibility = "hidden";
            });
        }
    });
});
