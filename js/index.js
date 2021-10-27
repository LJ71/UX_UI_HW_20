$(".connect").on("click", function () {
  $(".modal").fadeIn(500);
  $(".overlay").fadeIn(250);
  $(".contact_form").show();
  $(".message").hide();
});
function sendEmail() {
  $("#name, #email, #message").val("");
  $(".contact_form").hide();
  $(".message").show();
}
function closeModal() {
  $(".modal").fadeOut(500);
  $(".overlay").fadeOut(250);
}
