$(document).ready(function() {
  $("#userInputForm").submit(function(event) {
    var userInput = $("#userInput").val().toUpperCase();
    $(".output ul").prepend("<li>" + userInput + "</li>");
    event.preventDefault();
    });
});
