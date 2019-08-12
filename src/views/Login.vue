<template>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.passWord"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                labelPosition: 'left',
                formLabelAlign: {
                    name: 'admin',
                    passWord: 'admin'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                },
                showLogin: false
            };
        },
        mounted() {
            this.showLogin = true;
        },
        methods: {
            submitForm() {
                this.$store.commit('LOGIN', 'admin')
                this.$router.push({path: '/'})
                sessionStorage.setItem('user', 'admin')
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
