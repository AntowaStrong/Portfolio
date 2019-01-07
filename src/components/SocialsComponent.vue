<template>
<div id="SocialsComponent" class="socials-sidebar sidebar offset">
    <ul class="socials" v-if="socials">
        <li class="socials-item" v-if="social.status && social.sidebar" :key="social.name" v-for="social in socials">
            <a :href="social.url">
                <img :src="social.icon" :alt="social.name">
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "SocialsComponent",
    props: ['socials', 'item'],
    watch:{ 
        item: function(item){
            this.$el.classList.add('animate');

            setTimeout(() => {
                this.$el.classList.remove('animate');
            },500);

            if(this.item.position == 0){
                this.offset = true
                this.$el.classList.add('offset');
            }else{
                this.$el.classList.remove('offset');
                this.offset = false
            }
        }
    },
    data(){
        return{
            offset: true,   
            animate: false,
            last: false,   
        }
    }
};
</script>

<style scoped lang="scss">
.socials-sidebar{
    left: 30px;

    .socials{
        display: flex;
        justify-content: center;
        list-style: none;
        
        .socials-item{
            display: block;
            margin: 0 10px 0 0;
            
            >a{
                display: block;
                height: 32px;
                width: 32px;

                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }   
}
</style>
