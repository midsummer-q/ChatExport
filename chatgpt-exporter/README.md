# ChatGPT 导出助手：本地适配版 0.1.1

安装文件：`dist/chatgpt.user.js`。这是独立的 ChatGPT 脚本，与同仓库的 DeepSeek 版分别安装、构建。

## 安装与使用

1. 打开 Tampermonkey 管理面板，在“实用工具 → 从文件导入”中选择 `dist/chatgpt.user.js`，确认安装。
2. 登录 `https://chatgpt.com/`，刷新网页。左侧菜单会出现“导出助手”；无法识别侧边栏时，左下角会出现悬浮入口。
3. 打开一篇对话，可导出 Markdown、HTML、JSON，也可以复制文字。批量操作请点“批量导出”。
4. 批量窗口默认连续读取最多 1000 条，超过后点击“再加载”继续读取。每页条数不会成为总条数上限；中途失败后，仍可导出已加载的内容或重试读取更早记录。
5. “选择项目”下拉框可以单独读取项目内的对话。不同账号或工作区的可用内容以当前登录权限和接口返回为准。
6. 在设置中打开“导出思考过程”，可包含接口实际返回的思考摘要和活动说明。支持 Markdown 列表、加粗、代码块和公式；不能获取服务端未返回的内部推理。
7. 已有官方 `conversations.json` 文件时，可使用批量窗口右上角的上传按钮进行本地格式转换。

如果同时装有其他 ChatGPT Exporter，请只启用其中一个 ChatGPT 版本，避免重复入口。DeepSeek 版可同时保留。Chrome 如不执行脚本，请检查扩展的“允许用户脚本”选项。

## 本地修改

- 0.1.1 修复个人账号被误判为团队工作区的问题，支持工作区 ID 编码与别名匹配；修正在线导出的来源提示，并使错误信息完整换行显示。

- 普通历史列表按实际返回数量推进 offset，避免接口每页少于请求数量时遗漏中间记录。
- 项目列表续读保存独立游标；失败时保留加载位置，显示重试入口。
- 重复页或异常响应会报告错误，不把部分列表误认为完整列表。
- 登录过期会重新读取会话并重试一次，失败的登录查询可以再次尝试。
- 无法识别当前对话时报告错误，避免误导出最近的另一篇对话。
- 思考过程使用 Markdown/公式渲染，保留换行并提供中文时长标题。
- 新版页面无法挂载原生菜单时提供悬浮入口。

## 验证范围

已通过 176 项自动测试、TypeScript 检查、代码规范检查和生产构建。

完整安装文件已在 Edge 无头浏览器中使用**合成接口与对话**验证：137 条历史记录、每页仅返回 40 条、中途 HTTP 500 后重试、项目游标分页、实际 ZIP 下载、思考格式以及悬浮入口。验证脚本为 `verification/check-browser.mjs`，运行后会重新生成 `verification/output/`；生成的截图和下载样例不纳入仓库。

尚未在你的真实 ChatGPT 登录账号上完成端到端验证。该脚本调用网页内部接口；若网站变更或要求重新登录/验证，需以网页实际提示为准。

## 来源与构建

基于 MIT 开源项目 [pionxzh/chatgpt-exporter](https://github.com/pionxzh/chatgpt-exporter) 定制，基础提交为 `44affd4d68c88f73be59f8adda521da08ba95ba0`（上游版本 2.38.3）。保留原作者署名与 LICENSE。本地版本采用独立脚本命名空间 `local.chatgpt-exporter`，未发布到上游。

依赖安装使用仓库锁定版本：`npx pnpm@8.14.1 install --frozen-lockfile`。运行 `npm test`、`npm run lint` 和 `npm run build` 可复查并重新生成安装文件。

## 浏览器复查（可选）

常规开发只需安装锁文件中的依赖。浏览器复查额外需要 Playwright 和 Microsoft Edge；可安装到独立临时目录，将 `PLAYWRIGHT_MODULE_PATH` 指向该目录中的 `node_modules/playwright`，然后运行：

```sh
node verification/check-browser.mjs
```

脚本使用合成数据，不需要登录真实账号。需要制作新测试夹具时，可使用 `scripts/sanitize-conversation.mjs` 辅助脱敏，提交前仍需人工检查。
