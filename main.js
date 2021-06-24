const searchbox_open_button = document.getElementsByName("searchbox_open");
const searchbox = document.getElementsByClassName("button_serchbox_wrap");
searchbox.onclick = function changeContent() {
  searchbox.classlist.toggle(
    "button_searchbox_wrap_open",
    "button_searchbox_wrap"
  );
  //   return "ha";
};
// console.log(button_searchbox_open.onclick);
// const target = document.getElementsByClassName("buttan_serchbox_wrap");

// target.addEventListener("click", function () {
//   this.classList.toggle("radius");
// });
