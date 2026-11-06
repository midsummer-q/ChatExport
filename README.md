# ChatExport

ChatGPT 与 DeepSeek 对话导出脚本合集。支持单篇与批量导出，便于将自己的聊天记录保存为 Markdown、HTML 或 JSON。

这是基于开源项目修改的社区版本，与 OpenAI、DeepSeek 官方无隶属关系。

## 项目与安装文件

| 项目 | 版本 | 安装脚本 | 使用说明 |
| --- | --- | --- | --- |
| ChatGPT Exporter | 0.1.0 | [chatgpt.user.js](chatgpt-exporter/dist/chatgpt.user.js) | [说明](chatgpt-exporter/README.md) |
| DeepSeek Exporter | 0.1.4 | [deepseek.user.js](deepseek-exporter/dist/deepseek.user.js) | [说明](deepseek-exporter/README.md) |

安装 Tampermonkey 后，在其管理面板中选择“实用工具 → 从文件导入”，导入对应的 `.user.js` 文件，随后刷新已登录的网站。两个平台的脚本可以同时启用；同一个平台只保留一个导出脚本版本。

GitHub 上查看安装脚本时可通过 **Raw / 下载原始文件** 保存；也可以下载整个仓库后从上述目录导入。直接使用安装脚本不需要 Node.js 或依赖目录。

## 功能

- Markdown、HTML、JSON 单篇与批量导出。
- 分页读取历史记录，避免将单页数量误认为历史总量。
- 思考文本或摘要的格式化导出，包括代码、列表和公式；仅包含网页接口实际返回的内容。
- ChatGPT 项目对话分页、读取失败后的重试及悬浮入口。
- DeepSeek 每 100 条生成一包，分别提示进行中、全部生成与中途停止。需下载全部分包才能保存完整的所选记录。

具体可读取的数据以当前登录账号、工作区权限和网页接口为准。网页内部接口变化可能需要更新脚本。

## 目录结构

```text
ChatExport/
├── README.md
├── LICENSE
├── chatgpt-exporter/
│   ├── src/              # 源码
│   ├── tests/            # 自动测试与夹具
│   ├── verification/     # 可复用浏览器验证脚本
│   ├── scripts/          # 测试夹具脱敏工具
│   ├── dist/             # 可直接安装的用户脚本
│   └── pnpm-lock.yaml
└── deepseek-exporter/
    ├── src/
    ├── tests/
    ├── verification/
    ├── dist/
    └── pnpm-lock.yaml
```

两套项目的依赖版本不同，分别安装和构建；不合并锁文件。`node_modules`、截图、下载样例和缓存不提交到仓库。`dist/*.user.js` 保留在仓库，方便直接安装。

## 开发

建议使用 Node.js 24。依次进入所需子目录执行：

```sh
# ChatGPT
cd chatgpt-exporter
npx pnpm@8.14.1 install --frozen-lockfile
npm test
npm run lint
npm run build
```

```sh
# DeepSeek（从仓库根目录开始）
cd deepseek-exporter
npx pnpm@11.21.0 install --frozen-lockfile
npm test
npm run lint
npm run build
```

构建会更新各自 `dist` 目录中的安装文件。浏览器复查需要额外的 Playwright 与 Microsoft Edge，详见子项目说明。

## 验证范围

整理时复查了两个项目的 TypeScript、自动测试、代码规范与生产构建：ChatGPT 170 项测试，DeepSeek 42 项测试。此前浏览器验证使用合成数据，包括 ChatGPT 的 137 条历史记录分页及 ZIP 下载、DeepSeek 的思考内容排版。上述结果不代表已在所有真实账号上完成端到端验证。

## 来源与许可证

- ChatGPT 基于 [pionxzh/chatgpt-exporter](https://github.com/pionxzh/chatgpt-exporter)，基础提交 `44affd4d68c88f73be59f8adda521da08ba95ba0`。
- DeepSeek 基于 [pionxzh/deepseek-exporter](https://github.com/pionxzh/deepseek-exporter)。

使用 MIT 许可证，保留原作者 Pionxzh 的署名和两个子项目的原始许可证：[ChatGPT](chatgpt-exporter/LICENSE)、[DeepSeek](deepseek-exporter/LICENSE)。
