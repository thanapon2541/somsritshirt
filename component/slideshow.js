Vue.component('slideshow',{
    template: `
    	<div class="slidban clearfix">
    		<div id="wrapper">      
     			<div id="slider-wrap">
    				<ul id="slider">
       					<li v-for="img in data">
       						<img :src="img" class="imgstick1">
       					</li>
     				</ul>
      				<!--controls-->
      				<div class="btns" id="next">
      					<i class="fa fa-arrow-right"></i>
      				</div>
      				<div class="btns" id="previous">
      					<i class="fa fa-arrow-left"></i>
      				</div>
      				<div id="pagination-wrap">
    		            <ul>
    		            </ul>
    	          	</div>
    	          	<!--controls-->  
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