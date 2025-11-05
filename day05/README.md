3回連続遅刻チェック（出席ログ解析・状態管理）
概要
あなたはチームの出席管理システムを作っています。
出席ログの中から、同じユーザーが3回連続で「遅刻」しているケースを検出してください。
3回連続で遅刻しているユーザーがいた場合、その名前を返す関数を作ります。

入力仕様
関数は 1つの文字列 を受け取り、文字列または数値 -1 を返す。
ログには複数の "USER:{name} status:{value}" という形式が含まれる。
{name}：小文字英字（例：taro, hanako, ken）
{value}：on_time または late
各ログは 空白または改行 で区切られる。
判定ルール
同じユーザーが 3回連続で late（遅刻） していたら、その {name} を返す。
2回以下の遅刻は無視する（3回連続でないと検知しない）。
異なるユーザーに切り替わった時点でカウントはリセットされる。
不正な形式（USER:やstatus:が欠けている／知らない単語など）があれば -1。
出力仕様
3回連続遅刻を検知した場合 → その名前を返す（例："hanako"）
該当なし・不正形式 → -1
例
入力	出力
USER:taro status:late USER:taro status:late USER:taro status:late	"taro"
USER:hanako status:late USER:hanako status:on_time USER:hanako status:late	-1
USER:taro status:on_time USER:taro status:late USER:taro status:late	-1
USER:ken status:late noise USER:ken status:late USER:ken status:late	"ken"
実装要件
言語は任意。
正規表現を使って USER: と status: を抽出すること。
ファイル名は late_check.{拡張子} にする。
提出手順
git clone
git checkout -b feat/late-check-advanced
関数実装
git add / commit / push
Pull Request 作成
禁止事項
Google / ChatGPT / Copilot などの生成ツールを使用しない
他人のコードをコピーしない
不明点は面接官に確認すること
評価観点
要件把握（要件）5/5
仕様定義（設計）5/5
プログラム（品質、知識）5/5
開発タスクの進め方（開発手順）5/5
コミュニケーション 5/5
２５点満点中１５点以上で合格