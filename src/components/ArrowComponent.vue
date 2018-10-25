<template>
  <div id="ArrowComponent" v-if="arrow.active" :class="arrow.class">
      <a href="#" v-on:click="$emit('switcher', arrow.item)">
      </a>
  </div>
</template>

<script>
    export default {
        name: "ArrowComponent",
        props: ['active', 'direction'],
        computed: {
            arrow: function(){
                var item = this.direction > 0 ? this.active.prev : this.active.next;

                return {
                    class: this.direction > 0 ? 'top' : 'bottom',
                    name: this.direction > 0 ? 'to top' : 'to bottom',
                    active: item == null ? false : true, 
                    item: item,
                }
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #ArrowComponent{
        position: absolute;
        z-index: 2;

        a{
            transition:all 0.3s;
            -webkit-transition:all 0.3s;
            height:60px;
            width:60px;
            border-radius:100%;
            position: relative;
            display: block;

            &:before,
            &::after{
                content:'';
                position:absolute;
                width:18px;
                border:2px solid #2c3e50;
                transition:all 0.3s;
                -webkit-transition:all 0.3s;
            }

            &:before{
                transform:rotateZ(45deg);
                -webkit-transform:rotateZ(45deg);
            }

            &:after{
                transform:rotateZ(-45deg);
                -webkit-transform:rotateZ(-45deg);
            }

            &:hover {
                cursor:pointer;
            }

            &:hover:before {
                left:13px;
            }

            &:hover:after {
                left:26px;
            }
        }

        &.top{
            top: 15px;
            a{
                &:before,
                &::after{
                    top: 40px;
                }

                &:before{
                    left:22px;
                }

                &:after{
                    left:9px;
                }

                &:hover:before,
                &:hover:after {
                    top:26px;
                }
            }
        }

        &.bottom{
            bottom: 15px;

            a{
                &:before,
                &::after{
                    top: 26px;
                }
                &:before{
                    left:9px;
                }

                &:after{
                    left:22px;
                }
                
                &:hover:before,
                &:hover:after {
                    top:40px;
                }
            } 
        }
   







    }
</style>
