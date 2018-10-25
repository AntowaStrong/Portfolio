<template>
  <div id="SocialsComponent" v-bind:class="{ offset: offset }">
        <ul class="block-socials">
            <li class="block-socials-element" v-if="socials && social.status" :key="social.name" v-for="social in socials">
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
                if(item.position == 0){
                    this.offset = true
                }else{
                    this.offset = false
                }
            }
        },
        data(){
            return{
                offset: true,       
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #SocialsComponent{
        top: 0;
        margin: 30px 0 0 0;
        z-index: 2;
        position: absolute;
        left: 25px;
        transition: top .50s;

        &.offset{
            top: 192px;
        }

        .block-socials{
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            margin: 0;
    
            .block-socials-element{
                display: block;
                margin: 5px;
                
                >a{
                    display: block;
                    height: 44px;
                    width: 44px;

                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }   
    }
</style>
