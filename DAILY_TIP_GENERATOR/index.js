const http = require('http');
const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

//response on server
const server = http.createServer((req, res) => {

    //xml req

    let xhttp = new xmlhttprequest;
    xhttp.open("GET", "https://api.adviceslip.com/advice", true);
    xhttp.send();
    let obj;
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let convAdvice=JSON.parse(xhttp.responseText);
             obj=convAdvice.slip.advice;
            // console.log(obj);
           res.write(obj);
           res.end();
            
            // let ele=document.getElementsByClassName('advice');
            // ele.innerHTML=obj;


            // console.log(JSON.parse(xhttp.responseText));
            // console.log(xhttp.responseText);//text format
        }
    }
    
    //xml req


    // res.write("Everything  is set");
    
});


server.listen('3000');















