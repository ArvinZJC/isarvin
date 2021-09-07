![banner.png](./img_README/banner.png)

# [isarvin.com](https://isarvin.com)

[![GitHub deployments](https://img.shields.io/github/deployments/ArvinZJC/isarvin/production?label=Vercel&logo=vercel)](https://isarvin.com)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/810eda125dbf4b9d96b81e6c34ec26e6)](https://www.codacy.com/gh/ArvinZJC/isarvin/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ArvinZJC/isarvin&amp;utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/ArvinZJC/isarvin)

[English](./README.md) | **简体中文**

Arvin是俺的英文名，作为一个抱大腿的调包开发者，终于在鱼都摸烂了后用Vue.js 3和[Tailwind CSS](https://tailwindcss.com/)建了此个人网站。网站部署在[Vercel](https://vercel.com/home)上。网站的设计遵循以下主要原则。

- 响应式布局。
- 统一设计语言。
- 支持深色模式。
- 国际化: English / 简体中文。
- 无障碍：支持减少动画。

![example_zhCN.png](./img_README/example_zhCN.png)

网站内容结构如下图。请注意此项目使用[GPL-3.0协议](./LICENSE)。

![structure_zhCN.png](./img_README/structure_zhCN.png)

## 注意

1. 截至2021年9月7日，使用Visual Studio Code（版本：1.60.0）、Node.js 16.4.2和Vue CLI 5.0.0-beta.3开发表现良好。此外，我要特别感谢Tailwind提供的[丰富、可扩展的CSS框架和资源](https://tailwindcss.com/resources)，这节省了许多开发时间。
2. 受[Tailwind CSS 2.0+的影响](https://tailwindcss.com/docs/browser-support)，网站能支持大多数主流浏览器的最新稳定版。

    > As of v2.0, Tailwind CSS is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. Tailwind CSS v2.0 does not support any version of IE, including IE 11.

3. 项目主要依赖参见下面的表格。

    | 名称 | 版本 |
    | :-- | :--: |
    | @headlessui/vue | 1.4.1 |
    | @heroicons/vue | 1.0.4 |
    | [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) | 0.4.4 |
    | tailwindcss | 2.2.11 |
    | vue | 3.2.9 |
    | vue-i18n | 9.1.7 |
    | vue-meta | 3.0.0-alpha.9 |
    | vue-router | 4.0.11 |
