
        // Array of image data
        const images = [
            { src: "1.jpg", caption: "This is Picture No. 1" },
            { src: "2.jpg", caption: "This is Picture No. 2" },
            { src: "3.jpg", caption: "This is Picture No. 3" },
            { src: "4.jpg", caption: "This is Picture No. 4" },
            { src: "5.jpg", caption: "This is Picture No. 5" }
        ];

        let currentIndex = 0;

        // DOM elements
        const imgElement = document.getElementById("slider-image");
        const captionElement = document.getElementById("slider-caption");

        // Show slide by index
        function showSlide(index) {
            currentIndex = (index + images.length) % images.length;
            imgElement.src = images[currentIndex].src;
            captionElement.textContent = images[currentIndex].caption;
        }

        // Show next slide
        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        // Show previous slide
        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // Auto slideshow
        setInterval(nextSlide, 4000); // Change every 4 seconds

        // Show the first image on load
        showSlide(currentIndex);
