function check() {
    var correct=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Swinging wide") {correct++}
    if (q2=="Lanes of traffic traveling in opposite directions") {correct++}
    if (q3=="Implied consent law") {correct++}
    if (q4=="When the vehicle is stopped at a crosswalk") {correct++}
    if (q5=="Slow down or stop") {correct++}
    if (q6=="Yeild is approaching") {correct++}
    if (q7=="You must stop") {correct++}
    if (q8=="From 1/2 an hour after sunset to 1/2 an hour before sunrise") {correct++}
    if (q9=="Back up") {correct++}
    if (q10=="You may proceed through the intersection") {correct++}
    quiz.style.display="none";
  
     if (correct<=7) {
         result.textContent= 'You Failed :( Please refresh & try again.'
     } else {
         result.textContent= 'You Passed :) You are ready for the real thing! ' 
         
     }
}
