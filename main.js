/**
 * 検索ボタンを押して出現
 */

const searchbox_open_button = document.getElementById("js_button_open_icon");
const searchbox = document.getElementById("js_button_searchbox_wrap");
searchbox_open_button.onclick = () => {
  searchbox.classList.toggle("button_searchbox_wrap_open");
};

/**
 * 検索ボックスを閉じるボタン
 */

const searchbox_close_icon = document.getElementById(
  "js_searchbox_close_button"
);
searchbox_close_icon.onclick = () => {
  searchbox.classList.toggle("button_searchbox_wrap_open");
};

/**
 * ドロワーとドロワーのボタン
 */

const hamburger_wrap = document.getElementById("js_hamburger");
const sidemenu_close = document.getElementById("js_sidemenu_close_space");
const sidemenu = document.getElementById("js_sidemenu");
const hamburger_parts = document.getElementsByClassName("js_hamburger_parts");

const sidemenu_open = () => {
  sidemenu.classList.toggle("sidemenu");
  sidemenu.classList.toggle("sidemenu_open");
  sidemenu_close.classList.toggle("sidemenu_close_space");
  // for (i = 0; i < hamburger_wrap.length; i++) {
  //   hamburger_parts[i].classList.toggle(`js_hamburger_parts_${i + 1}`);
  //   hamburger_parts[i].classList.toggle(`js_hamburger_parts_${i + 1}_reverse`);
  // }
  hamburger_parts[0].classList.toggle("js_hamburger_parts_1");
  hamburger_parts[0].classList.toggle("js_hamburger_parts_1_reverse");
  // hamburger_parts[0].classList.toggle("js_hamburger_parts_disabled");
  // hamburger_parts[0].classList.toggle("js_hamburger_parts_disabled_reverse");
};
hamburger_wrap.onclick = () => {
  sidemenu_open();
};

sidemenu_close.onclick = () => {
  sidemenu_open();
};

/**
 * アコーディオンの他を閉じる関数
 */
const handleAccordion = (targetClassName) => {
  // リストをまとめてとってくる
  const sidemenu_lists = document.getElementsByClassName(targetClassName);
  // 配列風のなにかを配列にする
  const sidemenu_lists_array = Array.from(sidemenu_lists);
  // 配列にした `js_sidemenu_class` を　class に持つ要素を `forEach` で回す
  sidemenu_lists_array.forEach((list) => {
    // どれかの要素がクリックされたことを検知する
    list.addEventListener("toggle", () => {
      if (list.open) {
        // リストの配列から，クリックされたもの以外を抜き出して配列を作り直す
        const other_lists = sidemenu_lists_array.filter(
          (other_lists) => list !== other_lists
        );
        // クリックされたもの以外の配列の　`open` 属性を削除する
        other_lists.forEach((other_list) => {
          other_list.removeAttribute("open");
        });
      }
    });
  });
};

/**
 * ドロワー内のアコーディオン親階層
 */
handleAccordion("js_sidemenu_list");

/**
 * ドロワー内のアコーディオン子階層
 */
handleAccordion("sidemenu_list_child");

/**
 * login_linkのホバー時のアイコンの色変更
 */
const login_link_icon_color = document.getElementById(
  "js_login_link_icon_color"
);
const login_link_wrap = document.getElementById("js_login_link_wrap");
console.log(login_link_icon_color);
console.log(login_link_wrap);
login_link_wrap.addEventListener("mouseover", () => {
  login_link_icon_color.classList.add("js_login_link_icon_color_hover");
  console.log("Hello world");
});
login_link_wrap.addEventListener("mouseout", () => {
  login_link_icon_color.classList.remove("js_login_link_icon_color_hover");
});

/**
 * footerのアコーディオン
 */
handleAccordion("information_list");
