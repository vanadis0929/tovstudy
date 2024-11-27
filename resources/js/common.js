document.addEventListener("DOMContentLoaded", () => {
  let array = [];

  document.querySelectorAll(".bl_gnbInnerDepth2").forEach((el) => {
    array.push(el.clientHeight - 29 + "px");
  });
  document.documentElement.style.setProperty("--maxHeight", array);

  const moveToSubPage = (event) => {
    event.preventDefault();

    document.querySelectorAll(".bl_lnb button").forEach((el) => {
      el.removeAttribute("disabled");
    });

    event.currentTarget.setAttribute("disabled", "disabled");

    document.querySelectorAll(`.ly_main article[id]`).forEach((current) => {
      current.classList.add("hidden");
    });

    document.querySelector(`${event.currentTarget.dataset.href}`).classList.remove("hidden");
  };

  document.querySelectorAll(".bl_lnb button").forEach((current) => {
    current.addEventListener("click", moveToSubPage);
  });
});
