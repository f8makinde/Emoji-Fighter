let fighters = ["ð", "ðĨ", "ð", "ðĐ", "ðĶ", "ðĒ", "ðĐ", "ðĶ­", "ðĶ", "ð", "ðĪ", "ð", "ðļ", "ð·", "ð", "ðĶ", "ðĶ", "ðĩ", "ðķ", "ðš", "ðą", "ðĶ", "ðŊ", "ðĶ", "ðĶ", "ðĶ", "ðŪ", "ð·", "ð", "ð­", "ðđ", "ð°", "ðŧ", "ðŧââïļ", "ðĻ", "ðž", "ðļ", "ðĶ", "ðī", "ðĶ","ð", "ðē", "ð―","ð", "ðĶ", "ðĶ§","ðĶŪ", "ðâðĶš", "ðĐ", "ð", "ð", "ðââŽ", "ð", "ð", "ð", "ðĶ","ðĶŽ", "ðĶ" , "ðĶ", "ð", "ð", "ð", "ð", "ð", "ð", "ð", "ðŠ", "ðŦ", "ðĶ", "ðĶ", "ðĶĻ", "ðĶĄ", "ð", "ðĶĢ", "ð", "ð", "ðĶ", "ð", "ðŋïļ", "ðĶŦ", "ðĶ", "ðĒ", "ðĶ", "ðĶ", "ðĶĶ", "ðĶ", "ðŽ", "ðĶ­", "ðģ", "ð", "ð", "ð ", "ðĄ", "ðĶ", "ðĶ", "ð", "ðĶ", "ðĶ", "ð", "ðĶ", "ð", "ðĶ", "ðĶ", "ðïļ", "ðĶ", "ðĶĐ", "ðĶ", "ðĶ", "ðĶĪ", "ðĶ", "ð§", "ðĨ", "ðĪ", "ðĢ", "ðĶ", "ðĶ", "ð", "ð", "ðĶ", "ðŠ°", "ðŠą", "ðĶ", "ð", "ðŠģ", "ð"]


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
