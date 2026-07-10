# 個人網站

這是朱彥勳的公開個人網站原始碼。第一版包含首頁、專案總覽、專案詳情、履歷入口，以及預留的文章頁。

## 維護來源

- 專案資料：`../_career_data/outputs/portfolio-html/portfolio-data.js`
- 專案影像：`../_career_data/outputs/portfolio-html/assets/`
- 履歷 PDF：`../_career_data/outputs/resume-html/patrick-zhu-resume.pdf`
- 首頁歷程：`src/data/site.ts`

執行 `pnpm sync:career` 可同步公開需要的專案資料、影像與中文版履歷 PDF；原始 PowerPoint 素材不會複製到公開網站。

文章在開始公開寫作後，再建立對應的 Markdown 發布流程。公開部署前需設定 GitHub Pages 的網域與 base path。
