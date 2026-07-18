# Cloudflare Pages 部署設定

## 正式環境

- Cloudflare Pages 專案：`yanxunzhu`
- 正式網址：`https://yanxunzhu.com`
- Pages 預設網址：`https://yanxunzhu.pages.dev`
- `www.yanxunzhu.com` 以 301 永久轉址至根網域，並保留路徑與查詢參數。
- Cloudflare Web Analytics 已對 `yanxunzhu.com` 啟用自動安裝。
- GitHub Actions 僅負責驗證建置；正式部署由 Cloudflare Pages 管理。

## 建置設定

| 項目 | 值 |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node.js | `22` |
| pnpm | `10` |

## 環境變數

| 變數 | 值 |
| --- | --- |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10` |
| `ASTRO_TELEMETRY_DISABLED` | `1` |

## 發布流程

1. 修改網站原始碼或新增文章。
2. 將通過本機建置的變更推送至 GitHub `main`。
3. Cloudflare Pages 自動建立正式版本。
4. GitHub Actions 同步執行建置驗證，但不發布 GitHub Pages。

## 上線檢查

- `/`
- `/writing/`
- `/projects/`
- `/experience/`
- `/resume/`
- `/robots.txt`
- `/sitemap-index.xml`
