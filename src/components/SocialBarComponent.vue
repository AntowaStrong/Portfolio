<template>
    <div id="SocialBarComponent" class="block-socials">
        <ul class="block-socials-list">
            <li class="block-socials-element" v-on:mouseover="openSocial($event)" v-on:mouseleave="closeSocial($event)" v-if="socials && social.status && !social.sidebar" :key="social.title" v-for="social in socials">
                <a target="_blank" class="social-link" :href="social.url">
                    <img class="social-image" :src="social.icon" :alt="social.title">
                </a>
                <div class="social-content" v-on:click="redirect(social)" :class="{pointer: social.name == null}">
                    <p class="social-name">{{socialName(social)}}</p>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
    export default {
        name: "SocialBarComponent",
        props: ['socials'],
        data(){
            return {
                hovered: false  
            }
        },
        methods:{
            redirect(social){
                if(social.name == null){
                    window.open(social.url,'_blank');
                }
            },
            openSocial(e){
                if(this.hovered == false){
                    this.hovered = true

                    var element = e.target.closest('.block-socials-element');
                    var content = element.getElementsByClassName('social-content')[0];
                    var width = content.getElementsByClassName('social-name')[0].offsetWidth;

                    content.style.width = 42 + width + 'px';
                }
            },
            closeSocial(e){
                this.hovered = false;
                e.target.getElementsByClassName('social-content')[0].style.width = '28px';
            },
            socialName(social){
                return social.name == null ? social.title : social.name;  
            },
        }
    };
</script>

<style scoped lang="scss">
#SocialBarComponent{
    opacity: 0;
    transition: opacity .4s;
    background: #f9f9f9;
    display: flex;
    border-radius: 4px;
    width: 100%;
    min-height: 68px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    .block-socials-list{
        display: flex;
        margin: 0;
        padding: 0;

        .block-socials-element{
            display: flex;
            margin: 0 13px 0 0 ;

            .social-link{
                height: 28px;
                width: 28px;
                display: flex;

                .social-image{
                    display: block;
                    height: 100%;
                    z-index: 1;
                    width: 100%;
                }
            }

            .social-content{
                display: flex;
                height: 28px;
                padding: 0 10px 0 0;
                margin: 0 0 0 -28px;
                align-items: center;
                text-align: center;
                border-radius: 15px;
                background: #b5b5b5;
                transition: width .4s;
                color: white;
                text-decoration: none;
                overflow: hidden;
                width: 28px;
                min-width: 28px;

                .social-name{
                    display: block;
                    margin: 0 0 0 32px;
                    font-size: 14px;
                    word-wrap: none;
                    word-break: none;
                    white-space: nowrap;
                    transition: width .6s;
                }

                &.pointer{
                    cursor: pointer;
                    .social-name{
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
