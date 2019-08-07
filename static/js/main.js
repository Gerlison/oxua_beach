$(document).ready(function() {
  // Rendering HTML Based on 'API'
  menu.forEach(function(item) {
    $("header ul").append(`<li><a href=${item.link}>${item.label}</a></li>`);
  });

  headerCarousel.forEach(function(item) {
    $("#header-slider").append(`
        <div>
          <div class="caption">
            <p>${item.caption}</p>
            <a href="${item.cta_link}">${item.cta_label}</a>
          </div>
          <img class="img-fluid" src="${item.image}" alt="" />
        </div>
    `);
  });

  cards.forEach(function(item) {
    $("#cards").append(`
        <div>
          <img src="${item.image}" />
        </div>
    `);
  });

  products.forEach(function(item) {
    $("#products-slider").append(`
      <div class="product">
        <img src="${item.image}" />
        <p>${item.label}</p>
        <h2><span>R$ </span>${(parseInt(item.price) * 25) / 100}</h2>
      </div>
    `);
  });

  footer.forEach(function(item) {
    const html = `
      <div class="column">
        ${item.columns
          .map(
            item =>
              `
              <a href="${item.link}">${item.label}</a>
            `
          )
          .join("")}
      </div>
    `;

    $("footer #info").append(html);
  });

  $("footer #info").append(`
    <div class="column">
      <p class="input-label"><b>NEW</b> RECEBA PROMOÇÕES E NOVIDADES</p>
      <div class="input">
        <input type="email" placeholder="Digite seu e-mail" />
        <a href="#"
          ><img height="16" src="./assets/icons/arrow.png" alt=""
        /></a>
      </div>
    </div>
  `);

  // Initializing Slick Carousel

  $("#header-slider").slick({
    accessibility: true,
    adaptiveHeight: true,
    infinite: true,
    mobileFirst: true,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $("#products-slider").slick({
    accessibility: true,
    infinite: true,
    mobileFirst: true,
    dots: false,
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="./assets/icons/arrow_left.png" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="./assets/icons/arrow_right.png" />
      </button>`,
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
