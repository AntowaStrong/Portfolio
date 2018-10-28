<template>
  <section id="InfoComponent" class="content-container">
    <div class="spacer"></div>
    <div class="content">

            <div class="block-image">
                <img v-bind:src="info.logo">
            </div>
            <div class="block-name">
                <p class="block-name-p">{{info.name}} <b class="block-name-b">"{{info.nickname | capitalize }}"</b> {{info.surname}}</p>
            </div>
            <div class="inner-content">
                <div class="block-description">
                    <p class="block-description-p">{{info.description}}</p>
                </div>
                <div class="block-expirence">
                    <p class="block-expirience-p">I am work with:</p>
                    <ol class="block-expirience-ol">
                        <li>#Drupal 7/8</li>
                        <li>#PHP</li>
                        <li>#Wordpress</li>
                        <li>#Yii2</li>
                        <li>#Sass/Less</li>
                        <li>#Terminal/Composer/Gulp/Npm/Yarn/Git/SSH</li>
                        <li>#Node.js</li>
                        <li>#CSS3</li>
                        <li>#HTML5</li>
                        <li>#JavaScript</li>
                        <li>#Vue.js</li>
                        <li>#MySQl</li>
                        <li>#jQuery</li>
                        <li>#Bootstrap</li>
                        <li>#SQLite</li>
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
            padding-bottom: 80px !important;
            padding-top: 100px !important;
            position: relative;
        
            .block-image{
                top: -90px;
                position: absolute;
                height: 180px;
                width: 180px;
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
                margin: 0 0 30px 0;
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
                background: #f5f5f5;
                border-radius: 4px;
                padding: 25px 15px;


                .block-description{
                    width: 70%;

                    .block-description-p{
                        //font-size: 14px;
                        margin: 0;
                    }
                }
            }

        }
        
    }
</style>
