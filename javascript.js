$("#search").on("click", function(){
    event.preventDefault()
    var searchTerm = $("#input-term").val().trim();
    var searchLimit = $("#record-number").val().trim();
    var searchYearStart = $("#start-year").val().trim();
    var searchYearEnd = $("#end-year").val().trim();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=c84qJLh0yVNb4dyLmVWeIDEG0n1fxgj5";    

    console.log("hey again")

    $.ajax({
        url: queryUrl,
        method: "GET"
    }) 
        .then(function(response){
        console.log(response);
        for (let i = 0; i< response.response.docs.length; i++){
            var results = response.response.docs
            console.log(response.response.docs[i].headline.main)
            //var articleList = $("<p>");
            //$(articleList).text(response.docs[0].headline.main);
            //$("#articles").append(articleList);
        }
        
    })
})

