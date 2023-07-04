<template>
<el-row>
    <el-col :span="24"><BMap /></el-col>
</el-row>
</template>
  
<style scoped>
.map-wrapper {
    display: flex;
    justify-content: space-between;
}
.map-wrapper .map-item {
    flex-basis: calc(100% - 7.5px);
}
</style>