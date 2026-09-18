---
title: "轻量级油猴脚本性能调优与 DOM 拦截思考"
summary: "从 MutationObserver 监控到 CSS 规则注入，探讨如何在低资源消耗下实现现代 Web 体验优化。"
date: "2026-09-01"
tags: ["JavaScript", "性能优化", "油猴扩展"]
featured: true
---

用户脚本（Userscript）在带来定制体验的同时，如果频繁执行全局 DOM 查询或深层递归，可能会引发页面丢帧与卡顿。

### 核心优化原则
1. **优先使用纯 CSS 注入**：能用规则隐藏或重绘的，尽量避免使用频繁的 JS 轮询。
2. **轻量 MutationObserver**：限制监听子树（childList），避免过度监听 attributes。
3. **请求拦截策略**：在数据抵达前过滤，比在页面渲染后剔除更平滑。
