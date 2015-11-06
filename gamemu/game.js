$(document).ready(function() {

  $("#showReserve").click(function() {
    $(".reserve").css('display', 'inline-block');
    $(".eighteen").css('display', 'none');
  });

  $("#show18").click(function() {
  	$(".reserve").css('display', 'none');
    $(".eighteen").css('display', 'inline-block');
  });

  $("#team").click(function() {
    $(".reserve").css('display', 'none');
    $(".eighteen").css('display', 'none');
  });

  $(".player").click(function() {
    $(".playerinfo").toggleClass('hidden');
  });

  $("#ddg").click(function() {
  	$(".playerinfo").html('Name: David de Gea<br>Date of birth: 07/11/1990<br>Nationality: Spain<br> Number of international caps: 7<br>No of appearances for Man Utd: 187');
  });

  $("#jones").click(function() {
  	$(".playerinfo").html('Name: Phil Jones<br>Date of birth: 21/2/1992<br>Nationality: England<br> Number of international caps: 18<br>No of appearances for Man Utd: 134');
  });
  $("#rojo").click(function() {
  	$(".playerinfo").html('Name: Marcos Rojo<br>Date of birth: 21/3/1990<br>Nationality: Argentina<br> Number of international caps: 37<br>No of appearances for Man Utd: 34');
  });
  $("#depay").click(function() {
  	$(".playerinfo").html('Name: Memphis Depay<br>Date of birth: 13/2/1994<br>Nationality: Holland<br> Number of international caps: 20<br>No of appearances for Man Utd: 16');
  });
  $("#mata").click(function() {
  	$(".playerinfo").html('Name: Juan Mata<br>Date of birth: 28/4/1988<br>Nationality: Spain<br> Number of international caps: 35<br>No of appearances for Man Utd: 67');
  });

});