function advantage_aries(){
    var titletag = document.getElementById("title")
    titletag.innerText = '牡羊座-優點'
    var foundtag = document.getElementById("tag_div")
    foundtag.replaceChildren()
    var t1 = document.createElement("span")
    t1.innerText ='深愛自由，不喜歡受到外界的壓抑、有企圖心和冒險精神、勇於嘗試、精力旺盛、一旦確定目標就會全力以赴、做事積極、熱情有活力有擔當、講義氣、樂觀進取、有自信、勇於接受新觀念、有明快的決斷力、坦白率真、爆發力強、勇於接受挑戰、不畏權勢。做事迅速．積極．屬完美主義的行動派強人型。'
    foundtag.appendChild(t1)
    var t2 = document.createElement("span")
    var br1 = document.createElement("br")
    t2.innerText = '牡羊座對每件事都充滿熱誠，想到的事都會馬上付諸行動，並且是個元對主義者，處事以要求完美為原則，充滿衝勁與幹勁，喜歡幫助弱者，對於求助都一定會伸出援手，是個正義使者，並有領導者風範的典型者。'
    foundtag.appendChild(br1)
    foundtag.appendChild(t2) 
}