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
sidemenu_open = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
};
hamburger_wrap.onclick = () => {
  sidemenu_open();
  sidemenu_close.classList.toggle("sidemenu_close_space");
  hamburger_parts[0].classList.toggle("js_hamburger_parts_1");
  hamburger_parts[1].classList.toggle("js_hamburger_parts_2");
  hamburger_parts[2].classList.toggle("js_hamburger_parts_3");
  hamburger_parts[0].classList.toggle("js_hamburger_parts_1_reverse");
  hamburger_parts[1].classList.toggle("js_hamburger_parts_2_reverse");
  hamburger_parts[2].classList.toggle("js_hamburger_parts_3_reverse");
};
sidemenu_close.onclick = () => {
  sidemenu_open();
  sidemenu_close.classList.toggle("sidemenu_close_space");
};

// リストをまとめてとってくる
const sidemenu_lists = document.getElementsByClassName("js_sidemenu_list");

// 配列風のなにかを配列にする
const sidemenu_lists_array = Array.from(sidemenu_lists);

// 配列にした `js_sidemenu_class` を　class に持つ要素を `forEach` で回す
sidemenu_lists_array.forEach((list) => {
  // どれかの要素がクリックされたことを検知する
  list.addEventListener("click", (clicked_sidemenu_list) => {
    // リストの配列から，クリックされたもの以外を抜き出して配列を作り直す
    const other_lists = sidemenu_lists_array.filter(
      (list) => list !== clicked_sidemenu_list
    );
    // クリックされたもの以外の配列の　`open` 属性を削除する
    other_lists.forEach((other_list) => {
      other_list.removeAttribute("open");
    });
  });
});

// let x = sidemenu_list.getAttribute;
// const new_sidemenu_list = sidemenu_list.filter((n) => n !== x);
// sidemenu_list[x].onclick = () => {
//   sidemenu_list[new_sidemenu_list].removeAttribute("open");
// };

const information_lists = document.getElementsByClassName("information_list");

information_lists[0].onclick = () => {
  information_lists[1].removeAttribute("open");
  information_lists[2].removeAttribute("open");
  information_lists[3].removeAttribute("open");
};
information_lists[1].onclick = () => {
  information_lists[2].removeAttribute("open");
  information_lists[3].removeAttribute("open");
  information_lists[0].removeAttribute("open");
};
information_lists[2].onclick = () => {
  information_lists[3].removeAttribute("open");
  information_lists[0].removeAttribute("open");
  information_lists[1].removeAttribute("open");
};
information_lists[3].onclick = () => {
  information_lists[0].removeAttribute("open");
  information_lists[1].removeAttribute("open");
  information_lists[2].removeAttribute("open");
};

const items = ["りんご", "オレンジ", "バナナ"];
const newItems = items.filter((n) => n !== "りんご");
console.log(`newItems = ${newItems}`);
