<template>
<div id="ProjectComponent" class="project">
    <div class="content">
        <div class="content-inner">
            <div class="project-header">
                <div class="project-image">
                    <img :src="project.image" :alt="project.name">
                </div>
                <p class="project-title">{{project.name}}</p>
                <p class="project-description">{{project.description}}</p>
            </div>

            <div class="project-responsibilities">
                <p class="title">Обязанности:</p>
                <ul class="list">
                    <li class="item" v-for="(responsibility, index) in project.responsibilities" v-bind:key="index" v-html="responsibility"></li>
                </ul>
            </div>

            <div class="project-tools" v-if="project.tools">
                <p class="tools">
                    Технологии:&nbsp;
                    <span class="tools-item" v-for="(tool, index) in project.tools" v-bind:key="index">
                        <b>{{tool}}</b>
                        <span v-if="project.tools.length == index + 1">.</span>
                        <span v-else >,&nbsp;</span>
                    </span>
                </p>
            </div>

            <div class="project-source" v-if="project.source">
                <p class="project-link">Ссилка: <a v-bind:href="project.source">{{project.source}}</a></p>
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

<style scoped lang="scss">
.project{
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

            .project-header{
                width: 100%;

                .project-image{
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

                .project-title{
                    float: left;
                    text-align: center;
                    font-size: 16px;
                    width: 70%;
                    font-weight: 700;
                    margin: 0 0 15px;
                }

                .project-description{
                    margin: 1em 0;
                }

                &:after {
                    content: "";
                    display: table;
                    clear: both;
                }
            }

            .project-tools{
                margin: 0 0 25px 0;

                .tools{
                    list-style: none;
                    flex-wrap: wrap;
                    display: flex;
                }
            }
            
            .project-responsibilities{
                width: 100%;
                margin: 0 0 30px 0;
            }

            .project-source{
                width: 100%;
            }
        }
    }
}
</style>
