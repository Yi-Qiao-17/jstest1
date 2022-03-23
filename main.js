window.onload = function(){
    //document.write("Hello JavaScript");
}

/*$(function(){
    $("input").on("click",function(){
        //alert("Hi");//按鈕按了跳出視窗
        //$("h1").text("Hello");//按鈕按了可以改變那個問號
    });
});
*/
$(function(){
    $("input").on("click",function(){
        //debugger;
        var numberOfListItem = $("li").length;
        //Math.random() 0~1之間不到1 包含0.1 0.2 0.23 0.25...
        //Math.random()*numberOfListItem 0~1 *3 取floor = 0~2
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        x=document.getElementById("photo").src=(randomChildNumber+1)+".jpg";
    });
});

