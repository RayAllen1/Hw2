$(function(){
    $("input").on("click",function(){
        // alert("HI");
        // $("h1").text("hello");
        console.log(1);
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("#pic").html($("#choices li").eq(randomChildNumber).find('img').clone());
        
    });

});