// 避免網頁開始時 header__content的閃現
$(document).ready(() => {
  $(".header label").click(function () {
    $(".header__content").removeClass("header__content--hidden");
  });
});
