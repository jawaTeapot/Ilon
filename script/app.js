// Нажали на бургер
$("#burger").on("click", function (e) {
  $(".burger").show();
});

// Нажали на закрытие бургера
$("#burger-close").on("click", function (e) {
  $(".burger").hide();
});
