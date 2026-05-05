// pet.js - 看板娘獨立邏輯檔案
(function() {
    // 1. 動態插入 HTML 結構
    const petHTML = `
    <div id="ai-pet-container" style="position:fixed; bottom:10px; right:10px; z-index:9999; text-align:right;">
        <div id="pet-bubble" style="background: rgba(255, 255, 255, 0.95); border: 2px solid #ffb7d5; padding: 12px 18px; border-radius: 20px 20px 0 20px; margin-bottom: 15px; font-size: 14px; color: #ff69b4; box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2); display: none; max-width: 220px; line-height: 1.5; position: relative; font-weight: bold;">
            喵？
            <div style="position: absolute; bottom: -10px; right: 20px; width: 0; height: 0; border-style: solid; border-width: 10px 10px 0 0; border-color: #ffb7d5 transparent transparent transparent;"></div>
            <div style="position: absolute; bottom: -7px; right: 21px; width: 0; height: 0; border-style: solid; border-width: 9px 9px 0 0; border-color: white transparent transparent transparent;"></div>
        </div>
        <div id="pet-character-shipper" style="cursor:pointer; position: relative;">
            <img id="pet-img-normal" src="1000085412.jpg" alt="看板娘" style="height: 250px; width: auto; filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15)); transition: transform 0.3s;">
            <img id="pet-img-wink" src="1000085421.jpg" alt="看板娘眨眼" style="height: 250px; width: auto; filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15)); display: none;">
            <img id="pet-img-chibi" src="1000085415.jpg" alt="看板娘Q版" style="height: 180px; width: auto; filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15)); display: none; margin-right: 20px;">
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', petHTML);

    // 2. 邏輯處理
    const bubble = document.getElementById('pet-bubble');
    const shipper = document.getElementById('pet-character-shipper');
    const imgNormal = document.getElementById('pet-img-normal');
    const imgWink = document.getElementById('pet-img-wink');
    const imgChibi = document.getElementById('pet-img-chibi');

    const normalQuotes = ["這裡就是你的秘密基地嗎？(*ﾟ∀ﾟ*)", "今天也要加油喔！✨", "一直看著我，我會害羞的... ( >д<)", "你是怎麼發現這裡的喵？"];
    const unlockedQuotes = ["哇！你進來了！好厲害喵！ฅ(•ㅅ•❀)ฅ", "這些寶物... 只能偷偷看喔！", "哼，既然進來了，就陪我玩一會吧？"];

    let bubbleTimer;

    function setExpression(type) {
        [imgNormal, imgWink, imgChibi].forEach(img => img.style.display = 'none');
        if (type === 'wink') imgWink.style.display = 'inline';
        else if (type === 'chibi') imgChibi.style.display = 'inline';
        else imgNormal.style.display = 'inline';
    }

    function showBubble(text) {
        bubble.innerText = text;
        bubble.style.display = 'block';
        clearTimeout(bubbleTimer);
        bubbleTimer = setTimeout(() => { 
            bubble.style.display = 'none';
            setExpression('normal');
        }, 4000);
    }

    shipper.onmouseover = () => { setExpression('wink'); imgWink.style.transform = 'scale(1.05)'; };
    shipper.onmouseout = () => { setExpression('normal'); imgWink.style.transform = 'scale(1)'; };

    shipper.onclick = () => {
        const isUnlocked = document.getElementById('secret-content').style.display === 'block';
        if (isUnlocked) {
            setExpression('chibi');
            showBubble(unlockedQuotes[Math.floor(Math.random() * unlockedQuotes.length)]);
        } else {
            setExpression(Math.random() > 0.5 ? 'wink' : 'normal');
            showBubble(normalQuotes[Math.floor(Math.random() * normalQuotes.length)]);
        }
    };
})();

