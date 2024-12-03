document.addEventListener("DOMContentLoaded", () => {
  let array = [];

  // document.querySelector("#customerCenter").setAttribute("tabindex", "0");
  // document.querySelector("#faq").setAttribute("tabindex", "-1");

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
      // current.setAttribute("tabindex", "-1");
    });

    document.querySelector(`${event.currentTarget.dataset.href}`).classList.remove("hidden");
    document.querySelector(`${event.currentTarget.dataset.href}`).removeAttribute("hidden");
    // document.querySelector(`${event.currentTarget.dataset.href}`).setAttribute("tabindex", "0");
    document.querySelector(`${event.currentTarget.dataset.href}`).focus();
  };

  document.querySelectorAll(".bl_lnb button").forEach((current) => {
    current.addEventListener("click", moveToSubPage);
  });

  const blTab = (event) => {
    const siblings = [...event.currentTarget.parentElement.parentElement.children].map((child) => child.querySelector("button")).filter((button) => button && button !== event.currentTarget);
    //console.log(siblings);

    siblings.forEach((element) => {
      element.removeAttribute("title");
    });

    event.currentTarget.setAttribute("title", "현재 카테고리");

    // document.querySelectorAll(`.bl_faqList details`).forEach((current) => {
    //   if (current.classList.contains(event.currentTarget.id)) {
    //     current.style.display = "";
    //   } else if (event.currentTarget.id == "all") {
    //     current.style.display = "";
    //   } else {
    //     current.style.display = "none";
    //   }
    // });
  };

  document.querySelectorAll(".bl_tab button").forEach((current) => {
    current.addEventListener("click", blTab);
  });
});
