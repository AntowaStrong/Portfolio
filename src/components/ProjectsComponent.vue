<template>
  <section id="ProjectsComponent" class="content-container">
    <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur commodo nunc, ut auctor tellus pulvinar vitae. Proin mattis sem vitae gravida ultrices.

</p>
        <div class="content-inner">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
                        <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
        </div>

<!--
Project name:
Caradan Drive Systems
Involvement duration:
Apr 2016 - Aug 2016 (5 months) 
Project team size:
2 developers
Project description: 
Online store of  trusk parts.
Tools and technologies:
PHP/Drupal, Serch API, Drupal Commerce, MySQL, PHPExcel, JS, AJAX, Bootstrap, CSS, SASS, Compass




Project name:
SHN
Involvement duration: 
August 2016 - September 2016 (1 month)
Project role:
PHP/Drupal developer
Project description: 
Website of the newspaper.
Tools and technologies:
Drupal, CSS3,  HTML5, jQuery, SASS




Project name:
Infotysa
Involvement duration: 
Sep 2016 – Dec 2016 (4 months)
Project role:
PHP/Drupal developer
Project team size:
3 developers
Project description: 
Website by placing advertisements.
Tools and technologies:
PHP, JS, Drupal, MySQL, HTML, CSS




Project name:
VitoShina
Involvement duration: 
Oct 2016 – Nov 2016 (1 month)
Project role:
Lead developer 
Project team size:
2 developers
Project description: 
Website tire sale.
Tools and technologies:
PHP, JS, Drupal, MySQL




Project name:
Grasonnier
Involvement duration: 
Jan 2017  (1 month)
Project role:
Front-end developer
Project team size:
2 developers
Project description:
Website brand clothing.
Tools and technologies:
WordPress, CSS, HTML,JS




Project name:
Ferret
Involvement duration:
Mar 2017 – Apr 2017 (2 months)
Project role:
PHP/Drupal developer
Project team size:
2 developers
Project description:
Website of household goods.
Tools and technologies:
Drupal, PHP, CSS, HTML, JS, MySQL, Git-->

    </div>
  </section>
</template>

<script>
    export default {
        name: "ProjectsComponent",
        props: ['projects'],
        data(){
            return {
                
            };
        },
//         mounted(){
//             //console.log(this)

//             this.$el.style.height = (window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight) + 'px';


//             //var height = 
//         }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #ProjectsComponent{
        .content-inner{
            display: flex;
            flex-wrap: wrap;
                height: 100%;
                overflow-y: scroll;
    width: 100%;

            .element{
                height: 250px;
                width: 20%;
                display: flex;
                margin: 15px 2.5%;
                background: #f5f5f5;
                border-radius: 4px;
            }
        }
    }
    
</style>
