const searchWord1 = "школа";
const searchWord2 = "schule";

function search(){
    const inputWord = document.getElementById("searchInput").value.toLowerCase();
    if(inputWord === searchWord1 || inputWord === searchWord2){
        
        document.body.style.backgroundImage = "url('images/yeah.gif')";
        document.getElementById("container").style.display = "none";
        document.getElementById("congratulation").style.display = "block";
    } else{
        document.body.style.backgroundImage = "url('images/giphy-bkg.gif')";
        
    }
}