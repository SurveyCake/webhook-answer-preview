# Webhook Answer Preview Tool

這是一個 Webhook Answer 結構測試工具，在你開發自己的 Webhook URL 時，可以先透過這個工具，從 Webhook Query API 取得答案，並且搭配 Hash key & IV key 解密查看答案結構。

- 網址： https://surveycake.github.io/webhook-answer-preview/


### 使用時機

在開發 Webhook URL 的時候，想先知道使用者填答的結構，再來進行 API 邏輯開發。


### 使用方式

您於 SurveyCake 設定的 Webhook URL，我們會使用 POST method 的方式去驅動，所以在開發階段會需要自己把 `POST` 過來的資訊印出來比較麻煩。

所以我們建議你先利用 `自訂感謝頁網址` 來快速取得測試工具需要的 `${SVID}` & `${HASH}`。

![image](/src/images/setting-redirection-url.png)

1. 請在問卷的 `自訂感謝頁網址` 欄位，填入小工具網址，儲存設定。
    - `https://surveycake.github.io/webhook-answer-preview/`
2. 打開問卷進行填答，並送出問卷。
3. 送出問卷後，會自動跳轉到你填入的小工具網址
4. 此時你會在網址後方看到 SurveyCake 透過 GET method 傳送的 ${SVID} 與 ${HASH}
    - `?svid=${SVID}&hash=${HASH}`
5. 此時將網址上的 `${SVID}` 與 ${HASH} 填入小工具對應的欄位
6. 於 SurveyCake Admin 後台取得該份問卷的 webhook 解碼 Hash key & IV key，填入對應欄位
7. 按下 `get answer preview` 即可在右方查看到答案結構。


### 自己動手做

接下來，試著撰寫自己的 Webhook URL 邏輯吧。

我們提供如何串接 SurveyCake Webhook 的文件，請參閱另一個 Project: https://github.com/SurveyCake/webhook

