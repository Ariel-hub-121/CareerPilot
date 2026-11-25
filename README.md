# CareerPilot

實習探索與準備助手，Microsoft × NCU AI Innovation Demo Day。

目前是以 **React + TypeScript + Vite** 建立的前端初始骨架，使用 React Router 管理頁面網址、lucide-react 提供圖示、CSS 處理版型與響應式畫面。組員可在各自的功能目錄接續開發。

## 快速開始

以下步驟直接在 **VS Code 的整合式終端機（Terminal）** 操作，請依序執行。每位組員都需要在自己的電腦完成首次設定；同一份本機專案切換 branch 時，通常不必重新安裝。

VS Code Terminal 是終端介面，裡面可使用 PowerShell、Command Prompt（CMD）、Git Bash 等 shell。下方的 `node`、`npm` 與 `git` 指令可在這些 shell 中執行；建立設定檔則使用 VS Code 檔案總管操作。

### 1. 開啟專案並確認環境

先取得團隊專案，在 VS Code 選擇「開啟資料夾」，開啟含有 `package.json` 的專案根目錄，再選擇「終端機 → 新增終端機」。

使用 Node.js 22.12+（建議 Node 24）。確認 VS Code 檔案總管最上層有 `package.json`，且終端機位於該專案資料夾，再逐行貼上以下指令確認版本：

```sh
node --version
npm --version
```

兩行都應顯示版本號。若找不到 `node` 或 `npm`，請先安裝 Node.js，再重新開啟 VS Code。若終端機不在專案根目錄，可在 VS Code 檔案總管對專案根目錄資料夾按右鍵，選擇「在整合式終端機中開啟」。

### 2. 安裝專案套件

在專案根目錄貼上：

```sh
npm ci
```

等待指令成功結束後再進行下一步。專案已包含 `package-lock.json`，`npm ci` 會依鎖定版本安裝 React、Vite、TypeScript 等全部套件至 `node_modules/`，不需要逐一手動安裝。安裝需要網路；若出現錯誤，先處理錯誤再啟動網站。

### 3. 建立本機環境設定

在 VS Code 左側檔案總管操作：

1. 選取根目錄的 `.env.example`，按 Ctrl+C，再按 Ctrl+V 複製一份。
2. 將複製出的檔案重新命名為 `.env.local`，並確認仍放在專案根目錄。
3. 若已有 `.env.local`，直接編輯既有檔案，保留已填好的本機設定。

目前骨架可將設定值保持空白，直接進行下一步。後續需要串接服務時，再編輯根目錄的 `.env.local`：

- `VITE_API_BASE_URL`：後續後端 API 的基底網址。
- `VITE_FIREBASE_*`：預留給後續 Firebase 前端整合。

此檔案與 `package.json` 同一層，不放在 `src/`，也不提交 Git。新增前端環境變數時，請同步更新 `.env.example`。

**所有 `VITE_` 變數會進入公開前端；Azure API 金鑰、Firebase Admin 憑證只能放在後端環境設定中。** 修改環境變數後，需停止並重新執行 `npm run dev`。

### 4. 啟動網站

```sh
npm run dev
```

終端機顯示啟動成功後，開啟 http://127.0.0.1:5173 。開發期間保留這個終端機；停止伺服器按 Ctrl+C。目前固定使用 5173 埠號，埠號被占用時會停止啟動。

### 日常開發與切換 branch

**安裝是以本機專案資料夾為單位，不是每個 branch 各安裝一次。** 同一個資料夾切換分支時，`node_modules/` 和 `.env.local` 通常會保留；它們已被 Git 忽略，不會隨分支切換成另一份。

| 情境                                                                                | 需要執行的指令或操作                                    |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 每位組員首次取得專案                                                                | 完成上方步驟 1～4。                                     |
| 同一份專案，隔天繼續開發                                                            | 執行 `npm run dev`。                                  |
| 切換 branch，套件清單沒有變更                                                       | 重新執行 `npm run dev`，不必重裝套件。                |
| 切換 branch、pull 或 merge 後，`package.json` 或 `package-lock.json` 有套件變更 | 先執行 `npm ci`，成功後再執行 `npm run dev`。       |
| 不確定目前套件是否符合分支                                                          | 可重新執行 `npm ci`，依目前分支的 lockfile 重裝套件。 |
| 換電腦、重新 clone，或另開一份 clone／Git worktree                                  | 在新的專案資料夾重新安裝套件、建立本機設定。            |
| `.env.example` 新增變數                                                           | 將新欄位補進既有 `.env`，填入本機值後重啟 Vite。      |

切換分支前先按 Ctrl+C 停止開發伺服器，並妥善提交或暫存目前修改。團隊版本庫建立後，例如切換到已存在的探索功能分支：

```sh
git switch feature/explore
```

`feature/explore` 是範例名稱，請換成團隊實際分支；若要從目前分支新建功能分支，使用 `git switch -c feature/explore`。

若該分支的套件沒有變更，直接啟動：

```sh
npm run dev
```

若套件有變更，先貼上並等待安裝成功：

```sh
npm ci
```

