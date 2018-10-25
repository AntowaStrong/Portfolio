<template>
  <section id="ContactsComponent" class="content-container">
        <div class="content">
            <div class="block-contancts">
                <p class="block-contancts-p email"><span></span>{{info.email}}</p>
                <p class="block-contancts-p skype"><span></span>{{info.skype}}</p>
                <p class="block-contancts-p phone"><span></span>{{info.phone}}</p>
                <p class="block-contancts-p telegram"><span></span>@{{info.telegram}}</p>
            </div>
            <div class="block-socials">
                <ul class="block-socials">
                    <li class="block-socials-li" v-if="info.socials && social.status" :key="social.name" v-for="social in info.socials">
                        <a :href="social.url">
                            <img :src="social.icon" :alt="social.name">
                        </a>
                    </li>
                </ul>
            </div>

            <div class="block-documents">
                <a class="block-documents-a" :href="document.link" :key="document.link" v-if="info.documents && document.status" v-for="document in info.documents">
                    {{ document.title }}
                </a>
            </div>
        </div>
        <div class="spacer"></div>
  </section>
</template>

<script>
    export default {
        name: "ContactsComponent",
        props: ['info'],
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #ContactsComponent{
        height: 80%;
            .block-socials{
                .block-socials{
                    display: flex;
                    justify-content: center;
                    list-style: none;
            
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
     
    }
</style>
