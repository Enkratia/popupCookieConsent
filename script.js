const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("codinglab")) return;

  cookieBox.classList.add("show");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (btn.id == "accept-btn") {
        document.cookie = "user=codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
}

window.addEventListener("load", executeCodes);
