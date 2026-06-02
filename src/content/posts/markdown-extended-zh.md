---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多 Fuwari 中的 Markdown 功能'
image: ''
tags: [示例, 示例, Markdown, Fuwari]
category: 开卷观隅
draft: false
---

## GitHub 仓库卡片

你可以添加动态卡片来链接到 GitHub 仓库，页面加载时会从 GitHub API 获取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示块

支持以下类型的提示块：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户即使在浏览时也应特别注意的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险需要用户立即注意的关键内容。
:::

:::caution
某个操作的负面潜在后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使在浏览时也应特别注意的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::
```

### 自定义标题

提示块的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也被支持。

```
> [!NOTE]
> GitHub 语法也被支持。

> [!TIP]
> GitHub 语法也被支持。
```

### 剧透

你可以在文本中添加剧透内容。文本也支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **哈哈哈**]！

```markdown
内容 :spoiler[被隐藏了 **哈哈哈**]！

```
