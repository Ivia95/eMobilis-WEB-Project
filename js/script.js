//1. When accessing DOM, check if the content has loaded first
document.addEventListener("DOMContentLoaded", function(){
    let myDiv = document.getElementById("footDiv")
    console.log(myDiv)
    // Manipulation
    // Change content
    let emptyPara = document.getElementById("emptyPara")
    emptyPara.innerText = "THIS IS THE EMOBILIS PAGE"
    //change element attributes
    emptyPara.setAttribute("class","styledPara")
    //change style
    emptyPara.style.fontSize = '40px'
    emptyPara.style.borderRadius = "20px"

})