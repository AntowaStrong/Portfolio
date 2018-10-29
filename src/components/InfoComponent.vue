<template>
  <section id="InfoComponent" class="content-container">
    <div class="spacer"></div>
    <div class="content">
        <div class="block-image">
            <img v-bind:src="info.logo">
        </div>
        <div class="block-name">
            <p class="block-name-p">{{info.name}} <b class="block-name-b">"{{info.nickname}}"</b> {{info.surname}}</p>
        </div>
        <div class="inner-content">
            <div class="block-description">
                <p class="block-description-p" v-html="info.description"></p>
            </div>
            <div class="block-skills">
                <p class="block-skills-title">Skills:</p>
                <ul class="block-skills-list">
                    <li class="block-skills-element">Drupal 7/8</li>
                    <li class="block-skills-element">PHP</li>
                    <li class="block-skills-element">Wordpress</li>
                    <li class="block-skills-element">Yii2</li>
                    <li class="block-skills-element">Sass/Less</li>
                    <li class="block-skills-element">Terminal</li>
                    <li class="block-skills-element">Composer</li>
                    <li class="block-skills-element">NPM</li>
                    <li class="block-skills-element">Git</li>
                    <li class="block-skills-element">SSH</li>
                    <li class="block-skills-element">Node.js</li>
                    <li class="block-skills-element">CSS3</li>
                    <li class="block-skills-element">HTML5</li>
                    <li class="block-skills-element">JavaScript</li>
                    <li class="block-skills-element">Vue.js</li>
                    <li class="block-skills-element">MySQl</li>
                    <li class="block-skills-element">jQuery</li>
                    <li class="block-skills-element">Bootstrap</li>
                    <li class="block-skills-element">SQLite</li>
                </ul>
            </div>
        </div>
        <div class="bottom">                
            <div class="block-socials">
                <ul class="block-socials-ul">
                    <li class="block-socials-li" v-if="info.socials && social.status && !social.sidebar" :key="social.name" v-for="social in info.socials">
                        <a :href="social.url">
                            <img :src="social.icon" :alt="social.name">
                            <div>
                            <p>{{social.name}}</p>
</div>
                        </a>
                    </li>
                </ul>
            </div>                
        </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "InfoComponent",
        props: ['info']
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #InfoComponent{
        .content{
            padding-bottom: 50px !important;
            padding-top: 80px !important;
            position: relative;
        
            .block-image{
                top: -80px;
                position: absolute;
                height: 160px;
                width: 160px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 6px solid #ffffff;
                background: #fff;

                img{
                    width: 100%;
                    height: auto; 
                    position: absolute;
                }
            }  
            .block-name{
                margin: 0 0 25px 0;
                .block-name-p{
                    font-size: 17px;
                    margin: 0;
                   
                }
            }

            .inner-content{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                border-radius: 4px;
                
                background: #f9f9f9;
                font-size: 15px;
                margin: 0 0 100px;

                .block-skills{
                    width: 70%;
                    .block-skills-list{
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        justify-content: center;
                        list-style: none;

                        .block-skills-element{
                            display: block;
                            padding: 4px 8px;
                            margin: 5px 5px;
                            border-radius: 10px;
                            border: 1px solid #2c3e50;
                            /* color: #fff; */
                            /* font-weight: 700; */
                            //background: rgba(255, 255, 255, 1);
                        }
                    }
                }
                .block-description{
                    width: 70%;

                    .block-description-p{
                        //font-size: 14px;
                        margin: 0;
                    }
                }
            }

            .bottom{
                background: #f9f9f9;
                padding: 30px 15px;
                display: flex;
                border-radius: 4px;
                width: 100%;
                font-size: 14px;
                justify-content: center;
                align-items: center;

                .block-contacts-details{
                   
                    p{
                         display: flex;
                        margin: 0 0 3px 0;
                        text-align: left;

                        >span{
                            margin: 0 4px 0 0;
                            height: 18px;
                            width: 18px;
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

                .block-socials{
  
                    ul{
                        display: flex;
                        margin: 0;
                        padding: 0;

                        li{
                            display: block;
                            margin: 0 8px 0 0 ;

                            a{
                                height: 28px;
                                // width: 28px;
                                display: flex;
                                img{
                                    display: block;
                                    height: 100%;
                                    z-index: 1;
                                    // width: 100%;
                                }

                                //607D8B
                                div{
                                    display: flex;
                                    padding: 0 10px 0 0;
                                    margin: 0 0 0 -28px;
                                    align-items: center;
                                    height: 100%;
                                    text-align: center;
                                    border-radius: 15px;
                                    background: #607D8B;
                                    transition: all .6s;
                                    color: white;
                                    text-decoration: none;
                                    overflow: hidden;
                                    width: 10px;
                                    min-width: 28px;
                                    p{
                                        display: block;
                                        margin: 0 0 0 32px;
                                        word-wrap: none;
                                        word-break: none;
                                        white-space: nowrap;
                                    }
                                }

                                &:hover, &:visited, &:link, &x:active{

                                            text-decoration: none;
                                }


                            }
                            &:hover{
                                a{
                                    div{
                                        width: 100px;
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
        
    }
</style>
