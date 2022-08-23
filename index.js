let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁", "🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐮", "🐷", "🐗", "🐭", "🐹", "🐰", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐴", "🦄","🐔", "🐲", "🐽","🐒", "🦍", "🦧","🦮", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌","🦬", "🦏" , "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦘", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐢", "🦖", "🦕", "🦦", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦜", "🦩", "🦚", "🦉", "🦤", "🐦", "🐧", "🐥", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝"]


let stageEl = document.getElementById("stage");
let pickEl = document.getElementById("pick");
let fightEl = document.getElementById("fight");
let deleted = document.getElementById("del");

function change(){
let randomEmoji = Math.floor( Math.random() * fighters.length );
let randomEmojiTwo = Math.floor( Math.random() * fighters.length );
 return `${fighters[randomEmoji]} vs ${fighters[randomEmojiTwo]}`;
}


pickEl.addEventListener("click", function(){
 stageEl.textContent = change()
});




deleted.addEventListener("click", function(){
    stageEl.textContent = "";
})
