// Initializing Slick Carousel
$(document).ready(function() {
  $("#header-slider")
    .append(
      `
      <div>
        <p class="slider-caption">Donec sollicitudin molestie malesuada.</p>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      <div>
        <p class="slider-caption">Donec sollicitudin molestie malesuada.</p>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      <div>
        <p class="slider-caption">Donec sollicitudin molestie malesuada.</p>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      `
    )
    .slick({
      accessibility: true,
      adaptiveHeight: true,
      infinite: true,
      mobileFirst: true,
      arrows: false,
      dots: true
    });
});
