<?php
// メールの送信先
$to = "your-email@example.com"; // 送信先のメールアドレスに変更

// フォームからのデータを取得
$name        = isset($_POST['name']) ? htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') : '';
$company     = isset($_POST['company']) ? htmlspecialchars($_POST['company'], ENT_QUOTES, 'UTF-8') : '';
$email       = isset($_POST['email']) ? htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') : '';
$phoneNumber = isset($_POST['phoneNumber']) ? htmlspecialchars($_POST['phoneNumber'], ENT_QUOTES, 'UTF-8') : '';
$postCode    = isset($_POST['postCode']) ? htmlspecialchars($_POST['postCode'], ENT_QUOTES, 'UTF-8') : '';
$prefecture  = isset($_POST['prefecture']) ? htmlspecialchars($_POST['prefecture'], ENT_QUOTES, 'UTF-8') : '';
$city        = isset($_POST['city']) ? htmlspecialchars($_POST['city'], ENT_QUOTES, 'UTF-8') : '';
$houseNumber = isset($_POST['houseNumber']) ? htmlspecialchars($_POST['houseNumber'], ENT_QUOTES, 'UTF-8') : '';
$body        = isset($_POST['body']) ? nl2br(htmlspecialchars($_POST['body'], ENT_QUOTES, 'UTF-8')) : '';
$privacy     = isset($_POST['privacy']) ? '同意する' : '同意しない';

// メールの件名
$subject = "お問い合わせがありました - $name";

// メール本文の作成
$message = "
【お問い合わせ内容】

■ お名前：
$name

■ 会社・組織名：
$company

■ メールアドレス：
$email

■ 電話番号：
$phoneNumber

■ 住所：
〒$postCode
$prefecture $city $houseNumber

■ お問い合わせ内容：
$body

■ 個人情報の取扱い：
$privacy
";

// メールのヘッダー情報
$headers = "From: no-reply@example.com\r\n"; // 送信元アドレスを適宜変更
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// メール送信処理
if (mail($to, $subject, $message, $headers)) {
    // 送信成功時の処理
    header("Location: index.php"); // 送信後にサンクスページへリダイレクト
    exit();
} else {
    echo "メールの送信に失敗しました。";
}
?>



<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>送信完了</title>

  <!-- OGP -->
  <meta property="og:url" content=""> <!-- //ページのURLを設定 -->
  <meta property="og:type" content=""> <!-- //ページの種類を設定 -->
  <meta property="og:title" content=""> <!-- //ページのタイトルを設定 -->
  <meta property="og:description" content=""> <!-- //ページのディスカッションを設定 -->
  <meta property="og:site_name" content=""> <!-- //サイトの名前を設定 -->
  <meta property="og:image" content=""> <!-- //ogp画像の設定 -->
  <meta property="og:locale" content="ja_JP"> <!-- //ページの国コードの設定 -->

  <!-- Import Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- Import CSS -->
  <link rel="stylesheet" href="assets/css/styles.css">

  <!-- Import JS/jQuery Library -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossorigin="anonymous">
  </script>
</head>
<body>
  <div class="l-wrapper">
    <div class="p-form-complete">
      <div class="p-form-complete__container">
        <div class="p-form-complete__heading">
          <h2 class="c-heading">送信完了</h2>
        </div>
        <div class="p-form-complete__body">
          <div class="p-form-complete__body__text">
            <p>ご入力いただいたメールアドレス宛に受付確認メールをお送りしましたのでご確認ください。</p>
            <p>確認メールが届いていない場合には、メールアドレスが誤っているか、確認メールが迷惑メールフォルダ等に振り分けられている可能性がありますので、再度ご確認をお願いいたします。</p>
            <p>なお、お問い合わせの内容によっては、ご回答まで数日かかる場合もございます。恐れ入りますが、予めご了承くださいますようお願いいたします。</p>
            <p>万一、ご回答メールが届かない場合は、送信トラブル等の可能性もありますので、大変お手数ではございますが、もう一度フォームよりお問い合わせいただくか、お電話にてお問い合わせをお願いいたします。</p>
          </div>
          <div class="p-form-complete__body__redirect">
            <a href="index.php">←ページに戻る</a>
          </div>
        </div>
      </div>
    </div>
    <!--======== footer ========-->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-privacyPolicy">
          <a href="">プライバシーポリシー</a>
        </div>
        <div class="footer-copyright">
          <small>Copyright © 株式会社オールシーズン All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  </div>
  <script src="assets/js/main.js"></script>
</body>
</html>