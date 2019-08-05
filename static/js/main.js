// Initializing Slick Carousel
$(document).ready(function() {
  $("#header-slider")
    .append(
      `
      <div>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      <div>
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
