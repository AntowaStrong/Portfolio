<template>
  <div id="app">
    <div class="container">
      <SocialsComponent :socials="info.socials" :item="activeItem"/>
      <MenuComponent :items="menu" v-on:switcher="menuSwitch" :item="activeItem"/>
      <div class="sub-container">
        <InfoComponent :info="info"/>
        <ProjectsComponent :projects="projects"/>
        <ContactsComponent :info="info"/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoComponent from "./components/InfoComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import ContactsComponent from "./components/ContactsComponent.vue";
import SocialsComponent from "./components/SocialsComponent.vue";

import info from "./data/info.js";
import config from "./config/config.js";

export default {
  name: "app",
  components: {
    InfoComponent,
    ProjectsComponent,
    MenuComponent,
    ContactsComponent,
    SocialsComponent
  },
  created(){
    this.looadInfo();
  },
  watch: {
    activeItem(item){
      this.container.style.top = this.container.clientHeight * item.position * -1 + 'px';
    } 
  },
  mounted(){
    this.menuSwitch(this.menu[0]);
    this.container = this.$el.getElementsByClassName('sub-container')[0];
  },
  data: function(){
    return {
      activeItem: null,
      container: null,
      menu: [
        {position: 0, active: false, name: 'Info', component: InfoComponent},
        {position: 1, active: false, name: 'Projects/Works', component: ProjectsComponent},
        {position: 2, active: false, name: 'Contacts', component: ContactsComponent}
      ],
      backgrounds: [
        
      ],
      info: {
        logo: null,
        name: null,
        surname: null,
        nickname: null,
        description: null,
        email: null,
        phone: null,
        skype: null,
        telegram: null,
        documents: null,
        socials: null
      },
      projects: [

      ],
    };
  },
  methods: {
      looadInfo: function(){
        for(var prop in info){
          if(this.info[prop] !== undefined){
            this.info[prop] = info[prop];
          }
        };
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
    background: url('./assets/background-four.jpg') 100% 100% no-repeat;
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

    .container{
      max-width: 1100px;
      width: 100%;
      height: 100%;
      position: relative;

      .sub-container{
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
        z-index: 1;
        transition: top .7s;
        
        .content-container{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .content{
            background-color: #fff; 
            width: 100%;
            padding: 155px 100px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .spacer{
              width: 100%;
              min-height: 192px;
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

        }
      }
    }
  }
</style>