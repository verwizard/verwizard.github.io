---
title: 图像分割：胶囊与花卉
group: space
status: done
order: 3
tags: ["Python", "scikit-image", "HSV 阈值", "形态学"]
summary: 不依赖训练的经典方案。RGB 转 HSV 后按色相阈值提取目标，再用开运算去噪、闭运算连接断裂、填洞补内部缺失，最后按连通域面积筛除背景；胶囊逐个用凸包修补缺口，前提是形状近似凸形且彼此分开。输出二值掩膜、前景与轮廓。
---
