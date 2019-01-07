<template>
<div id="app">
  <div class="container">
    <SocialsComponent :socials="info.socials" :item="activeItem"/>
    <MenuComponent :items="menu" v-on:switcher="menuSwitch" :item="activeItem"/>
    <div class="pages">
      <InfoComponent :info="info" :item="activeItem"/>
      <ProjectsComponent :projects="projects" :info="info" :item="activeItem"/>
    </div>
  </div>
  <div class="background">
    <div class="background-filter"></div>
    <img class="background-image" :src="background">
  </div>
</div>
</template>

<script>
import info from "./data/info.js";
import projects from "./data/projects.js";
import config from "./config/config.js";

import InfoComponent from "./components/InfoComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import SocialsComponent from "./components/SocialsComponent.vue";


export default {
  name: "app",
  components: {
    InfoComponent,
    ProjectsComponent,
    MenuComponent,
    SocialsComponent,
  },
  created(){
    this.loadInfo();
    this.loadConfig();
    this.loadProjects();
    
  },
  watch: {
    activeItem(item){
      this.container.style.top = this.container.clientHeight * item.position * -1 + 'px';
    } 
  },
  mounted(){
    this.initActiveItem();
    this.initContainer();
  },
  data: function(){
    return {
      activeItem: null,
      container: null,
      scroll: {
        time: 0,
        i: 0,
        times: [

        ]
      },
      menu: [],
      background: null,
      info: {
        logo: null,
        name: null,
        surname: null,
        nickname: null,
        description: null,
        skills: null,
        position: null,
        email: null,
        skype: null,
        telegram: null,
        documents: null,
        socials: null
      },
      projects: [],
    };
  },
  methods: {
    initContainer(){
      this.container = this.$el.getElementsByClassName('pages')[0];
    },
    initActiveItem(){
      if(this.menu.length != 0){
        this.menuSwitch(this.menu[0]);
      }
    },
    initMenuItems(items){
      if(items.length != 0){
          for(var i = 0; i < items.length; i++){
            items[i].prev = items[i - 1] == undefined ? null : items[i - 1];
            items[i].next = items[i + 1] == undefined ? null : items[i + 1];
            this.menu.push(items[i]);
          }
      }        
    },
    loadProjects: function(){
        for(var i = 0; i < projects.length; i++){
          this.projects.push(projects[i]);
        }
    },
    loadInfo: function(){
        for(var prop in info){
          if(this.info[prop] !== undefined){
            this.info[prop] = info[prop];
          }
        }
    },
    loadConfig(){
        for(var prop in config){
          if(this[prop] !== undefined){
            switch (prop){
              case "menu":
                this.initMenuItems(config[prop]);
                break;
              default:
                this[prop] = config[prop];
            } 
          }
        }
    },
    menuSwitch: function(item){
      if(!item.active){
        if(this.activeItem !== null){
          this.activeItem.active = false;
        }
        item.active = true;
        this.activeItem = item;
      }
    }
  }
};
</script>

<style lang="scss">
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
  background-size: cover;
}

*{
  box-sizing: border-box;
}

#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, .6);

  .background{
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .background-filter{
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, .2);
      box-shadow: inset 0 0 300px 60px rgba(0,0,0,1);
    }
    
    .background-image{
      display: block;
    }
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1048px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;

    .pages{
      width: 100%;
      height: 100%;
      top: 0;
      position: absolute;
      z-index: 1;
      transition: top 1s;
      transition-delay: .4s;
      
      .page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .content{
          background-color: #fff; 
          width: 100%;
          padding: 50px 140px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .spacer{
          width: 100%;
          min-height: 150px;
        }

        &:first-child{
          .content{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }

        &:last-child{
          .content{
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
      
        &.projects-page{
          .block-projects{
            .projects{
              .vb-dragger {
                right: 0px;
                width: 6px;
                background: #f5f5f5;
                border-radius: 2px;
                opacity: 1;
              }
            }
            
            &.opening,
            &.closing{
              .projects{
                .vb-dragger{
                  opacity: 0;
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