<template>
  <div id="SocialsComponent" class="offset">
        <ul class="block-socials">
            <li class="block-socials-element" v-if="socials && social.status && social.sidebar" :key="social.name" v-for="social in socials">
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
    #SocialsComponent{
        top: 0;
        margin: 30px 0 0 0;
        z-index: 2;
        position: absolute;
        left: 30px;
        transition: top .50s, opacity .15s;
        transition-delay: .6s, .2s;
        
        &.offset{
            top: 145px;
        }

        &.hidden{
            opacity: 0;
        }

        &.animate{
            opacity: 0;
        }

        .block-socials{
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            margin: 0;
    
            .block-socials-element{
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
