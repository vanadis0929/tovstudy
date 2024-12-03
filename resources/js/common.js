document.addEventListener("DOMContentLoaded", () => {
  let array = [];

  document.querySelectorAll(".bl_gnbInnerDepth2").forEach((current) => {
    array.push(current.clientHeight - 29 + "px");
  });
  document.documentElement.style.setProperty("--maxHeight", array);

  const moveToSubPage = (event) => {
    event.preventDefault();

    document.querySelectorAll(".bl_lnb button").forEach((current) => {
      current.removeAttribute("disabled");
    });

    event.currentTarget.setAttribute("disabled", "disabled");

    document.querySelectorAll(`.ly_main article[id]`).forEach((current) => {
      current.setAttribute("hidden", "hidden");
    });

    document.querySelector(`${event.currentTarget.dataset.href}`).classList.remove("hidden");
    document.querySelector(`${event.currentTarget.dataset.href}`).removeAttribute("hidden");
    document.querySelector(`${event.currentTarget.dataset.href}`).focus();
  };

  document.querySelectorAll(".bl_lnb button").forEach((current) => {
    current.addEventListener("click", moveToSubPage);
  });

  const blTab = (event) => {
    const siblings = [...event.currentTarget.parentElement.parentElement.children].map((child) => child.querySelector("button")).filter((button) => button && button !== event.currentTarget);

    siblings.forEach((element) => {
      element.removeAttribute("title");
    });

    event.currentTarget.setAttribute("title", "현재 카테고리");
  };

  document.querySelectorAll(".bl_tab button").forEach((current) => {
    current.addEventListener("click", blTab);
  });
});
