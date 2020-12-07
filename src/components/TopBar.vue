<template>
    <div class="top-bar-view">
        <div class="top-bar-first-logo">
            <div class="top-bar-first-logo-img"></div>
        </div>
        <div class="top-bar-nav">
            <div class="top-bar-nav-cell">
                <div>
                    <img alt="logo"
                         src="https://yt3.ggpht.com/a/AATXAJwMiXlgANDL0-fhnZJH6Tcp8dJ0b-7RhlBJg3PyIg=s68-c-k-c0xffffffff-no-rj-mo">
                </div>
                <div class="top-bar-nav-cell-word">
                    <div @click="routerHome">
                        基本简介1111
                    </div>
                    <div @click="routerAbout">
                        我的作品
                    </div>
                    <div @click="routerSpecial">
                        个人特长
                    </div>
                    <div @click="routerContact">
                        联系我吧
                    </div>
                </div>
                <div>
                    <img alt="logo"
                         src="https://yt3.ggpht.com/a/AATXAJwMiXlgANDL0-fhnZJH6Tcp8dJ0b-7RhlBJg3PyIg=s68-c-k-c0xffffffff-no-rj-mo">
                </div>
            </div>

        </div>

    </div>

</template>

<script>
    import { ref, watch } from "vue"
    import {useRouter} from "vue-router"
    export default {
        setup() {
            // 使用vue-router
            const router = useRouter()
            const routerHome = () => {
                router.push("/")
            }
            const routerAbout = () => {
                router.push("/about")
            }
            const routerSpecial = () => {
                router.push("/special")
            }
            const routerContact = () => {
                router.push("/contact")
            }
            watch(() => {
                console.log(router.currentRoute.value.name)
            },{

            })

            const title = ref("NBA LOL")
            return {
                routerHome,
                routerAbout,
                routerSpecial,
                routerContact,
                title
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-bar-view {
        .top-bar-first-logo {
            background: url("https://www.the-alley.hk/images/page/page-bg_02.jpg") 50% 50% no-repeat;
            background-size: cover;
            width: 100vw;
            height: 500px;
            .top-bar-first-logo-img {
                width: 300px;
                height: 200px;
                background: url("https://www.the-alley.hk/images/top-logo_w.png") 50% 50% no-repeat;
                background-size: contain;
            }
        }
        .top-bar-nav {
            cursor: pointer;
            background-color: #FFFFFF;
            width: 80%;
            @media(max-width: 765px) {
                width: 100%;
            }
            //  绝对定位元素设置水平居中
            position: absolute;
            left: 0;
            right: 0;
            top: 450px;
            margin: auto;
            border-radius: 10px;
            .top-bar-nav-cell {
                display: flex;
                justify-content: space-around;
                padding: 20px 0;
                //  flex垂直居中
                align-items: center;
                .top-bar-nav-cell-word {
                    display: flex;
                    color: #2b3d41;
                    font-size: 20px;
                    font-weight: 600;
                    div {
                        padding-bottom: 5px;
                        margin-right: 25px;
                        border-bottom: 3px #2b3d41 solid;
                        &:hover,&.active, &:focus {
                            color: #c9bc9c;
                            border-bottom: 3px #c9bc9c solid;
                        }
                    }

                }
            }

        }
    }

</style>