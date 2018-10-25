<template>
  <section id="InfoComponent" class="content-container">
    <div class="spacer"></div>
    <div class="content">
        <div class="block">
            <div class="block-image">
                <img v-bind:src="info.logo">
            </div>
            <div class="block-name">
                <p class="block-name-p">{{info.name}} <b class="block-name-b">"{{info.nickname | capitalize }}"</b> {{info.surname}}</p>
            </div>
            <div class="block-description">
                <p class="block-description">{{info.description}}</p>
            </div>
            <div class="block-expirence">
                <p class="block-expirience-p">I am work with:</p>
                <ol class="block-expirience-ol">
                    <li>#Drupal 7/8</li>
                    <li>#PHP</li>
                    <li>#CSS3</li>
                    <li>#HTML5</li>
                    <li>#JavaScript</li>
                    <li>#Vue.js</li>
                </ol>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "InfoComponent",
        props: ['info'],
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #InfoComponent{

        .content{
            padding-top: 100px !important;
        
            .block{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            
                .block-image{
                    top: -196px;
                    position: absolute;
                    height: 180px;
                    width: 180px;
                    display: flex;
                    justify-content: center;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 6px solid #ffffff;

                    img{
                        width: 100%;
                        height: auto; 
                        position: absolute;
                    }
                }

                .block-contancts{
                    .block-contancts-p{
                        >span{
                            height: 24px;
                            width: 24px;
                            display: block;
                            
                        }
                        &.email{
                            >span{
                                background: url(../assets/email.svg);
                                background-size: cover;
                            }
                        }
                        &.phone{
                            >span{
                                background: url(../assets/phone.svg);
                                background-size: cover;
                            }
                        }
                        &.telegram{
                            >span{
                                background: url(../assets/telegram.svg);
                                background-size: cover;
                            }
                        }
                        &.skype{
                            >span{
                                background: url(../assets/skype.svg);
                                background-size: cover;
                            }
                        }
                    }   
                }             
            }
        }
    }
</style>
