<!-- バッジ例: GitHub Release ダウンロード数。まだリリースを作っていない場合は後で挿入 -->
<!-- ![Downloads](https://img.shields.io/github/downloads/YOUR_GITHUB_USERNAME/titech-auto-login/total) -->

# Titech Auto-Login Extension

東京工業大学（現・東京科学大学）ポータルサイトのログインを自動化する Chrome 拡張機能です。  
**大学非公式・自己責任** でご利用ください。

## Features / 主な機能
- 学籍番号 & パスワード自動入力  
- マトリクス表を登録して自動入力  
- 資格情報は **`chrome.storage.local`** にのみ保存（外部送信なし）  
- ワンクリックでオフにできるアドオンアイコン

## Installation (Developer Mode)

1. Clone or download this repository.  
2. Open **`chrome://extensions/`** in Chrome.  
3. Enable **Developer mode**.  
4. Click **Load unpacked** and select the project folder.  
5. Click the extension icon 🧩 → **Options** to register your account info.

日本語手順を展開する ▼
<details>
<summary>開く / Close</summary>

1. このリポジトリをダウンロード（ZIP解凍）または `git clone`  
2. Chrome を開きアドレスバーへ `chrome://extensions/`  
3. 右上で **デベロッパーモード** をオン  
4. **パッケージ化されていない拡張機能を読み込む** → フォルダを選択  
5. 拡張オプションから ID / パスワード / マトリクス を登録
</details>

## Security Notes

- 学内規約に反しない範囲で使用してください  
- 共有 PC では使用しないでください  
- ソースコードのセキュリティレビューは歓迎です（Pull Request / Issue）

## Screenshots

| Login page | Options page |
|------------|--------------|
| ![login](docs/screenshot-login.png) | ![options](docs/screenshot-options.png) |

> スクリーンショットをまだ用意していなければ、このブロックごと削除してOK。

## Roadmap

- Edge / Chromium ベースブラウザでの動作保証  
- 暗号化ストレージ対応（マスターキー方式）  
- GitHub Actions で自動ビルド & リリース ZIP 生成  
- ダウンロード数バッジの公式サイト連携

## License

MIT — see [LICENSE](./LICENSE) for details.

---

### English Summary

Titech Auto-Login automates logging in to Tokyo Tech / Tokyo Science University portal.  
**Unofficial. Use at your own risk.**

- Auto-fills ID/password and matrix table  
- No credentials leave your PC (`chrome.storage.local`)  
- Install via Chrome’s “Load unpacked” in Developer mode  
- Licensed under MIT
