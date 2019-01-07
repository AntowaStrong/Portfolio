<template>
<section id="InfoComponent" class="info-page page" :class="{active: active}"> 
    <div class="spacer"></div>
    <div class="content">
        <div class="block-logo block">
            <img v-bind:src="info.logo">
        </div>

        <div class="block-name block">
            <p class="name-fullname">{{info.name}} <b class="name-nickname">"{{info.nickname}}"</b> {{info.surname}}</p>
        </div>

        <div class="block-about block">
            <div class="description">
                <h3 class="position">{{info.position}}</h3>
                <p v-html="info.description"></p>
            </div>
            
            <div class="skills" v-if="info.skills">
                <p class="title">Навыки:</p>
                <ul class="list">
                    <li class="list-item" v-for="(skill, index) in info.skills" v-bind:key="index" v-html="skill"></li>
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

<style scoped lang="scss">
    #InfoComponent{
        .content{
            padding-bottom: 50px !important;
            padding-top: 80px !important;
            position: relative;
        
            .block-logo{
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

                > img{
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

                .name-fullname{
                    font-size: 16px;
                    margin: 0;
                   
                }
            }

            .block-about{
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

                .skills{
                    margin: 0 0 10px;
                    
                    .title{
                        margin: 0 0 6px 0;
                        font-weight: 600;
                    }

                    .list{
                        padding: 0 0 0 16px;
                        margin: 0;
                    }
                }

                .description{
                    .position{
                        margin: 0 0 10px 0;
                        font-size: 18px;
                    }

                    > p{
                        margin: 0;
                    }
                }
            }

            .block-socials{
                transition-delay: .4s;
            }
        }

        &.active{
            .block-about,
            .block-name,
            .block-socials{
                opacity: 1 !important;
            }

            .block-about{
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
