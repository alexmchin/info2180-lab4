window.onload = function(){

    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.open('GET', url);
    httpRequest.send();
        
/*
    document.getElementById("button").addEventListener("click", function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
            } else {
            alert('There was a problem with the request.');
            }
           }

    });
*/

    document.getElementById("button").addEventListener("click", function() {
        input = document.getElementById("name");
        if(input == ""){
            document.getElementById("response").innerHTML = "Superhero not found";
        }
        else{
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    document.getElementById("response").innerHTML = response;
                } 
                else {
                    document.getElementById("response").innerHTML = "Superhero not found";
                }
            }
        }
    });


};