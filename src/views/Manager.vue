<template>
    <el-container class="container">
        <el-header class="header">
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">后台管理系统</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple el-icon-user-solid">
                        {{this.$store.getters.getUser}}
                        <el-button type="primary" @click="logout">退出登录</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container class="content">
            <el-aside width="200px" class="slide-bar">
                <el-menu
                        default-active="/Manager/Home"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        :router=true
                        size="medium"
                        active-text-color="#ffd04b">
                    <el-menu-item index="/Manager/Home">
                        <i class="el-icon-menu"></i>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/OrderManager">
                        <i class="el-icon-user"></i>
                        <span slot="title">预定管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/NewOrder">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">开台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/PayMoney">
                        <i class="el-icon-s-claim"></i>
                        <span slot="title">收银结账</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">开台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-claim"></i>
                        <span slot="title">收银结账</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">开台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-claim"></i>
                        <span slot="title">收银结账</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">开台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-claim"></i>
                        <span slot="title">收银结账</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">开台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/Manager/">
                        <i class="el-icon-s-claim"></i>
                        <span slot="title">收银结账</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Manager",
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            logout(){
                sessionStorage.removeItem('user')
                this.$router.push('/Login')
            }
        },
        data() {
            return {
                user:''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        text-align: center;

        .header {
            background: rgb(84, 92, 100);
            height: 100%;
            color: #ffffff;
            line-height: 60px;
            font-size: 22px;
            font-weight: 700;
        }

        .content {
            .slide-bar {
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
            }

            .mainContent {
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
            }
        }
    }
</style>
