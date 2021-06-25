const searchbox_open_button = document.getElementById("js-searchbox-open");
const searchbox = document.getElementById("js-button-searchbox-wrap");
searchbox_open_button.onclick = () => {
  searchbox.classList.toggle("button_searchbox_wrap_open");
  searchbox.classList.toggle("button_searchbox_wrap");
};
const hamburger_wrap = document.getElementById("js_hamburger");
const sidemenu_close = document.getElementById("js_sidemenu_close_space");
const sidemenu = document.getElementById("js_sidemenu");
const hamburger_parts = document.getElementsByClassName("js_hamburger_parts");
hamburger_wrap.onclick = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
  sidemenu_close.classList.toggle("sidemenu_close_space");
  hamburger_parts[0].classList.toggle("js_hamburger_parts_1");
  hamburger_parts[1].classList.toggle("js_hamburger_parts_2");
  hamburger_parts[2].classList.toggle("js_hamburger_parts_3");
};
sidemenu_close.onclick = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
  sidemenu_close.classList.toggle("sidemenu_close_space");
};
const sidemenu_list = document.getElementsByClassName("js_sidemenu_list");
// const open_sidemenu_list =
// const new_sidemenu_list = sidemenu_list.filter((n) => n !== "");
// console.log(`new_sidemenu_list=${new_sidemenu_list}`);
//関数考える
sidemenu_list[0].onclick = () => {
  sidemenu_list[1].removeAttribute("open");
  sidemenu_list[2].removeAttribute("open");
  sidemenu_list[3].removeAttribute("open");
  sidemenu_list[4].removeAttribute("open");
};
sidemenu_list[1].onclick = () => {
  sidemenu_list[2].removeAttribute("open");
  sidemenu_list[3].removeAttribute("open");
  sidemenu_list[4].removeAttribute("open");
  sidemenu_list[0].removeAttribute("open");
};
sidemenu_list[2].onclick = () => {
  sidemenu_list[3].removeAttribute("open");
  sidemenu_list[4].removeAttribute("open");
  sidemenu_list[0].removeAttribute("open");
  sidemenu_list[1].removeAttribute("open");
};
sidemenu_list[3].onclick = () => {
  sidemenu_list[4].removeAttribute("open");
  sidemenu_list[0].removeAttribute("open");
  sidemenu_list[1].removeAttribute("open");
  sidemenu_list[2].removeAttribute("open");
};
sidemenu_list[4].onclick = () => {
  sidemenu_list[0].removeAttribute("open");
  sidemenu_list[1].removeAttribute("open");
  sidemenu_list[2].removeAttribute("open");
  sidemenu_list[3].removeAttribute("open");
};

const information_list = document.getElementsByClassName("information_list");
information_list[0].onclick = () => {
  information_list[1].removeAttribute("open");
  information_list[2].removeAttribute("open");
  information_list[3].removeAttribute("open");
};
information_list[1].onclick = () => {
  information_list[2].removeAttribute("open");
  information_list[3].removeAttribute("open");
  information_list[0].removeAttribute("open");
};
information_list[2].onclick = () => {
  information_list[3].removeAttribute("open");
  information_list[0].removeAttribute("open");
  information_list[1].removeAttribute("open");
};
information_list[3].onclick = () => {
  information_list[0].removeAttribute("open");
  information_list[1].removeAttribute("open");
  information_list[2].removeAttribute("open");
};

const items = ["りんご", "オレンジ", "バナナ"];
const newItems = items.filter((n) => n !== "りんご");
console.log(`newItems = ${newItems}`);
