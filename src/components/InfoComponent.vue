<template>
  <section id="InfoComponent" class="content-container" :class="{active: active}"> 
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
                <h3 class="block-description-position">{{info.position}}</h3>
                <p class="block-description-p" v-html="info.description"></p>
            </div>
            
            <div class="block-skills" v-if="info.skills">
                <p class="block-skills-title">Навыки:</p>
                <ul class="block-skills-list">
                    <li class="block-skills-element" v-for="(skill, index) in info.skills" v-bind:key="index" v-html="skill"></li>
                </ul>
            </div>
        </div>
        <SocialBarComponent :socials="info.socials"/>               
    </div>
  </section>
</template>

<script>
    import SocialBarComponent from './SocialBarComponent.vue';

    export default {
        name: "InfoComponent",
        components: {
            SocialBarComponent
        },
        props: ['info', 'item'],
        watch: {
            item(item){
                this.active = item.component.name == this.$options._componentTag;
            }
        },
        data(){
            return {
                active: false
            }
        },
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
                opacity: 0;
                transition: opacity .4s;
                margin: 20px 0 35px 0;
                padding: 15px;
                width: 100%;
                background: #f9f9f9;

                .block-name-p{
                    font-size: 16px;
                    margin: 0;
                   
                }
            }

            .inner-content{
                opacity: 0;
                transition: opacity .4s;
                transition-delay: .2s;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 20px 15px;
                border-radius: 4px;
                background: #f9f9f9;
                font-size: 14px;
                margin: 0 0 60px;
                text-align: left;

                & > div{
                    width: 90%;
                }

                .block-skills{
                    margin: 0 0 10px;
                    
                    .block-skills-title{
                        margin: 0 0 6px 0;
                        font-weight: 600;
                    }
                    .block-skills-list{
                        padding: 0 0 0 16px;
                        margin: 0;
                    }
                }
                .block-description{
                    .block-description-position{
                        margin: 0 0 10px 0;
                        font-size: 18px;
                    }
                    .block-description-p{
                        margin: 0;
                    }
                }
            }

            .block-socials{
                transition-delay: .4s;
            }
        }

        &.active{
            .inner-content,
            .block-name,
            .block-socials{
                opacity: 1 !important;
            }

            .inner-content{
               transition-delay: 1.2s !important; 
            }

            .block-name{
               transition-delay: 1s !important; 
            }

            .block-socials{
               transition-delay: 1.4s !important; 
            }
        }
        
    }
</style>
