


function result1() {
    var sum=0;
    if (document.getElementById("c").checked){
        sum++;
    } 
    if (document.getElementById("b").checked){
        sum++;
    } 
    if (document.getElementById("b").checked){
        sum++;
    } 
    if (document.getElementById("b").checked){
        sum++;
    } 
    if (document.getElementById("d").checked){
        sum++;
    } 
    if (document.getElementById("a").checked){
        sum++;
   } 

   
 var ans=sum*20;
 alert("score" + ans +"%")
    document.write("score" + ans +"%")

    if (ans>=80){
       document.write("excellent")

    document.getEmentById("quiz"). innerHTML = "You scored  " + score + "%" + "<br>" + "excellent"
       
    }
    else if (ans<80 && ans<=50){
        document.write(" You fairly passed")

    document.getEmentById("quiz"). innerHTML = "You scored  " + score + "%" + "<br>" + "You fairly passed"
    }
    else if (ans<50){
        document.write("poorly performed")

    document.getEmentById("quiz"). innerHTML = "You scored  " + score + "%" + "<br>" + "poorly performed"
    }
    
   
}
submitButton.addEventListener('click')
   

