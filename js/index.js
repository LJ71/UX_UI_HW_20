$(".connect").on("click", function () {
  $(".form_modal").fadeIn(500);
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
  $(".form_modal").fadeOut(500);
  $(".overlay").fadeOut(250);
  $(".vid_modal").fadeOut(500);
  $(".prototype_video").trigger("pause");
}
$(".prototype_img").on("click", function () {
  $(".vid_modal").fadeIn(500);
  $(".overlay").fadeIn(250);
  $(".prototype_video").trigger("play");
});
