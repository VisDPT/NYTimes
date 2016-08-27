/*Instructions - Phase 1:

Front-End Team:

Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own.

Make sure to organize your code so as to have the necessary IDs.

Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in Javascript

Back-End Team:

Do preliminary research on the API.
NYT-API

Register for an API Key.

Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

Experiment with console logging various fields. */


///
console.log("TEST");
$(document).on("ready", function() {
    


$("#submit").on('click', function(ev){
	ev.preventDefault();
        var query=$("#search").val();
        var records=$("#records").val();
        var startYear=$("#start-year").val();
        var endYear=$("#end-year").val();
        var apiKey = "66b2b97b3a12440c9505e3662f4f2b47";

        var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ apiKey;

        console.log('working sort of');
        if(query.trim() === ""){
            console.log("query is empty");
        } else{
            queryURL = queryURL + "&q="+query;
        }
 
        if(records.trim() === ""){
            console.log("records is empty");
        } else{
            queryURL = queryURL + "&page="+records;
        }
        if(startYear.trim() !== ""){
            queryURL = queryURL + "&begin_date="+startYear;
        }
        if(endYear.trim() !== ""){
            queryURL = queryURL + "&end_date="+endYear;
        }
/*
        if(records.trim() === ""){
            console.log("query is empty");
        } else{
            queryURL = queryURL + "&q="+records;
        }
*/
        $.ajax({
            url:queryURL,
            method: 'GET'
        }).done(function(res){
            console.log(res);
            console.log(queryURL);
        });

        return false;
    });
});





//}); 
