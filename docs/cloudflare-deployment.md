# Cloudflare Pages 上線設定

## Pages 專案

1. 在 Cloudflare Workers & Pages 建立 Pages 專案。
2. 連接 GitHub Repository `Patrick-zhuyanxun/Patrick-zhuyanxun.github.io`。
3. Production branch 設為 `main`。
4. Build command 設為 `pnpm build`。
5. Build output directory 設為 `dist`。

## 建置環境變數

| 名稱 | 值 |
| --- | --- |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10` |
| `ASTRO_TELEMETRY_DISABLED` | `1` |

## 自訂網域

1. 在 Pages 專案的 Custom domains 加入 `yanxunzhu.com`。
2. 加入 `www.yanxunzhu.com`。
3. 使用 Cloudflare Bulk Redirect，將 `https://www.yanxunzhu.com/*` 永久轉址至 `https://yanxunzhu.com/${1}`，保留路徑與查詢字串。
4. 確認 SSL 憑證狀態為 Active。

## 上線後

- 啟用 Cloudflare Web Analytics。
- 驗證 `/`, `/writing/`, `/projects/`, `/experience/`, `/resume/`。
- 驗證 `robots.txt` 與 `sitemap-index.xml`。
- 確認 Cloudflare 正式部署正常後，停用 `.github/workflows/deploy-pages.yml`。
