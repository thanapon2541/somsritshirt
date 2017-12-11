Vue.component('slideshow',{
    template: `
        <!-- Container for the image gallery -->
        <div class="slideshow-container">
            <!-- Full-width images with number text -->
            <div class="mySlides">
                <div class="numbertext">1 / 6</div>
                <img src="img_woods_wide.jpg" style="width:100%">
            </div>
            <div class="mySlides">
                <div class="numbertext">2 / 6</div>
                <img src="img_fjords_wide.jpg" style="width:100%">
            </div>
            <div class="mySlides">
                <div class="numbertext">3 / 6</div>
                <img src="img_mountains_wide.jpg" style="width:100%">
            </div>
            <div class="mySlides">
                <div class="numbertext">4 / 6</div>
                <img src="img_lights_wide.jpg" style="width:100%">
            </div>
            <div class="mySlides">
                <div class="numbertext">5 / 6</div>
                <img src="img_nature_wide.jpg" style="width:100%">
            </div>
            <div class="mySlides">
                <div class="numbertext">6 / 6</div>
                <img src="img_snow_wide.jpg" style="width:100%">
            </div>
            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            <!-- Image text -->
            <div class="caption-container">
                <p id="caption"></p>
            </div>
            <!-- Thumbnail images -->
            <div class="row">
                <div class="column">
                    <img class="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
                </div>
                <div class="column"> 
                    <img class="demo cursor" src="img_fjords.jpg" style="width:100%" onclick="currentSlide(2)" alt="Trolltunga, Norway">
                </div>
                <div class="column">
                    <img class="demo cursor" src="img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
                </div>
                <div class="column">
                    <img class="demo cursor" src="img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">
                </div>
                <div class="column">
                    <img class="demo cursor" src="img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise">
                </div>
                <div class="column">
                    <img class="demo cursor" src="img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains">
                </div>
            </div>
        </div>
    `,
    props: ['data','offset'],
    created: function() {
        if (!this.offset) this.offset = 0;
        console.log("dsdadas");
    },
    methods: {
        
    }
});