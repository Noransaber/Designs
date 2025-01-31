// We are using jQuery library to flip the card
$('.flipper').click(function (e) {
  let card = $(this).closest('.card.jq');
  card.toggleClass('flipped');
});
