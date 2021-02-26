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
    var q11=document.quiz.question11.value;
    var q12=document.quiz.question12.value;
    var q13=document.quiz.question13.value;
    var q14=document.quiz.question14.value;
    var q15=document.quiz.question15.value;
    var q16=document.quiz.question16.value;
    var q17=document.quiz.question17.value;
    var q18=document.quiz.question18.value;
    var q19=document.quiz.question19.value;
    var q20=document.quiz.question20.value;
    var result=document.getElementById("result");
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
    if (q11=="Pull over the right edge of the roadway") {correct++}
    if (q12=="Stop sign") {correct++}
    if (q13=="Pass along the shoulder") {correct++}
    if (q14=="Both A and B") {correct++}
    if (q15=="Exceed the speed limit") {correct++}
    if (q16=="Go right to take Exit 44") {correct++}
    if (q17=="handicapped parking zone") {correct++}
    if (q18=="Come to a complete stop and check your surroundings") {correct++}
    if (q19=="No U-turns allowed") {correct++}
    if (q20=="Railroad crossing") {correct++}
    quiz.style.display="none";
    head.style.display = "none";

  
     if (correct<=14) {
         result.textContent= 'You Can Do Better :( Refresh & try again.';
         result.innerHTML += '<img src = "https://www.digitalartsonline.co.uk/cmsdata/features/3782497/05.gif" width = "400" height = "400">';
     } else {
         result.textContent= 'You Passed :) You are ready for the real thing! '; 
         result.innerHTML += '<img src = "https://www.digitalartsonline.co.uk/cmsdata/features/3782497/04.gif" width = "400" height = "400">';
     }
}
