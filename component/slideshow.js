Vue.component('slideshow',{
    template: `
    <div class="slideshow-vue-wrap">
        <!-- Slideshow container -->
        <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            <div v-for="(img,i) in data" class="mySlides" :style="{'display':(current==i?'block':'none')}">
                <div class="numbertext">{{i+1}} / {{data.length}}</div>
                <img :src="img" :style="{'width':'100%'}">
            </div>
            <!-- Next and previous buttons -->
            <a class="prev" v-on:click="current--; if(current<0) current=0;">&#10094;</a>
            <a class="next" v-on:click="current++; if(current>=data.length) current=data.length-1;">&#10095;</a>
        </div>
        
        <!-- The dots/circles -->
        <div style="text-align:center">
            <span v-for="(img,i) in data" class="dot" v-on:click="current=i"></span> 
        </div>
    </div>
    `,
    props: ['data'],
    data: function() {
        return {
            current: 0
        };
    },
    created: function() {
        
    },
    methods: {
        
    }
});