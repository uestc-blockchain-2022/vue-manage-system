<template>
    <div>
      <BMap
        :center="{
          lng: 116.308301,
          lat: 40.050566
        }"
        :zoom="16"
        :plugins="['TrackAnimation']"
        ref="map"
        @pluginReady="handleInitd"
      />
    </div>
    <el-row >
        <el-col :span="24">
            <el-timeline>
                        <el-timeline-item timestamp="06-28 12:44" placement="top">
                            <el-card>
                                <h4>已下单</h4>
                                <p>商品已经下单</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="06-28 14:04" placement="top">
                            <el-card>
                                <h4>已发货</h4>
                                <p>包裹正在等待揽收</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="06-28 14:35" placement="top">
                            <el-card>
                                <h4>已揽件</h4>
                                <p>[拉萨市]【西藏拉萨瑶遥锦公司】已发往【西藏拉萨转运中心】</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="06-28 14:35" placement="top">
                            <el-card>
                                <h4>运输中</h4>
                                <p>快件离开【西藏拉萨转运公司】已发往【青海西宁转运中心】</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="06-28 14:35" placement="top">
                            <el-card>
                                <h4>运输中</h4>
                                <p>快件已到达【青海西宁转运中心】</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="06-28 14:35" placement="top">
                            <el-card>
                                <h4>待签收</h4>
                                <p>快件已到达青海西宁市和平路116厂，等待收件人签收快递，如有疑问请联系19912215665</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
        </el-col>
    </el-row>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { useTrackAnimation } from 'vue3-baidu-map-gl'
    const map = ref(null)
    const { setPath, start, cancel, stop, proceed, status } = useTrackAnimation(map, {
      duration: 10000,
      delay: 0
    })
    const path = [
      {
        lng: 116.297611,
        lat: 40.047363
      },
      {
        lng: 116.302839,
        lat: 40.048219
      },
      {
        lng: 116.308301,
        lat: 40.050566
      },
      {
        lng: 116.305732,
        lat: 40.054957
      },
      {
        lng: 116.304754,
        lat: 40.057953
      },
      {
        lng: 116.306487,
        lat: 40.058312
      },
      {
        lng: 116.307223,
        lat: 40.056379
      }
    ]
    function handleInitd() {
      setPath(path)
      start()
    }
  </script>
  
  <style>
    .state {
      margin-top: 15px;
    }
    .state span {
      margin-right: 25px;
    }
  </style>