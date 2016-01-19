# AWS Mobile Hubハンズオン 資料

## これはなあに？

2016年1月16日の[JAWS-UG沖縄 ゼロから始めるモバイルアプリ開発](https://jaws-ug-okinawa.doorkeeper.jp/events/36263) ではじめに利用したAWS Mobile Hubハンズオンの資料です。

Mac向けのKeynoteファイルと、PDFファイルが同梱されています。各支部で利用するにあたって、ご自由に改変していただいて構いません。その際、ファイル名などを変更してプルリクエストしてもらえると嬉しいです。

## ハンズオン資料

* [MobileHubHandsOn-Setup](https://github.com/jaws-ug/hands-on/raw/master/Mobile-Hub/MobileHubHandsOn-Setup.pdf) : 事前準備編
* [MobileHubHandsOn-Main](https://github.com/jaws-ug/hands-on/raw/master/Mobile-Hub/MobileHubHandsOn-Main.pdf) : 本編

## ソースコード

* [lambda-tweet](https://github.com/jaws-ug/hands-on/tree/master/Mobile-Hub/lambda-tweet) : AWS Lambda 経由でTwitterに投稿する関数
* [lambda-weather](https://github.com/jaws-ug/hands-on/tree/master/Mobile-Hub/lambda-weather) : AWS Lambda 経由で天気予報RSSを取得する関数

## 必要なIAM権限について

限定された権限しかないアカウントでこのハンズオンを試す場合に、どの程度の権限があればいいかを調査して頂きました

* [MobileHub Handsonで使用するアカウントに付与しとかないとハマる奴](https://gist.github.com/cloneko/082305f5855c13bc5392)


## コントリビュートの仕方

* 追加する内容をメモった [issueを立てる](https://github.com/jaws-ug/hands-on/issues/new) か、[WIP]でプルリクエストを生成（後者は上級者向け？）
* Forkする！
* 追加する機能のフィーチャーブランチを作る ``git checkout -b my-new-docs``
* なにか作って、コミット ``git commit -m 'Add some new docs'``
* pushする〜 ``git push origin my-new-docs``
* プルリクエストを作成！

## Contributors

* [Yonashiro Yuu](https://github.com/cloneko)

Originally authored by [Koichiro Nishijima](https://github.com/k-nishijima)

## License

[MIT License](http://choosealicense.com/licenses/mit/)
