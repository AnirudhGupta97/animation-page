function funShowEthereeum(){
    document.getElementById("ethereeum").style.display = "block";
    document.getElementById("chain").style.display = "none";
    document.getElementById("amount").style.display = "none";

    // code
    document.getElementById("heading_h2").style.top = "20%";
    document.getElementById("heading_h6").style.top = "30%";
}
function funShowChain(){
    document.getElementById("chain").style.display = "block";
    document.getElementById("ethereeum").style.display = "none";
    document.getElementById("amount").style.display = "none";

    document.getElementById("heading_h2").style.top = "20%";
    document.getElementById("heading_h6").style.top = "30%";
}
function funShowamount(){
    document.getElementById("amount").style.display = "block";
    document.getElementById("chain").style.display = "none";
    document.getElementById("ethereeum").style.display = "none";
     document.getElementById("heading_h2").style.top = "20%";
    document.getElementById("heading_h6").style.top = "30%";
}
function funNotShow(){
    document.getElementById("amount").style.display = "none";
    document.getElementById("chain").style.display = "none";
    document.getElementById("ethereeum").style.display = "none";

     document.getElementById("heading_h2").style.top = "30%";
    document.getElementById("heading_h6").style.top = "40%";
}