var cinemas=["The Backlot Perth","Capri Theatre","Mercury Cinema"]
 var text = "Australian cinemas:"
for (var i=0; i<cinemas.length; i++){
     document.getElementById("id1").innerHTML+=text+" "+ cinemas[i]+"</br>";
    
 }
var language=["English","Russian","korean"]
var text1="Watch movies in the following languages:"
for (var i=0; i<cinemas.length; i++) {
    document.getElementById("id2").innerHTML+=text1 + language[i]+"</br>";
}

var movies=[" Goodfellas","oldboy"," forest gump"]
var text2="IMDB RATINGS:"
var text3 = ["8.7"]
for (var i=0; i<cinemas.length; i++) {
    document.getElementById("id3").innerHTML+=text2+text3+movies[i]+"</br>";
}
