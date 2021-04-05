function openCity(evt, myName) {
    var i, tabcontent, tablinks;
    /*抓取頁面中的tabcontect */
    tabcontent = document.getElementsByClassName("tabcontent");
    //計算x的長度並將這些tabcontent="tabcontent"都進行display:none隱藏的動作
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    //tablinks 抓取頁面中的tablinks
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
        //將tablinks代入for循環中並利用className.replace移除active ，就是每執行一次function的時候就進行全部tablinks換成空白
    }
    document.getElementById(myName).style.display = "block";
    //document.getElementById=className(函數帶進來的參數)樣式設定為display:block; 當前點擊的a link執行function 顯示出來對應的內容。
    evt.currentTarget.className += "active";
    //並對當前點擊的 a link 新增"active"這個動作
}