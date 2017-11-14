Vue.component('img-lazy',{
    template: `
        <img :data-src="src" :class="class">
    `,
    props: ['src','class'],
    mounted: function() { setTimeout(()=> {
        $(window).on("load",()=> {
            //console.log(this.$el);
            this.$el.src = this.$el.dataset.src;
        });
    },10); }
});