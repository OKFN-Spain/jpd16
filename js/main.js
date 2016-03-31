// balance text
$('.introHeadline').balanceText();

$(".lazy").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});
