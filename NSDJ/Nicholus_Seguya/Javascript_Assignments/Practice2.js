//This function Checks for the best done Test
let check_best_done = (t1, t2) => {//Takes in two parameters Test1 and Test2
    let best = (t1 > t2) ? t1 : t2;//Checking for best done Test
    console.log("The Mark for best done Test is :\t" + best);//Output The Value for best done Test
    return best;//Return Value for Best Done Test for other functions to use
}// End of Function.

//This function is to compute the average of the corsework and the best done test out of 40 percent
let cosWork = (t1, t2, cos_mark) => {//Takes in three parameters Test1 ,Test2 and Corsework Mark  
    let sum_test_cwk = check_best_done(t1, t2) + cos_mark;//Get  the sum of the corsework mark and the value returned by the first fucnction
    let avg = sum_test_cwk / 2;//Get the average of the sum of corsework mark and the best done test.
    let mark_outOf_40 = avg * (40 / 100);//Compute the average mark out of 40 percent 
    console.log("The Mark Out of 40% is :\t" + mark_outOf_40);//Output the mark out of 40
    return mark_outOf_40;//Return the mark out of 40 percent for other functions to use
}//End of Fucntion


//This Computes the final mark out of 100 percent
let final_mark = (t1, t2, cos_mark, exam_mark) => {//It takes in 4 paramaters
    let exam_outOf_60 = exam_mark * (60 / 100);//Compute the exam mark out of 60 percent
    let mark_outOf_100 = exam_outOf_60 + cosWork(t1, t2, cos_mark); //Get the sum of the Mark out 40% and the Mark out of 60%
    console.log("The Mark Out of 60% is :\t" + exam_outOf_60) //Output the sum as the Final Mark out of 60%
    console.log("The Final Mark Out of 100% is :\t" + mark_outOf_100); //Output the sum as the Final Mark out of 100%
}//End Of Function

final_mark(50, 70, 80, 40);//Invoking Function First Trial
console.log("========================= End of First Trial ================================")
final_mark(40, 40, 40, 40);//Invoking Function Second Trial
console.log("========================= End of Second Trial ================================")
final_mark(60, 40, 80, 70);//Invoking Function Third Trial


