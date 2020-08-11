$(document).ready(function() {
  $("button#darkBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("nighttime");
  });

  $("button#lightBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("daytime");
  });
});