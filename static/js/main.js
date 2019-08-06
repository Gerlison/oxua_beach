// Initializing Slick Carousel
$(document).ready(function() {
  $("#header-slider")
    .append(
      `
      <div>
        <div class="caption">
          <p>O verão chegou com novidades</p>
          <a href="#">VER PRODUTOS</a>
        </div>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      <div>
        <div class="caption">
          <p>O verão chegou com novidades</p>
          <a href="#">VER PRODUTOS</a>
        </div>
        <img class="img-fluid" src="./assets/images/image.png" alt="" />
      </div>
      <div>
        <div class="caption">
          <p>O verão chegou com novidades</p>
          <a href="#">VER PRODUTOS</a>
        </div>
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
      dots: true,
      autoplay: true
    });
});

$(document).ready(function() {
  $("#products-slider")
    .append(
      `
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
        <div class="product">
          <img src="./assets/images/model1.png" />
          <p>Biquíni cortininha palmeira</p>
          <h2><span>R$ </span>129,90</h2>
        </div>
      `
    )
    .slick({
      accessibility: true,
      infinite: true,
      mobileFirst: true,
      dots: true,
      prevArrow: `<button type="button" class="slick-prev"><</button>`,
      nextArrow: `<button type="button" class="slick-next">></button>`,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
