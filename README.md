<!DOCTYPE html>
<html lang="zh-Hant" translate="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google" content="notranslate">
    <title>喵！(っ●ω●)っ 這裡是私人領域喔！</title>
    <style>
        body {
            font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            /* 粉嫩嫩的動漫風配色 */
            background-color: #ffeef8; 
            background-image: radial-gradient(#ffc1e3 1.5px, transparent 1.5px);
            background-size: 30px 30px;
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
            position: relative;
        }
        h2 { 
            color: #ff69b4; 
            margin-bottom: 10px;
            text-shadow: 1px 1px 0px #fff;
        }
        p { 
            color: #888; 
            font-size: 14px; 
            line-height: 1.6;
        }
        
        label {
            display: block;
            margin-top: 15px;
            color: #ff85c0;
            font-weight: bold;
            font-size: 14px;
        }

        input {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 2px solid #ffd1e8;
            border-radius: 15px;
            background: #fffafa;
            box-sizing: border-box;
            outline: none;
            transition: all 0.3s ease;
            text-align: center;
        }
        input:focus { 
            border-color: #ff69b4; 
            box-shadow: 0 0 10px rgba(255,105,180,0.3);
            background: #fff;
        }

        button {
            background: linear-gradient(45deg, #ff9a9e 0%, #ff69b4 100%);
            color: white;
            border: none;
            padding: 14px 20px;
            border-radius: 25px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(255, 105, 180, 0.3);
        }
        button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 15px rgba(255, 105, 180, 0.4);
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
            transition: all 0.3s;
            border: 2px dashed #ffb7d5;
            font-weight: bold;
        }
        .link-item:hover {
            background: #ff69b4;
            color: white;
            transform: rotate(-1.5deg) scale(1.03);
            border-style: solid;
        }

        .logout-btn {
            background: #e0e0e0;
            color: #666;
            margin-top: 25px;
            font-size: 14px;
            box-shadow: none;
        }
        .logout-btn:hover {
            background: #d0d0d0;
            box-shadow: none;
            color: #333;
        }
    </style>
</head>
<body>

<div class="container">
    <div id="auth-zone">
        <h2>(๑•̀ㅁ•́๑) 🛑 停止符！</h2>
        <p>「哼，居然敢隨便亂闖別人的秘密基地...<br>不、不過，如果是你的話，回答對問題就讓你進去喔！」</p>
        
        <label for="q1">✨ 你的降生日是哪一天呢？</label>
        <input type="text" id="q1" placeholder="一定要記得喔 (eg.0101)">
        
        <label for="q2">🏀 你最喜歡跟我一起玩的運動是？</label>
        <input type="text" id="q2" placeholder="答錯的話我會生氣喔！">
        
        <button onclick="checkAnswers()">驗證身份 (//●⁰౪⁰●//)</button>
        <p id="error-msg" style="color: #ff4d4d; display: none; margin-top: 15px; font-weight: bold;">
            「笨、笨蛋！這才不是正確答案呢！再試一次啦 ( >д<)」
        </p>
    </div>

    <div id="secret-content">
        <h2>(੭ु´ ᐜ `)੭ु⁾⁾ 歡迎回來！</h2>
        <p>「好啦，這些是你珍藏的寶物...<br>只能偷偷看喔，絕對不能給別人發現！」</p>
        
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=403016" class="link-item" target="_blank">🌸 傳送門：私密數據 A</a>
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=104062" class="link-item" target="_blank">🌸 傳送門：私密數據 B</a>
        <a href="https://www.google.com/search?q=https://hanime1.me/watch?v=110108" class="link-item" target="_blank">🌸 傳送門：私密數據 C</a>
        
        <button onclick="location.reload()" class="logout-btn">快跑！有人來了 (登出/鎖定)</button>
    </div>
</div>

<script>
    function checkAnswers() {
        // 在邏輯深處隱藏答案，避免翻譯器抓取
        const _miau_key1 = "0501";
        const _miau_key2 = "籃球";

        const u1 = document.getElementById('q1').value.trim();
        const u2 = document.getElementById('q2').value.trim();

        if (u1 === _miau_key1 && u2 === _miau_key2) {
            // 切換畫面
            document.getElementById('auth-zone').style.display = 'none';
            document.getElementById('secret-content').style.display = 'block';
            console.log("🌸 歡迎進入守護者的秘密空間 🌸");
        } else {
            // 顯示錯誤
            document.getElementById('error-msg').style.display = 'block';
            // 震動效果（小彩蛋）
            const container = document.querySelector('.container');
            container.style.animation = 'none';
            setTimeout(() => { container.style.border = '4px solid #ff4d4d'; }, 10);
            setTimeout(() => { container.style.border = '4px solid #ffb7d5'; }, 500);
        }
    }
</script>

</body>
</html>

