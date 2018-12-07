


// click on span to delete ingredient
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
});

$("input").keypress(function(event){
 if (event.which === 13){
    var addIngredient = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + addIngredient + "</li>")
 }
});



function addFood () {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=cooking&api_key=kRsHuhDISov3OLv59PyTyJHBnpNQclEY&limit=100";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var randomNumber = Math.floor(Math.random() * 100) + 1  
            var results = response.data;
                var foodDiv = $("#food");
                var foodImage = $("<img>");
                foodImage.attr("src", results[randomNumber].images.downsized.url);
                foodDiv.append(foodImage);
        });
};

$(function() {
    addFood();
  });