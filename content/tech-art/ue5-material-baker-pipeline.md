---
title: "UE5 材质自动化烘焙与资产优化管线 (AutoBaker CLI)"
description: "面向大型开放世界的 Python / C++ 材质管线插件，支持多材质自动合并通道烘焙、LOD 跨层降采样与DrawCall极限压降。"
category: "pipeline"
tags: ["TA工具", "Python", "UE5 C++", "自动化管线", "性能优化"]
order: 3
date: "2026-11-02"
featured: true
draft: false
---

### 解决痛点与管线指标

* **问题背景**：复杂模型资产拥有 10+ 独立材质球，导致同屏渲染时 DrawCall 爆炸。
* **管线实现**：
  - 自动扫描网格体材质依赖，打包合并 BaseColor、ORM（Occlusion/Roughness/Metallic）复合通道；
  - 针对距离视线较远的 LOD 阶段执行智能纹理分辨率降采样；
  - 一键批处理 500+ 模型资产，平均降低渲染批次 64%，显存占用下降 42%。
