<script setup lang="ts">
import { reactive, ref, watch , computed } from "vue"
import * as vNG from "v-network-graph"
import { Node , Edge } from '../networkgraph_data/nodeData'
import { fetchData } from '../api';
import {
  ForceLayout,
  ForceNodeDatum,
  ForceEdgeDatum,
} from "v-network-graph/lib/force-layout"

import data from '../networkgraph_data/nodeData'
const graph = ref<vNG.Instance>()


const initialConfigs = vNG.defineConfigs<Node,Edge>({
  node: {
    selectable: true,
    normal: {
      type: "circle",
      radius: node => node.size,
      // for type is "rect" -->
      width: 32,
      height: 32,
      borderRadius: 4,
      // <-- for type is "rect"
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: node => node.color,
    },
    hover: {
      type: "circle",
      radius: node => node.size,
      // for type is "rect" -->
      width: 32,
      height: 32,
      borderRadius: 4,
      // <-- for type is "rect"
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#dd2288",
    },
    selected: {
      type: "circle",
      radius: node => node.size,
      // for type is "rect" -->
      width: 32,
      height: 32,
      borderRadius: 4,
      // <-- for type is "rect"
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#4466cc",
    },
    label: {
      visible: true,
      fontFamily: undefined,
      fontSize: 11,
      lineHeight: 1.1,
      color: "#000000",
      margin: 4,
      direction: "south",
      background: {
        visible: false,
        color: "#ffffff",
        padding: {
          vertical: 1,
          horizontal: 4,
        },
        borderRadius: 2,
      },
    },
    focusring: {
      visible: true,
      width: 4,
      padding: 3,
      color: "#eebb00",
      dasharray: "0",
    },
  },
  edge: {
    selectable: true,
    normal: {
      width: 3,
      color: edge => edge.color,
      dasharray: edge =>(edge.dashed ? '4' : '0'),
      linecap: "butt",
      animate: edge => (edge.animated ? true : false),
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#3355bb",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    selected: {
      width: 3,
      color: "#dd8800",
      dasharray: "6",
      linecap: "round",
      animate: false,
      animationSpeed: 50,
    },
    gap: 3,
    type: "straight",
    summarize: true,
    summarized: {
      label: {
        fontSize: 10,
        color: "#4466cc",
      },
      shape: {
        type: "rect",
        radius: 6, // for type is "circle"
        width: 12,
        height: 12,
        borderRadius: 3,
        color: "#ffffff",
        strokeWidth: 1,
        strokeColor: "#4466cc",
        strokeDasharray: "0",
      },
      stroke: {
        width: 5,
        color: "#4466cc",
        dasharray: "0",
        linecap: "butt",
        animate: false,
        animationSpeed: 50,
      },
    },
  },
})
const configs = reactive(initialConfigs)
const layers = {
  grid : "root",
}

const url = 'grid-back.svg'

function onLoadImage() {
  graph.value?.fitToContents()
}

let textarea = ref('#include<stdio.h>\nint main()\n \{\n int a = 0;\n\}');

  const getData = (url : string)=> {
        fetchData(url).then((res)=>{
            textarea.value = res.data;
        })
    };

    getData("/alarm-log.txt");
</script>

<template>
  <div class="container">
    <div class="graph-panel">
      <!-- 主面板内容 -->
      <v-network-graph
        :nodes="data.nodes"
        :edges="data.edges"
        :layers="layers"
        :configs="configs"
        v-model:layouts="data.layouts"
      >
        <template #grid>
          <image
        :href="url"
        x="0"
        y="0"
        width="100%"
        @load="onLoadImage"
      />
        </template>

        <defs>
      <!-- Cannot use <style> directly due to restrictions of Vue. -->
      <component is="style">
        @font-face { font-family: 'Material Icons'; font-style: normal; font-weight:
        400; src:
        url(https://fonts.gstatic.com/s/materialicons/v97/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)
        format('woff2'); }
      </component>
    </defs>

    <!-- Replace the node component -->
    <template #override-node="{ nodeId, scale, config, ...slotProps }">
      <circle :r="config.radius * scale" :fill="config.color" v-bind="slotProps" />
      <!-- Use v-html to interpret escape sequences for icon characters. -->
      <text
        font-family="Material Icons"
        :font-size="22 * scale"
        fill="#ffffff"
        text-anchor="middle"
        dominant-baseline="central"
        style="pointer-events: none"
        v-html="data.nodes[nodeId].icon"
      />
    </template>
      </v-network-graph>
    </div>
    <div class="right-bar">
      <!-- 侧边栏内容 -->
      <div class="info-discription">
        <el-descriptions title="威胁模型信息" column="1" border=true>
          <el-descriptions-item label="对象名称">合约A</el-descriptions-item>
          <el-descriptions-item label="对象类型">链上智能合约</el-descriptions-item>
          <el-descriptions-item label="被攻击时间">2022-8-20 02:23</el-descriptions-item>
          <el-descriptions-item label="风险类型">
            <el-tag size="small">高风险</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="链上地址">
            0x7358a5d5c3afc675b3c53c
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <h4>告警日志</h4>
      <div class="log-textarea">
        <el-input
        v-model="textarea"
        :rows="30"
        type="textarea"
        placeholder="Please input"
        :readonly="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  height: 100%;
}

.graph-panel {
  flex: 3; /* 占据 75% 的宽度 */
  background-color: lightgray;
}

.right-bar {
  flex: 1; /* 占据 25% 的宽度 */
  padding: 8px;
}

.grid-background {
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23BABEFF'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23BABEFF'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(25.3) translate(-960.47 -720.36)'%3E%3Cg fill='%23BABEFF'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>