再啟動網站：

```sh
npm run dev
```

需要為功能新增套件時，使用 `npm install 套件名稱`；開發工具使用 `npm install -D 套件名稱`（請將「套件名稱」換成實際名稱）。將更新的 `package.json` 與 `package-lock.json` 一起提交，其他組員取得變更後再執行 `npm ci`。

### 型別檢查與建置預覽

提交 PR 前，在專案根目錄執行正式建置；此指令會先檢查 TypeScript 型別：

```sh
npm run build
```

建置成功後，如需檢查正式輸出，再執行：

```sh
npm run preview
```

預設開啟 http://127.0.0.1:4173 ，停止預覽按 Ctrl+C。只想檢查型別時可使用 `npm run typecheck`。

| 指令                  | 用途                                                        |
| --------------------- | ----------------------------------------------------------- |
| `npm run dev`       | 啟動本機開發伺服器。                                        |
| `npm run typecheck` | 檢查前端與 Vite 設定檔的 TypeScript 型別。                  |
| `npm run build`     | 先檢查型別，再產生正式建置檔案至 `dist/`。                |
| `npm run preview`   | 預覽已建置的 `dist/`，預設網址為 http://127.0.0.1:4173 。 |

`node_modules/` 與 `dist/` 由工具產生，透過安裝或重新建置更新。

## 專案架構

### 整體目錄樹

以下為目前骨架；`node_modules/` 與 `dist/` 是安裝、建置產生的目錄：

```text
專案根目錄/
├── .env.example                 # 前端環境變數範本
├── .gitignore                   # 排除套件、建置輸出、本機設定與暫存檔
├── index.html                   # HTML 入口、網站標題、描述與圖示連結
├── package.json                 # 執行環境、套件需求與開發指令
├── package-lock.json            # 鎖定套件版本，供團隊一致安裝
├── README.md                    # 專案說明與協作指南
├── vite.config.ts               # React 插件與 Vite 開發、建置設定
├── tsconfig.json                # TypeScript 設定總入口
├── tsconfig.app.json            # src 前端程式的 TypeScript 設定
├── tsconfig.node.json           # Vite 設定檔的 TypeScript 設定
├── public/                      # 原樣複製至建置輸出的公開檔案
│   ├── favicon.svg              # 網站圖示
│   └── staticwebapp.config.json # Azure Static Web Apps 路由回退與回應標頭
├── src/                         # 前端原始碼，完整內容見下方 src 目錄樹
├── docs/                        # 專案文件
│   └── verification.md          # 初始骨架的驗證紀錄與待驗證清單
├── node_modules/                # 安裝產生的套件目錄，不提交 Git
└── dist/                        # 正式建置輸出，不提交 Git
```

### src 目錄樹

`src/` 放前端原始碼；各功能的專用元件、API 呼叫與型別可先放在 `features/` 對應目錄，多個功能共用的內容再放到共用目錄。

```text
src/
├── main.tsx                    # 前端啟動入口，掛載 React 應用程式
├── app/                        # 路由、側邊導覽與全站 Layout
│   ├── App.tsx                 # 頁面與子路由設定
│   ├── Layout.tsx              # 共用版型、導覽與頁面內容區
│   └── navigation.ts           # 導覽項目的網址、名稱與圖示
├── config/                     # 前端應用設定
│   └── app.ts                  # API 網址、模式與服務串接狀態
├── features/                   # 各功能獨立開發區
│   ├── home/
│   │   └── HomePage.tsx        # 準備總覽首頁與功能入口
│   ├── explore/
│   │   └── ExplorePage.tsx     # F1 探索問答、報告及履歷素材占位頁
│   ├── jobs/
│   │   └── JobsPage.tsx        # F2 職缺媒合占位頁
│   ├── interview/
│   │   └── InterviewPage.tsx   # F3 模擬面試設定與占位頁
│   ├── history/
│   │   └── HistoryPage.tsx     # H1 我的歷程分類與空白狀態
│   └── auth/
│       └── AuthProvider.tsx    # 登入狀態 Provider 與 hook，尚未串接 Firebase
├── services/                   # 共用的前端服務
│   └── api.ts                  # API 請求、ID token 傳遞與錯誤處理
├── shared/                     # 跨功能共用元件
│   ├── PageHeading.tsx         # 頁面標題
│   ├── NoticeDialog.tsx        # 提示視窗
│   ├── NotFoundPage.tsx        # 404 頁面
│   └── FeaturePlaceholder.tsx  # 尚未實作功能的占位內容
├── types/                      # 跨功能共用型別
│   └── domain.ts               # 基礎資料型別，依功能規格逐項擴充
└── styles.css                  # 全站共用與響應式樣式
```

### 前端啟動與 API 串接流程

```text
index.html
  → src/main.tsx：掛載 React、BrowserRouter 與 AuthProvider
  → src/app/App.tsx：依網址選擇功能頁面
  → src/app/Layout.tsx：提供共用版型與導覽
  → src/features/：顯示首頁、探索、職缺、面試或歷程頁面
```

