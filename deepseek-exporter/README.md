# DeepSeek Exporter

当前本地适配版本：**0.1.4**。安装文件：[dist/deepseek.user.js](dist/deepseek.user.js)。

## 安装与使用

1. 在 Tampermonkey 管理面板的“实用工具 → 从文件导入”中选择安装文件。
2. 登录 `https://chat.deepseek.com/` 并刷新，打开导出入口。
3. 支持单篇与批量导出 Markdown、HTML、JSON，以及本地 JSON 转换。
4. 历史列表支持分页读取；单页数量不等于历史记录总量。
5. 批量导出每 100 条生成一个文件。417 条会生成 5 包；只有下载全部分包，才能保存完整的所选记录。导出期间保持窗口打开。
6. 在设置中启用思考过程，可导出接口返回的思考文本，保留列表、代码块、表格、公式及折叠显示。

0.1.4 区分“仍在导出”“全部分包已生成”和“导出已停止”，避免第一包生成后误报全部完成。失败时保留已经生成的完整分包；未完成部分不会冒充完整导出。

## 本地开发

使用 Node.js 24 和项目指定的 pnpm 版本。在本目录运行：

```sh
npx pnpm@11.21.0 install --frozen-lockfile
npm test
npm run lint
npm run build
```

构建产物为 `dist/deepseek.user.js`，无需上传依赖目录。

## 验证

最近一次功能修复已通过 42 项自动测试、TypeScript 检查、代码规范检查与构建。此前使用合成示例验证了思考过程的浅色/深色与窄屏排版，测试产物可重新生成。

可选浏览器检查需要 Playwright 和 Microsoft Edge。在 PowerShell 中先设置预览目录并运行测试，再执行浏览器脚本：

```powershell
$env:DEEPSEEK_PREVIEW_DIR = Join-Path (Get-Location) 'verification/thinking-format'
npm test
# 若 Playwright 位于独立目录，设置 PLAYWRIGHT_MODULE_PATH 指向其模块目录。
node verification/thinking-format/check-preview.mjs
```

真实账号可读取的范围以当前登录权限和网页接口为准；测试不代表已在所有账号、页面版本和网络条件下验证。

## 来源与许可

基于 [pionxzh/deepseek-exporter](https://github.com/pionxzh/deepseek-exporter) 修改，保留原作者署名与 [MIT 许可证](LICENSE)。这是社区脚本，与 DeepSeek 官方无隶属关系。
