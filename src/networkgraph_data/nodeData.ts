import { Nodes, Edges, Layouts } from "v-network-graph"
import * as vNG from "v-network-graph"

export interface Node extends vNG.Node {
    size: number,
    color: string
  }
  
export interface Edge extends vNG.Edge {
    color: string,
    animated?: boolean,
    dashed?: boolean
  }

const nodes: Record<string,Node> = {
  node1: { name: "节点A" , icon: "&#xe875" , size: 25 , color:"#dc143c" },
  node2: { name: "节点B" , icon: "&#xe875" , size: 25 , color:"#4466cc" },
  node3: { name: "合约A" , icon: "&#xe8b0" , size: 16 , color:"#ff6347" },
  node4: { name: "合约B" , icon: "&#xe8b0" , size: 16 , color:"#ff6347" },
  node5: { name: "合约C" , icon: "&#xe8b0" , size: 16 , color:"#4466cc" },
  node6: { name: "节点C" , icon: "&#xe875" , size: 25 , color:"#4466cc" },
  node7: { name: "攻击者" , icon: "&#xe799" , size: 16 , color:"#ff0000" },
}

const edges: Record<string,Edge> = {
  edge1: { source: "node2", target: "node1" ,color:"#4466cc"},
  edge2: { source: "node3", target: "node2" ,color:"#4466cc"},
  edge3: { source: "node4", target: "node3" ,color:"#fce205",dashed:true,animated:true},
  edge4: { source: "node7", target: "node4" ,color:"#fce205",dashed:true,animated:true},
  edge5: { source: "node4", target: "node5" ,color:"#4466cc"},
  edge6: { source: "node4", target: "node2" ,color:"#4466cc"},
  edge7: { source: "node5", target: "node6" ,color:"#4466cc"},
  edge8: { source: "node1", target: "node6" ,color:"#4466cc"},
  edge9: { source: "node3", target: "node5" ,color:"#4466cc"},
  edge10: { source: "node1", target: "node5" ,color:"#4466cc"},
  edge11: { source: "node3", target: "node1" ,color:"#fce205",dashed:true,animated:true},
}

const layouts: Layouts = {
    "nodes": {
      "node1": {
        "x": -59,
        "y": -134
      },
      "node2": {
        "x": 75,
        "y": 29
      },
      "node3": {
        "x": 6,
        "y": 232
      },
      "node4": {
        "x": -270,
        "y": 277
      },
      "node5": {
        "x": -361,
        "y": 69
      },
      "node6": {
        "x": -276,
        "y": -114
      },
      "node7": {
        "x":-105,
        "y":407
        }
    }
}

export default {
  nodes,
  edges,
  layouts,
}