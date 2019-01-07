<template>
<div id="ProjectComponent">
    <div class="content">
        <div class="content-inner">

            <div class="block-top">
                <div class="block-image">
                    <img :src="project.image" :alt="project.name">
                </div>
                <p class="block-title">{{project.name}}</p>
                <p class="block-description">{{project.description}}</p>
            </div>

            <div class="block-responsibilities">
                <p class="block-responsibilities-title">Обязанности:</p>
                <ul class="block-responsibilities-list">
                    <li class="block-responsibilities-element" v-for="(responsibility, index) in project.responsibilities" v-bind:key="index" v-html="responsibility"></li>
                </ul>
            </div>

            <div class="block-tools" v-if="project.tools">
                <p class="block-tools-list">
                    Технологии:&nbsp;
                    <span class="block-tools-element" v-for="(tool, index) in project.tools" v-bind:key="index">
                        <b>{{tool}}</b>
                        <span v-if="project.tools.length == index + 1">.</span>
                        <span v-else >,&nbsp;</span>
                    </span>
                </p>
            </div>

            <div class="block-source" v-if="project.source">
                <p class="block-source-p">Ссилка: <a class="block-source-a" v-bind:href="project.source">{{project.source}}</a></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "ProjectComponent",
        props: ['project'],
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #ProjectComponent{
        height: 100%;
        width: 100%;
        padding: 0 20px 0 0;
        .content{
            padding: 15px !important;
            background: #f9f9f9 !important;
            height: 100%;
            width: 100%;
            justify-content: flex-start;
            border-radius: 4px;

            .content-inner{
                overflow: hidden;
                overflow-y: scroll;

                &::-webkit-scrollbar{
                    display: none;
                }

                .block-top{
                    width: 100%;

                    .block-image{
                        width: 30%;
                        float: left;
                        padding: 0 15px 15px 0;
                        overflow: hidden;

                        img{
                            width: 100%;
                            display: block;
                            border-radius: 4px;
                        }
                    }

                    .block-title{
                        float: left;
                        width: 70%;
                        font-weight: 700;
                        margin: 0 0 15px;
                    }

                    .block-description{
                        font-size: 14px;
                        text-align: left;
                    }

                    &:after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                }

                .block-tools{
                    font-size: 14px;
                    text-align: left;
                    margin: 0 0 25px 0;

                    .block-tools-list{
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        flex-wrap: wrap;
                        display: flex;

                        .block-tools-element{
                        
                        }
                    }
                }
                
                .block-responsibilities{
                    font-size: 14px;
                    text-align: left;
                    width: 100%;
                    margin: 0 0 30px 0;

                    .block-responsibilities-title{
                        margin: 0 0 5px 0;
                        font-weight: 600;
                    }
                    
                    .block-responsibilities-list{
                        margin: 0;
                        padding: 0 0 0 16px;
                    }

                }

                .block-source{
                    font-size: 14px;
                    text-align: left;
                    width: 100%;

                    .block-source-p{
                        margin: 0;
                    }
                }
            }
        }
    }
</style>
