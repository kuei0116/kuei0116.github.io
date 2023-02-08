function personality_aries(){
    var titletag = document.getElementById("title")
    titletag.innerText = '牡羊座-個性'
    var foundtag = document.getElementById("tag_div")
    foundtag.replaceChildren()
    var t1 = document.createElement("span")
    t1.innerText = '牡羊座的性格，可用一句話-「堅強」來代表。不論面對任何事情，都會全力以赴，牡羊的羊角正可用來說明這種個性。牡羊座的人，心中充滿正義感，以及強而有力的行動力，經常可以領導別人，坦誠的表達自己的意見，開朗的鼓勵同事，並受到別人的信賴和尊敬。此外，牡羊座的人。不願意墨守成規、固守陋習，其思想是屬於走在時代尖端的革新派。因此，也就會較沒耐性，有急躁、好強的傾向。有高度的容忍性，有不畏艱辛的意志力以及鬥爭本能。心中一旦有了理想，必能排除萬難，勇往直前。在新的環境下，能發揮拓荒者的精神，帶頭領軍，開創新機，頗有領導者的風範。同時，也有侵略的一面，最大的快樂是排除萬難，讓艱難的事情進入軌道。'
    foundtag.appendChild(t1)
    var t2 = document.createElement("span")
    var br1 = document.createElement("br")
    t2.innerText = '牡羊座的人是具有意志、勇氣、決斷、行動力、計畫、領導能力，是站在領導群眾的首領人物。擁有冒險進取的意識，積極邁進的精神，具開創性，能採取一切新的概念，也深具野心，同時具有勇氣與實際的行動去實現個人意志。但很少有始有終的完成你開創的事務。'
    foundtag.appendChild(br1)
    foundtag.appendChild(t2)
    var t3 = document.createElement("span")
    var br2 = document.createElement("br")
    t3.innerText = '牡羊座的人具有積極機動的人格，一生中個人的、社會的、經濟的各方面都決定於他個人對心智及感情的表現。是富有正義感的熱情人物，活潑明朗，具有迷人的舉止和良好的心智能力，喜歡受人尊敬，善於外交，具有冒險及企業的精神，愛好各種活動，為人親切，有俠義之心，慷慨氣質。'
    foundtag.appendChild(br2)
    foundtag.appendChild(t3)
    var t4 = document.createElement("span")
    var br3 = document.createElement("br")
    t4.innerText = '喜歡行動，是坦率型的，不願靜居家中，喜到處走，討厭受拘束，而且思想活躍，想像力豐富，也有直覺力，能預見，靈感豐富，心智活動熱烈，但易粗率行動，易憑衝動做事。'
    foundtag.appendChild(br3)
    foundtag.appendChild(t4)

    }