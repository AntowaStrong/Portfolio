<template>
  <section id="ProjectsComponent" class="content-container" :class="{active: active}">
    <div class="content">
        <div class="block-projects" v-bind:class="[{opened: element}, animation]">
            <div class="project-view">
                <div class="project-view-close" v-on:click="toggleView(element, $event)">+</div>
                <ProjectComponent v-if="element" :project="element"/>
            </div>
            <div class="project-list" v-bar>
                <div>
                    <div class="project-element" v-for="project in projects" :key="project.id" v-on:click="toggleView(project, $event)" :class="{active: element && project.id == element.id}">
                        <img class="project-image" :src="project.image" :alt="project.name" :class="project.stretchimage">
                        <p class="project-name">{{project.name}}</p>
                    </div>
                </div>
            </div>
        </div>                             
        <SocialBarComponent :socials="info.socials" />      
    </div>
    <div class="spacer"></div>
  </section>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
import SocialBarComponent from './SocialBarComponent.vue';

export default {
    name: "ProjectsComponent",
    props: ['projects', 'info', 'item'],
    components: {
        ProjectComponent,
        SocialBarComponent
    },
    watch: {
        item(item){
            this.active = item.component.name == this.$options._componentTag;
        }
    },
    data(){
        return {
            active: false,
            element: null,
            animation: null  
        }
    },
    methods:{
        toggleView(element, e){

            if(this.element === null){
                this.animation = 'opening';
                this.element = element;
                
                setTimeout(() => {
                    this.animation = null;
                    var $list = this.$el.getElementsByClassName('vb-content')[0];
                    var $element = e.target.closest('.project-element');
                    $list.scrollTop = $element.offsetTop;
                }, 800);

            }else{
                if(element.id === this.element.id){
                    this.animation = 'closing';

                    setTimeout(() => {
                        this.element =  null;
                    }, 400);

                    setTimeout(() => {
                        this.animation = null;
                    }, 1200);

                }else{
                    this.animation = 'changing';

                    setTimeout(() => {
                        this.element =  element;
                        this.animation = null;
                    }, 400);
                }
            }
        }
    }
};
</script>

<style scoped lang="scss">
    #ProjectsComponent{
        &.active{
            .block-projects,
            .block-socials{
                opacity: 1 !important; 
                
            }

            .block-projects{
                transition-delay: 1s !important;
            }

            .block-socials{
                transition-delay: 1.2s !important;
            }
        }

        .content{
            padding-top: 110px !important;
            justify-content: space-between;

            .block-projects{
                opacity: 0;
                transition: opacity .4s;
                display: flex;
                width: 100%;
                max-height: 520px;

                &.opened{
                    .project-view,
                    .project-list{
                        width: 50% !important;
                        opacity: 1;
                    }

                    .project-element{
                        &:nth-last-child(-n+2){
                            margin-bottom: 0;
                        }
                    }
                }

                &:not(.opened){
                    .project-element{
                    &:nth-last-child(-n+4){
                            margin-bottom: 0;
                        }
                    }
                }

                &.opening{
                    .project-view{
                        transition-delay: 0s, .4s;
                    }
                }

                &.changing{
                    .project-view{
                        opacity: 0 !important;
                    }
                }

                &.closing{
                    .project-view{
                        opacity: 0 !important;
                    }
                }

                .project-view{
                    width: 0;
                    overflow: hidden;
                    transition: width .6s, opacity .4s;
                    position: relative;
                    opacity: 0;

                    .project-view-close{
                        position: absolute;
                        right: 26px;
                        top: 0px;
                        transform: rotate(45deg);
                        z-index: 1;
                        font-size: 25px;
                        line-height: 30px;
                        cursor: pointer;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none; 
                        -khtml-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none; 
                    }
                }

                .project-list{
                    transition: .6s;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    
                    .project-element{
                        height: 250px;
                        width: 172px;
                        margin: 0 20px 20px 0;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        cursor: pointer;
                        overflow: hidden;
                        background: #000;
                        border-radius: 4px;
                        border: 1px solid #bbbbbb;

                        .project-name{
                            position: absolute;
                            color: #fff;
                            font-weight: 700;
                            opacity: 0;
                            width: 100%;
                            font-size: 18px;
                            word-break: break-all;
                            padding: 0 10px;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: .7s;
                            margin: 0;
                        }

                        .project-image{
                            display: block;
                            height: auto;
                            transition: .7s;
                            opacity: 1;

                            &.vertical{
                                height: 100%;
                            }

                            &.horizontal{
                                width: 100%;
                            }
                        }
                        
                        &.active,
                        &:hover{
                            .project-name{
                                opacity: 1;
                            }

                            .project-image{
                                opacity: 0.2;
                            } 
                        }
                    }

                    .vb-content{
                        padding: 0!important;
                        display: flex !important;
                        flex-wrap: wrap;
                        position: relative;
                        scroll-behavior: smooth;
                    }

                    .vb-content::-webkit-scrollbar{
                        width: 0px;
                    }
                }
            }

            .block-socials{
                transition-delay: .2s;
            }
        }

        .spacer{
            height: 50px;
            min-height: 50px !important;
        }
    }
</style>
