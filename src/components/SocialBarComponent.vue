<template>
<div id="SocialBarComponent" class="block-socials block">
    <ul class="socials" v-if="socials">
        <li class="socials-item" v-on:mouseover="openSocial($event)" v-on:mouseleave="closeSocial($event)" v-if="social.status && !social.sidebar" :key="social.title" v-for="social in socials">
            <a target="_blank" class="link" :href="social.url">
                <img class="image" :src="social.icon" :alt="social.title">
            </a>

            <div class="link-content" v-on:click="redirect(social)" :class="{pointer: social.name == null}">
                <p class="name">{{socialName(social)}}</p>
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
                window.open(social.url, '_blank');
            }
        },
        openSocial(e){
            if(this.hovered == false){
                this.hovered = true

                var element = e.target.closest('.socials-item');
                var content = element.getElementsByClassName('link-content')[0];
                var width = content.getElementsByClassName('name')[0].offsetWidth;

                content.style.width = 42 + width + 'px';
            }
        },
        closeSocial(e){
            this.hovered = false;
            e.target.getElementsByClassName('link-content')[0].style.width = '28px';
        },
        socialName(social){
            return social.name == null ? social.title : social.name;  
        },
    }
};
</script>

<style scoped lang="scss">
.block-socials{
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

    .socials{
        display: flex;

        .socials-item{
            display: flex;
            margin: 0 13px 0 0 ;

            .link{
                height: 28px;
                width: 28px;
                display: flex;

                .image{
                    display: block;
                    height: 100%;
                    z-index: 1;
                    width: 100%;
                }
            }

            .link-content{
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

                .name{
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
                    .name{
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
