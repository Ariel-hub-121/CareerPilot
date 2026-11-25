# 初始骨架驗證紀錄

日期：2026-11-25

已執行：

- 逐一檢查 TypeScript 檔案的相對匯入目標存在。
- 檢查 package、TypeScript 與 Azure SPA 設定可解析為 JSON。
- 確認首頁、F1、F2、F3、H1 的獨立頁面檔案與共用路由存在。
- 確認 HTML 設定為 zh-Hant，並提供手機 viewport 與 SPA 回退。

尚未驗證：

- npm install：執行環境無法解析 registry.npmjs.org，回報 ENOTFOUND；沒有完成套件安裝。
- TypeScript 編譯、Vite production build 與瀏覽器互動／手機版驗證，因此不能宣稱通過。
- Firebase、Firestore、Storage、Azure Functions、OpenAI 與 Speech 尚未串接。

可連網環境下請先執行 `npm install`，再執行 `npm run build`，最後以 `npm run dev` 檢查：

1. 首頁與各導覽入口可切換，重新整理子路由仍正常。
2. 390px 與 1440px 寬度下，沒有橫向溢出，手機選單可開關。
3. 登入與關於視窗可用 Escape 關閉，焦點返回觸發按鈕。
4. 面試 60／120 秒選擇切換顯示，但沒有開始錄音。
5. 我的歷程分類可切換，沒有顯示虛構私人紀錄或成功登入。
6. 不存在的路由出現 404，回首頁按鈕正常。

這份清單不代表三大功能的正式驗收；完整業務驗收沿用團隊共識與 Demo 規格。
