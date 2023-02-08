function defect_aries(){
    var titletag = document.getElementById("title")
    titletag.innerText = '牡羊座-缺點'
    var foundtag = document.getElementById("tag_div")
    foundtag.replaceChildren()
    var t1 = document.createElement("span")
    t1.innerText ='缺乏耐性、暴躁、衝動、自私、以自我為中心、尖酸刻薄、好鬥、粗枝大葉而不細心。自我中心太強、急躁、缺乏耐性、粗心大意、有一點臭屁、說話欠考慮、做事瞻前不顧後、只有三分鐘熱度、容易腦羞成怒、缺乏時間觀念、不懂的照顧身體。衝動且有點焦慮。'
    foundtag.appendChild(t1)
    var t2 = document.createElement("span")
    var br1 = document.createElement("br")
    t2.innerText = '牡羊座凡事會往壞處想，是屬於悲觀主義者，太在意別人的看法而有些鑽牛角尖，由於做事以行動為優先，戰門精神太強可能顯得衝動，給人有壓迫感。'
    foundtag.appendChild(br1)
    foundtag.appendChild(t2)
}