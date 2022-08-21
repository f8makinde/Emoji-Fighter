let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage");
let pickEl = document.getElementById("pick");
pickEl.addEventListener("click", function(){
 let randomEmoji = Math.floor( Math.random() * fighters.length );
 let randomEmojiTwo = Math.floor( Math.random() * fighters.length );
 stageEl.textContent = `${fighters[randomEmoji]} vs ${fighters[randomEmojiTwo]}`;
});
