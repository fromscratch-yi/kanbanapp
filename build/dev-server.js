// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するようなミドルウェアのインストール
  app.use(bodyParser.json())
  // TODO: ここ以降にAPIの実装内容を追加
}
