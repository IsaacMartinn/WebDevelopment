$("h1").addClass("big-title");

// $(document).keypress(function(event){
//     console.log(event.key);
//     $("h1").text(event.key);
// })

$("button").on("click",function(){
    $("h1").fadeOut();
})