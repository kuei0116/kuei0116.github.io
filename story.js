function story_aries(){
    var titletag = document.getElementById("title")
    titletag.innerText = '牡羊座-故事'
    var foundtag = document.getElementById("tag_div")
    foundtag.replaceChildren()
    var t1 = document.createElement("span")
    t1.innerText = '希臘國王亞瑟馬斯另娶底庇斯王國的公主依娜為后，而狠心的依娜卻想謀害王子 Phrixus，好讓自己的兒子可以在將來繼承王位。依娜將國內所有穀物的種籽集中，偷偷的煮熟以後再分給人民，結果穀類自然無法生長，造成全國陷入饑荒；又跟神殿的使者串通，假稱是天神降怒，必須將王子弗利克索斯祭獻才可平息饑荒。國王最後終於聽信了依娜的奸計，當王子將被送上祭壇的那一剎那眾神天使 Hermes 接受了王子生母的請求，派遣了一頭公羊，長著金色的羊毛和翅膀從天而降，將王子自祭壇載走；一起越過達達尼爾海峽，最後順利地在黑海邊的克爾奇斯國登陸。弗利克索斯為了感激自己得救，便將白羊獻給了眾神之王 Zeus，並把金色的羊毛送給克爾奇斯國的國王。而宙斯將其放到天上化成了牡羊座。'
    foundtag.appendChild(t1)
}