功能頁需要呼叫後端時，可透過 `src/services/api.ts` 的 `apiRequest<T>(path, options, token)` 發送請求。API 基底網址由 `src/config/app.ts` 讀取 `VITE_API_BASE_URL`，`token` 參數預留傳遞 Firebase ID token。

API 未設定時會拋出 `NOT_CONFIGURED`，不回傳假成功。`T` 是呼叫端型別，正式串接時仍需驗證回應內容。

`src/` 內的 `services/` 都是前端程式。Azure AI 呼叫、Firebase ID token 的後端驗證與 Firebase Admin 操作應由後端處理；後續接 Azure Functions 時，可在根目錄新增 `api/`，目前尚無此目錄。

## 開發與協作指南

### 功能分工與路由

| 頁面                        | 路由             | 檔案目錄                                              | 負責人   |
| --------------------------- | ---------------- | ----------------------------------------------------- | -------- |
| 初始骨架／首頁              | `/`            | `src/app/`、`src/shared/`、`src/features/home/` | Ariel    |
| F1 探索問答、報告及履歷素材 | `/explore/*`   | `src/features/explore/`                             | 組員     |
| F2 可解釋職缺媒合           | `/jobs/*`      | `src/features/jobs/`                                | 組員     |
| F3 限時錄音模擬面試         | `/interview/*` | `src/features/interview/`                           | Ariel    |
| H1 我的歷程                 | `/history`     | `src/features/history/`                             | 共同整合 |
| Firebase Google 登入        | 共用導覽入口     | `src/features/auth/`                                | Ariel    |

### 開發需求對照表

| 開發需求                 | 修改位置                                                                        |
| ------------------------ | ------------------------------------------------------------------------------- |
| 實作各功能頁與專用互動   | `src/features/` 對應功能目錄，依上表分工。                                    |
| 新增頁面網址或子路由     | `src/app/App.tsx`。                                                           |
| 調整全站版型、導覽項目   | `src/app/Layout.tsx`、`src/app/navigation.ts`。                             |
| 新增跨功能共用元件       | `src/shared/`。                                                               |
| 調整全站與響應式樣式     | `src/styles.css`。                                                            |
| 新增跨功能共用資料型別   | `src/types/domain.ts`，先確認欄位契約。                                       |
| 調整 API 設定與請求處理  | `src/config/app.ts`、`src/services/api.ts`。                                |
| 調整網站標題、描述或圖示 | `index.html`、`public/favicon.svg`。                                        |
| 新增前端環境變數         | 更新 `.env.example` 與本機 `.env`，再於使用處讀取。                         |
| 新增套件或調整開發工具   | `package.json`、`vite.config.ts`、`tsconfig*.json`；套件版本由 npm 維護。 |

### 新增功能範例

以模擬面試為例，可依需要擴充現有資料夾，不必一次建立所有子目錄：

```text
src/features/interview/
├── InterviewPage.tsx           # 既有：頁面入口
├── components/                 # 可新增：錄音控制、題目卡片等面試專用元件
├── services/                   # 可新增：面試專用 API 呼叫，可使用 src/services/api.ts
└── types/                      # 可新增：僅面試功能使用的型別
```

F1、F2 各自預留子路由。組員可在自己的功能目錄新增 `components/`、`services/`、`types/`，替換現有 Page 的占位內容並保留同名 export；新增路由時再接入 `src/app/App.tsx`。

### 共用檔案與分支協作規則

- 共同維護一個 GitHub repository，先合入骨架，再由 Ariel 與組員各自建立功能分支。
- 各功能優先在自己的目錄開發；共用版型、樣式、路由與型別變更透過 PR 協調。
- 新增共用型別或修改欄位前，先共同確認資料契約。
- 提交原始碼與 lockfile；`node_modules/`、`dist/`、`.env.local` 已由 `.gitignore` 排除。
- 視覺使用 CSS 與 lucide 圖示；Google Fonts 無網路時會回退系統字型。

## 後續串接順序

1. 確認 F1、F2、F3 的共用 schema、UID 與版本欄位；加入核准的 Demo JSON。
2. 組員在 explore / jobs 實作 F1、F2；Ariel 在 interview 實作抽題、錄音、逐字稿校正與回饋。
3. 替換 AuthProvider 為 Firebase onAuthStateChanged，補上登入取消、錯誤、返回原操作與草稿保留。
4. 接 Firestore / Storage，驗證兩帳號隔離、刪除與登出清除私人快取。
5. 後端 Azure Functions 驗 ID token，再呼叫 Azure OpenAI / Speech，秘密留在後端。

## Azure Static Web Apps 部署

已準備 `public/staticwebapp.config.json` 的 SPA 回退設定與基本回應標頭；Vite build 會將此檔案複製至 `dist/`，供部署後重新整理 `/explore` 等子路由時回退至 `index.html`。

| 部署項目        | 設定值            |
| --------------- | ----------------- |
| App location    | `/`             |
| Output location | `dist`          |
| Build command   | `npm run build` |

目前尚未建立 Azure 資源、公開部署、GitHub Actions 或 Firebase 安全規則；後續由團隊自己的版本庫與雲端專案串接。
