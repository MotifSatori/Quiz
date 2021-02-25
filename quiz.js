function check() {
    var c=0
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
    if (q1=="Swinging wide") {c++}
    if (q2=="Lanes of traffic traveling in opposite directions") {c++}
    if (q3=="Implied consent law") {c++}
    if (q4=="When the vehicle is stopped at a crosswalk") {c++}
    if (q5=="Slow down or stop") {c++}
    if (q6=="Yeild is approaching") {c++}
    if (q7=="You must stop") {c++}
    if (q8=="From 1/2 an hour after sunset to 1/2 an hour before sunrise") {c++}
    if (q9=="Back up") {c++}
    if (q10=="You may proceed through the intersection") {c++}
    quiz.style.display="none";
  
     if (c<=3) {
         result.textContent= 'You Failed :( Please refresh & try again.'
     } else {
         result.textContent= 'You Passed :) You are ready for the real thing! ' 
         
     }
}
