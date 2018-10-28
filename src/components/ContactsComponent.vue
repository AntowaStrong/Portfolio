<template>
  <section id="ContactsComponent" class="content-container">
        <div class="content">
            <p style="text-align: left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur commodo nunc, ut auctor tellus pulvinar vitae. Proin mattis sem vitae gravida ultrices.</p>
            <div class="block-contacts">
                <div class="block-contacts-details">
                    <p class="block-contancts-p email"><span></span>{{info.email}}</p>
                    <p class="block-contancts-p skype"><span></span>{{info.skype}}</p>
                    <p class="block-contancts-p phone"><span></span>{{info.phone}}</p>
                    <p class="block-contancts-p telegram"><span></span>@{{info.telegram}}</p>
                </div>

                <div class="block-contacts-form-container">
                    <form class="block-contacts-form">
                        <label class="form-label">Name</label>
                        <input v-model="name.value" type="text" name="name" class="form-element form-name" v-bind:class="nameClass">
                        <label class="form-label">Email</label>
                        <input v-model="email.value" type="email" name="email" class="form-element form-email" v-bind:class="emailClass">
                        <label class="form-label">Body</label>
                        <textarea v-model="body.value" name="body" class="form-element form-body" cols="30" rows="5" v-bind:class="bodyClass"></textarea>
                        <button v-on:click="send" class="form-action" v-bind:class="{active: valid}">submit</button>
                        
                    </form>
                    <div class="block-contacts-form-message" >
                        <span>icon</span>
                          your peace of shit has been sent 
                          <a href="#">ok</a>
                    </div>
                    <div class="block-contacts-form-fail">
                        <span>icon</span>
                        some error
                        <a href="#">back</a>
                    </div>
                </div>
            </div>

            <div class="block-bottom">
                <div class="block-socials">
                    <ul class="block-socials">
                        <li class="block-socials-li" v-if="info.socials && social.status" :key="social.name" v-for="social in info.socials">
                            <a :href="social.url">
                                <img :src="social.icon" :alt="social.name">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="block-documents" v-if="info.documents">
                    <p>Also you check this:</p>

                    <a class="block-documents-a" :href="document.link" :key="document.link" v-if="document.status" v-for="document in info.documents">
                        {{ document.title }}
                    </a>
                </div>
            </div>


        </div>
        <div class="spacer"></div>
  </section>
</template>

<script>
    export default {
        name: "ContactsComponent",
        props: ['info'],
        watch: {
            // name: function(){
            //     console.log('cagaaha');
            // }
        },
        computed: {
            // 0 - init
            // 1 - correct
            // 2 - error


            nameClass: function(){
                switch(this.name.state){
                    case 0:
                        return 'init';
                    case 1:
                        return 'correct';
                    case 2:
                        return 'error';                    
                }
            },
            emailClass: function(){
                switch(this.email.state){
                    case 0:
                        return 'init';
                    case 1:
                        return 'correct';
                    case 2:
                        return 'error';                    
                }
            },
            bodyClass: function(){
                switch(this.body.state){
                    case 0:
                        return 'init';
                    case 1:
                        return 'correct';
                    case 2:
                        return 'error';                    
                }
            },
            valid: function(){
                return this.name.state == 1 && this.email.state == 1 && this.body.state == 1 ? true : false;   
            }
        },

        mounted(){
            this.initEvents();
        },

        data(){
            return {
                    name: {
                        value: null,
                        state: 0
                    },
                    email: {
                        value: null,
                        state: 0
                    },
                    body: {
                        value: null,
                        state: 0
                    },
                
            }
        },
        methods: {
            initEvents(){
                var elements = this.$el.getElementsByClassName("form-element");

                for(var i = 0; i < elements.length; i++){
                    elements[i].addEventListener("focusout", this.focusOut);
                }



              //  t 
            },
            focusOut(e){
                    //extra check for validators
                    this[e.target.name].state = this[e.target.name].value != null && this[e.target.name].value != '' ? 1 : 2;

            },

            send(e){
                e.preventDefault();

                

            } 
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #ContactsComponent{
        height: 80%;

        .spacer{
            min-height: 100px !important;
        }

        .content{
            padding-bottom: 50px !important;
            justify-content: space-between;

            .block-documents{
                display: flex;
                flex-direction: column;
            }

            .block-contacts{
                width: 100%;
                display: flex;
                justify-content: space-between;
                
                .block-contacts-details{
                    width: 40%;
                }            


                .block-contacts-form-container{
                    width: 50%;

                    .block-contacts-form{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        .form-element{
                            width: 100%;
                            line-height: 24px;
                            box-sizing: border-box;
                            padding: 0 5px;
                            color: #2c3e50;
                            outline: none;
                            border-radius: 2px;
                            margin: 0 0 8px 0;
                            transition: border-color 0.2s ease;
                            vertical-align: middle;

                            &.form-body{
                                margin-bottom: 25px;
                            }

                            &.init{
                                border: 1px solid #e3e3e3;
                            }
                            &:focus{
                                border: 1px solid #66afe9;
                                // -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
                                // box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
                            }
                            &.correct{
                                border: 1px solid #2b542c;

                                // &:focus{
                                //     -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
                                //     box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
                                // }
                            }
                            &.error{
                                border: 1px solid #843534;

                                // &:focus{
                                //     -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
                                //     box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
                                // }
                            }
                        }

                        .form-action{
                            width: 100%;
                            line-height: 24px;
                            box-sizing: border-box;
                            padding: 0 5px;
                            border: none;
                            outline: none;
                            border-radius: 2px;
                            transition: all 0.2s ease;
                            vertical-align: middle;
                            background: #e3e3e3;
                            color: #fff;
                            font-family: "Avenir", Helvetica, Arial, sans-serif !important;
                            text-transform: uppercase;
                            padding: 2px 10px;
                            font-size: 12px;
                            font-weight: 700;
                            cursor: default;

                            &.active{
                                background: #83c585;
                                cursor: pointer;
                            }
                            
                        }

                        .form-label{
                            font-size: 14px;
                        }


                    }
                }

            }
        }

            .block-socials{
                .block-socials{
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    margin: 0;
                    padding: 0;
            
                    .block-socials-li{
                        display: block;
                        
                        >a{
                            display: block;
                            height: 24px;
                            width: 24px;

                            img{
                                height: 100%;
                                width: 100%;
                            }
                        }
                    }
                }
            }
     
                            .block-contacts{
                    .block-contancts-p{
                        display: flex;
                        >span{
                            height: 24px;
                            width: 24px;
                            display: block;
                            
                        }
                        &.email{
                            >span{
                                background: url(../assets/email.svg);
                                background-size: cover;
                            }
                        }
                        &.phone{
                            >span{
                                background: url(../assets/phone.svg);
                                background-size: cover;
                            }
                        }
                        &.telegram{
                            >span{
                                background: url(../assets/telegram.svg);
                                background-size: cover;
                            }
                        }
                        &.skype{
                            >span{
                                background: url(../assets/skype.svg);
                                background-size: cover;
                            }
                        }
                    }   
                } 

//83c585
    }
</style>
