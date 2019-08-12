<template>
    <div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="javascript:void(0)" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="houseId"
                    label="预定房间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="orderId"
                    label="台号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="用户">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="预定人数">
            </el-table-column>
            <el-table-column
                    prop="timeLine"
                    label="预定时段">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="预计到达时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "OrderManager",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                tableData: [{
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }, {
                    houseId: 111,
                    orderId: 222,
                    time: '2016-05-02',
                    user: '王小虎',
                    timeLine: '晚上',
                    number: 10
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
