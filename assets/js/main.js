// Profe debo confesar que el ejercicio me la ganó cuando quise hacer la transicion del estado normal/favorito, por lo que termine usando ai.
// De todas formas, aprendi un kilo (y me entere de que existen las animacion con keyframes en css!)

$(document).ready(function() {

  $(document).on('click', 'button.btn-favorito', function(e) {
    e.preventDefault();
    const $btn = $(this);
    const $icon = $btn.find('i.bi-heart, i.bi-heart-fill').first();
    if (!$icon.length) return;

    if ($icon.hasClass('bi-heart')) {
      $icon.removeClass('bi-heart').addClass('bi-heart-fill text-danger');
      $btn.addClass('favorito-activo');

      // Show temporary message inside the card-image-container
      showFavMessage($btn, 'Añadido a favoritos');
    } else {
      $icon.removeClass('bi-heart-fill text-danger').addClass('bi-heart');
      $btn.removeClass('favorito-activo');

      // Show temporary message for removal
      showFavMessage($btn, 'Eliminado de tus favoritos');
    }
  });

});

// Helper: append a temporary message inside the card-image-container of the card
function showFavMessage($btn, text) {
  var $cardImage = $btn.closest('.card').find('.card-image-container').first();
  if (!$cardImage.length) return;
  $cardImage.find('.fav-message').remove();
  var $msg = $('<div class="fav-message"></div>').text(text);
  $cardImage.append($msg);
  $msg[0].offsetHeight; // force reflow so transitions run
  setTimeout(function() {
    $msg.addClass('fade-out');
    setTimeout(function() { $msg.remove(); }, 220);
  }, 1000);
}