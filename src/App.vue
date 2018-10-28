<template>
  <div id="app">
    <div class="container">
      <ArrowComponent v-if="activeItem != null" :active="activeItem" :direction="1"  v-on:switcher="menuSwitch"/>
      <SocialsComponent :socials="info.socials" :item="activeItem"/>
      <MenuComponent :items="menu" v-on:switcher="menuSwitch" :item="activeItem"/>
      <div class="sub-container">
        <InfoComponent :info="info"/>
        <ProjectsComponent :projects="projects"/>
        <ContactsComponent :info="info"/>
      </div>
      <ArrowComponent v-if="activeItem != null" :active="activeItem" :direction="0"  v-on:switcher="menuSwitch"/>
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
import ArrowComponent from "./components/ArrowComponent.vue"; 

import info from "./data/info.js";
import config from "./config/config.js";

export default {
  name: "app",
  components: {
    InfoComponent,
    ProjectsComponent,
    MenuComponent,
    ContactsComponent,
    SocialsComponent,
    ArrowComponent
  },
  created(){
    this.loadInfo();
    this.loadConfig();
    
  },
  watch: {
    activeItem(item){
      this.container.style.top = this.container.clientHeight * item.position * -1 + 'px';
    } 
  },
  mounted(){
      //     var a = new Date().getTime()


      // 50000 - 40000

      // console.log(new Date().getTime() - a)


    this.initActiveItem();
    this.initContainer();
    window.addEventListener('wheel', this.scrollHandler);



    // window
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
      backgrounds: [],
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
      projects: [],
    };
  },
  methods: {
    initContainer(){
      this.container = this.$el.getElementsByClassName('sub-container')[0];
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
    loadInfo: function(){
      for(var prop in info){
        if(this.info[prop] !== undefined){
          this.info[prop] = info[prop];
        }
      };
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
    },
    scrollHandler(a){



      // this.scroll.times.push(a.timeStamp);

      // console.log(this.scroll.i + ": " + a.timeStamp)
      // this.scroll.i++;



      // if(this.scroll.time + 1000 < a.timeStamp ){
      //   console.log(this.scroll.time + ' ' + a.timeStamp)
      //   //????????? whats wronk twih thath /|\
      //   //
      //   if(a.deltaY > 10){
      //     console.log('up');
      //   }else if(a.deltaY < - 10){
      //     console.log('down')
      //   }



        //console.log(deltaY );
     // }

      //this.scroll.time = a.timeStamp
      
      
      
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
    background: url('./assets/background-seven.jpg') 100% 100% no-repeat;
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
      display: flex;
      flex-direction: column;
      align-items: center;
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
        transition: top 1s;
        
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