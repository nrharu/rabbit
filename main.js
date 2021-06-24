const searchbox_open_button = document.getElementById("js-searchbox-open");
const searchbox = document.getElementById("js-button-searchbox-wrap");
searchbox_open_button.onclick = () => {
  searchbox.classList.toggle("button_searchbox_wrap_open");
  searchbox.classList.toggle("button_searchbox_wrap");
};
const hamburger_wrap = document.getElementById("js_hamburger");
const sidemenu_close = document.getElementById("js_sidemenu_close_space");
const sidemenu = document.getElementById("js_sidemenu");
hamburger_wrap.onclick = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
  sidemenu_close.classList.add("sidemenu_close_space");
};
sidemenu_close.onclick = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
};
// const sidemenu_list = document.getElementsByClassName("js_sidemenu_list");
// let index =sidemenu_list
// let remainder_index =
// sidemenu_list[0].onclick = function () {
//     sidemenu_list[remainder_index].removeAttribute("open");
// sidemenu_list[0].onclick = function () {
//   sidemenu_list[1].removeAttribute("open");
//   return "rabbit";
const sidemenu_list = document.getElementsByClassName("js_sidemenu_list");
let index;
sidemenu_list.forEach((sidemenu) => {
  sidemenu.addEventListener("click", () => {
    index = [].slice.call(sidemenu_list).indexOf(sidemenu);
  });
});
