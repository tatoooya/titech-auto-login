![Downloads](https://img.shields.io/github/downloads/tatoooya/titech-auto-login/total)

# Titech Auto-Login Extension

東京工業大学（現・東京科学大学）ポータルのログイン操作を自動化する Chrome 拡張機能です。  
**大学非公式・自己責任** で利用してください。  
<br>

| 対応ブラウザ | 推奨バージョン | 対応 OS |
|--------------|----------------|---------|
| Google Chrome | 88 以降 (Chromium 系含む) | Windows / macOS |

---

## 🏗 機能 / Features
- 学籍番号・パスワード自動入力  
- マトリクス表（7 × 10）登録 → 自動入力  
- 資格情報は **`chrome.storage.local`** のみに保存（外部送信なし）  
- 拡張アイコンからワンクリックで有効/無効を切替

---

## 🚀 インストール (Developer Mode)

1. [Releases](../../releases) から ZIP をダウンロード & 解凍  
2. **Chrome** アドレスバーに `chrome://extensions/`  
3. 右上 **Developer mode** を ON  
4. **Load unpacked** → 解凍フォルダ (`titech-auto-login/`) を選択  
5. 一覧に **Titech Auto-Login** が表示されれば成功

> **フォルダの推奨保存先**  
> - Windows : `C:\Users\<ユーザー名>\Documents\ChromeExtensions\`  
> - macOS : `~/Documents/ChromeExtensions/`  
> フォルダを移動・削除すると拡張が無効化されるので注意。

---

## ⚙️ 初期設定

1. 拡張アイコン 🧩 → **Titech Auto-Login** →︙→ **Options**  
2. 入力欄に次を設定  
   - **Account** : 学籍番号 (例 `s1234567`)  
   - **Password** : ログインパスワード  
   - **Matrix** : 7 × 10 の英数字（マトリクス表）  
3. **保存** をクリック → 次回から https://portal.nap.gsic.titech.ac.jp/ にアクセスすれば自動ログインされます！

---

## 🔒 セキュリティ注意

- 資格情報は PC ローカルのみ保存。外部送信はありません  
- 共有 PC・公共端末では使用しないでください  
- 大学の利用規約を遵守してください

---

## 🛠 トラブルシューティング
| 症状 | 対処 |
|------|------|
| 自動入力されない | `chrome://extensions/` で拡張を **Reload** |
| 設定を変更したい | 拡張アイコン → **Options** で再登録 |
| 別 PC で使う | ZIP を再インストール → 初期設定を再入力 |

---

## 📜 ライセンス
MIT — see [LICENSE](./LICENSE).

---

<details>
<summary>🌐 English Instructions (Click to expand)</summary>

### How to Install

1. Download the ZIP from [Releases](../../releases) and unzip it.  
2. Open `chrome://extensions/` in Chrome.  
3. Toggle **Developer mode** on (top-right).  
4. Click **Load unpacked** and select the unzipped folder (`titech-auto-login/`).  
5. “Titech Auto-Login” should appear in the list.

### How to Set Up

1. Click the extension icon (🧩) → “Titech Auto-Login” → **Options**.  
2. Fill in:  
   - **Account** (login ID)  
   - **Password**  
   - **Matrix** (7 × 10 characters)  
3. Click **Save**. From now on, visiting the portal auto-logs you in!

### Security Notes
- All data stays **only on your local PC**.  
- Nothing is sent outside.  
- **Do not use on shared / public computers.**

</details>
