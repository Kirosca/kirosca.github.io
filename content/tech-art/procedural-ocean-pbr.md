---
title: "次世代程序化海洋与次表面散射 (Procedural Ocean & SSS)"
description: "结合 Gerstner 波浪叠加算法、次表面散射 (SSS) 透光模拟与水下景深折射的实时材质系统。"
category: "material"
tags: ["PBR材质", "次表面散射", "Gerstner Wave", "水体渲染"]
shaderType: "ocean"
order: 2
date: "2026-10-28"
featured: true
draft: false
---

### 核心管线算法

1. **多重 Gerstner 波矢量叠加**：计算顶点真实位移与波峰挤压尖锐度（Trochoidal wave），还原真实海洋波浪形态。
2. **次表面散射伪透光计算**：基于厚度图（Thickness map）与太阳入射角反向点积，模拟阳光穿透浪尖时的剔透翡翠绿感。
3. **PBR 材质通道与法线混合**：利用双层切线空间法线动态扰动计算微小水波，输出粗糙度与微表面反射率。
