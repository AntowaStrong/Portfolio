<template>
  <div id="MenuComponent" v-bind:class="{ offset: offset }" >
      <ul class="block-menu">
          <li class="block-menu-element" v-bind:class="{ active: item.active}" :key="item.position" v-on:click="$emit('switcher', item)" v-if="items" v-for="item in items">
              {{ item.name }}
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "MenuComponent",
        props: ['items', 'item'],
        watch:{
            item: function(item){
                if(item.position == 0){
                    this.offset = true
                }else{
                    this.offset = false
                }
            }
        },
        data(){
            return{
                offset: true,       
            }
        }
    
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #MenuComponent{
        z-index: 2;
        top: 0;
        margin: 30px 0 0 0;
        position: absolute;
        right: 30px;
        transition: top .50s;

        &.offset{
            top: 192px;
        }

        .block-menu{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            list-style: none;
            padding: 0;
            margin: 0;

            .block-menu-element{
                display: block;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 24px;
                color: #83909e;
                margin: 0 0 5px 0;
                cursor: pointer;
                
                &.active{
                    cursor: default;
                    color: #2c3e50;
                }

                &:focus,
                &:hover{
                    color: #2c3e50;
                }
            }
        }
    }
</style>
