
function add(){
//  q=document.getElementById("no").value;
let q =prompt("Enter number of Questions :");
 let question = "";
// // let option = "";

 for (let i = 1; i <= q; i++) {

    question += `<div id="questions">
            <ul class="option_group">
            <li class="option"><input type="text" placeholder="Enter Question.." class="input" id="ques"></li>
            <li class="option"><input type="text" placeholder="option 1" class="input" id="O1"></li>
            <li class="option"><input type="text" placeholder="option 2" class="input" id="O2"></li>
            <li class="option"><input type="text" placeholder="option 3" class="input" id="O3"></li>
            <li class="option"><input type="text" placeholder="option 4" class="input" id="O4"></li>
            <li class="option"><input type="text" placeholder="Answer.." class="input" id="ans"></li>
            <li class="option"><input type="submit" value="ADD" class="add_btn" onclick="quizData()"></li>
            
            <hr>
          </ul>
        </div>`;
                
}
    document.getElementById("questions").innerHTML = question;
}
    
// // var gg=document.getElementsByClassName("ques").value;
// // console.log(gg);



 function quizData(){
    
    var ques = document.getElementById("ques").value;
    var q1 = document.getElementById("O1").value;
    var q2 = document.getElementById("O2").value;
    var q3 = document.getElementById("O3").value;
    var q4 = document.getElementById("O4").value; 
    var ans = document.getElementById("ans").value; 
    var arr = [ques,q1,q2,q3,q4,ans];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    
    let questi=[1,2,3,4,5,6];
    const myJSON = JSON.stringify(arr);
   
    for(var j=0;j<arr.length;j++){
        for(var k=0;k<questi.length;k++){
        
            localStorage.setItem(questi[k],myJSON);         
        }
   
    }
 }
//       let arr ={};
//     var ques = document.getElementsByClassName("ques").value;
//     var q1 = document.getElementsByClassName("O1").value;
//     var q2 = document.getElementsByClassName("O2").value;
//     var q3 = document.getElementsByClassName("O3").value;
//     var q4 = document.getElementsByClassName("O4").value; 
//     console.log(ques);
//     arr = [ques,q1,q2,q3,q4];
//     console.log(arr[0]);
 
//     return arr;
//   }
//   var abc = quizData(arr);
//   function setq(abc){
//     localStorage.setItem("ques",arr[0]);
//     localStorage.setItem("q1",arr[1]);
//     localStorage.setItem("q2",arr[2]);
//     localStorage.setItem("q3",arr[3]);
//     localStorage.setItem("q4",arr[4]);
// }