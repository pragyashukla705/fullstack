console.log("JS Loaded");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
let currentSlide=0;
function nextSlide(){
    currentSlide++;
    if(currentSlide === slides.length){
    currentSlide = 0;
    }
    slider.style.transform =
`translateX(-${currentSlide * 100}%)`;
}
setInterval(nextSlide, 3000);

// Search box functionality

const searchBox = document.querySelector("#search");
const movies = document.querySelectorAll(".movie-card");

searchBox.addEventListener("input", search);

function search() {

    const query = searchBox.value.toLowerCase();

    movies.forEach(function(movie) {

        const title = movie
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(query)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });

}
