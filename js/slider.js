const sliderImage = (idElement) => {
  document.getElementById(idElement).addEventListener("click", function () {
    var image = document.getElementById("slider-image");

    image.src = "/assets/image2.jpg";
  });
};
