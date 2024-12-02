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
      // current.classList.add("hidden");
      current.setAttribute("hidden", "hidden");
      current.setAttribute("tabindex", "-1");
    });

    document.querySelector(`${event.currentTarget.dataset.href}`).classList.remove("hidden");
    document.querySelector(`${event.currentTarget.dataset.href}`).removeAttribute("hidden");
    document.querySelector(`${event.currentTarget.dataset.href}`).setAttribute("tabindex", "0");
    document.querySelector(`${event.currentTarget.dataset.href}`).focus();
  };

  document.querySelectorAll(".bl_lnb button").forEach((current) => {
    current.addEventListener("click", moveToSubPage);
  });
});
