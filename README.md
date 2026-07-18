# 朱彥勳個人網站

Astro 靜態網站，正式網址為 `https://yanxunzhu.com`。

## 本機執行

```powershell
pnpm install
pnpm dev
```

正式建置：

```powershell
pnpm build
```

## 內容維護

- 個人介紹、近期關注、經歷：`src/data/site.ts`
- 專案資料：由 `../_career_data/outputs/portfolio-html/portfolio-data.js` 同步
- 文章：`src/content/writing/*.md` 或 `*.mdx`
- 中文履歷 PDF：由 `_career_data` 同步至 `public/files/`
- 視覺規範：`PRODUCT.md`、`DESIGN.md`

同步專案、圖片與履歷：

```powershell
pnpm sync:career
```

## 新增文章

複製 `src/content/writing/_template.md`，移除 `draft: true` 或改為 `false` 才會公開。文章可以只使用原始語言，不需建立翻譯版本。

## 部署

GitHub Repository 只保存原始碼。Cloudflare Pages 連接 `main` 分支後自動建置：

- Build command：`pnpm build`
- Output directory：`dist`
- Node.js：22
- pnpm：10
- 正式網域：`yanxunzhu.com`
- `www.yanxunzhu.com` 轉址至根網域

完整步驟見 `docs/cloudflare-deployment.md`。
