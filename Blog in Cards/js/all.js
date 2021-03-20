// Load more items on click
$('.main__load_btn').click(function () {
$('.cards__container').prepend(`
<div class="row row-cols-3">
  <div class="col-6">
    <div class="card card_wide text-white h-100">
      <img srcset="images/1andrej-lisakov-1Bg9Wlq3wXk-unsplash.jpg 1x, images/2andrej-lisakov-1Bg9Wlq3wXk-unsplash.jpg 2x" class="card-img rounded shadow h-100" alt="Wooden panels bg image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">Best Flooring Options for Your Home on a Budget</h2>
        <p class="card-text">
          Before you get started on your flooring project, it pays to do a little research on the different kinds
          of flooring and learn about their costs and benefits. Then, you can find a floor that fits both your
          space and your budget.
        </p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for free</a>
      </div>
    </div>
  </div>

  <div class="col-3">
    <div class="card card_slim text-white h-100">
      <img srcset="images/1deborah-diem-4dWz9H7d8OM-unsplash.jpg 1x, images/2deborah-diem-4dWz9H7d8OM-unsplash.jpg 2x"  class="card-img-top rounded shadow h-100" alt="Coffee background image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">6 Best Benefits of Adding Honey In Coffee</h2>
        <p class="card-text">
          Here are just some of the benefits of honey when added to your daily cup of coffee.
        </p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for $0.99</a>
      </div>
    </div>
  </div>

  <div class="col-3">
    <div class="card card_slim text-white h-100" style="width: 17rem">
      <img  srcset="images/1annie-spratt-F2osbUaY9kI-unsplash.jpg 1x, images/2annie-spratt-F2osbUaY9kI-unsplash.jpg 2x" class="card-img-top rounded shadow h-100" alt="Autumn leaves bg image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">Fall Jazz Playlist </h2>
        <p class="card-text">
          If you're creating a jazz playlist for taking walks through autumn leaves, here are suggestions for you.
        </p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for $1.99</a>
      </div>
    </div>
  </div>

<div class="container-fluid w-100 divider"></div>

  <div class="col-3">
    <div class="card card_slim text-white h-100" style="width: 17rem">
      <img  srcset="images/1jessica-delp-smNzhFQRktg-unsplash.jpg 1x, images/2jessica-delp-smNzhFQRktg-unsplash.jpg 2x" class="card-img-top rounded shadow h-100" alt="Lit candle bg image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">10 Scented Candles for Christmas</h2>
        <p class="card-text">Festive treats for you and your home.</p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for free</a>
      </div>
    </div>
  </div>

  <div class="col-3">
    <div class="card card_slim text-white h-100" style="width: 17rem">
      <img  srcset="images/1justin-luebke-ahRErl1zyaQ-unsplash.jpg 1x, images/2justin-luebke-ahRErl1zyaQ-unsplash.jpg 2x" class="card-img-top rounded shadow h-100" alt="Cat outside the door bg image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">About Walking Your Cat</h2>
        <p class="card-text">Should we do it?</p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for $0.99</a>
      </div>
    </div>
  </div>

  <div class="col-6">
    <div class="card card_wide text-white h-100">
      <img  srcset="images/1andrew-neel-1-29wyvvLJA-unsplash.jpg 1x, images/2andrew-neel-1-29wyvvLJA-unsplash.jpg 2x" class="card-img rounded shadow h-100" alt="Maps bg image" />
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <h2 class="card-title">Traveling on Quarantine</h2>
        <p class="card-text">
          If you are considering traveling, here are some important questions to ask yourself and your loved ones
          beforehand. These questions can help you decide what is best for you and your family.
        </p>
        <a href="#" class="btn btn-light btn-outline-dark mt-auto">Read for $1.99</a>
      </div>
    </div>
  </div>
</div>
`)});