$(document).ready(function () { 
    var randomQuote;  
    var randomAuthor;
    getQuote();
    function getQuote() { 
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        
        $.getJSON(url, function (data) {
            $(".quote").html('"' + data.quoteText + '"');
            $(".author").html("-" + data.quoteAuthor);
        });
    }
    $("#newQuote").on("click", function() { 
        getQuote(); 
    });
});