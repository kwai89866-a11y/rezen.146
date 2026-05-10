<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>喵！(っ●ω●)っ 這裡是私人領域喔！</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #ffeef8; 
        }

        .container {
            background: white;
            padding: 2.5rem;
            border-radius: 30px;
            box-shadow: 0 15px 35px rgba(255, 105, 180, 0.25);
            text-align: center;
            max-width: 400px;
            width: 90%;
            border: 4px solid #ffb7d5;
        }

        h2 { color: #ff69b4; }
        label { display: block; margin-top: 15px; color: #ff85c0; font-weight: bold; }

        /* 恢復最原始的 input 樣式，確保不干擾手寫 */
        input {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 2px solid #ffd1e8;
            border-radius: 15px;
            box-sizing: border-box;
            text-align: center;
            font-size: 16px; /* 解決 iOS 鍵盤問題的關鍵尺寸 */
        }

        button {
            background: #ff69b4;
            color: white;
            border: none;
            padding: 14px 20px;
            border-radius: 25px;
            width: 100%;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
        }
        
        #secret-content { display: none; }

        .link-item {
            display: block;
            margin: 15px 0;
            padding: 14px;
            background: #fff0f5;
            text-decoration: none;
            color: #ff69b4;
            border-radius: 18px;
            border: 2px dashed #ffb7d5;
        }
    </style>
</head>
<body>

<div class="container">
    <div id="auth-zone">
        <h2>(๑•̀ㅁ•́๑) 驗證身份</h2>
        
        <label>✨ 你的降生日是哪一天呢？</label>
        <input type="password" id="q1" placeholder="0501">
        
        <label>🏀 你最喜歡跟我一起玩的運動是？</label>
        <input type="text" id="q2" placeholder="籃球/篮球">
        
        <button onclick="val()">進入基地 (//●⁰౪⁰●//)</button>
        <p id="error-msg" style="color: red; display: none; margin-top: 15px;">答案不正確喔！</p>
    </div>

    <div id="secret-content">
        <h2>(੭ु´ ᐜ `)੭ु⁾⁾ 歡迎回來！</h2>
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=403016" class="link-item" target="_blank">🌸 傳送門 A</a>
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=104062" class="link-item" target="_blank">🌸 傳送門 B</a>
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=110108" class="link-item" target="_blank">🌸 傳送門 C</a>
        <a href="https://www.google.com/search?q=https://www.google.com" class="link-item" target="_blank">🔍 Google</a>
        
        <button onclick="location.reload()">退出</button>
    </div>
</div>

<script>
    function val() {
        const u1 = document.getElementById('q1').value.trim();
        const u2 = document.getElementById('q2').value.trim();
        
        // 直接判定，不使用複雜加密
        const isBirthdayCorrect = (u1 === "0501");
        const isSportCorrect = (u2 === "籃球" || u2 === "篮球");

        if (isBirthdayCorrect && isSportCorrect) {
            document.getElementById('auth-zone').style.display = 'none';
            document.getElementById('secret-content').style.display = 'block';
        } else {
            document.getElementById('error-msg').style.display = 'block';
        }
    }
</script>

</body>
</html>

