//Uc-1 Check Employee is Present Or Absent

let empCheck = Math.floor(Math.random() * 10) % 3;
console.log("UC-1")
const IS_ABSENT = 0;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    console.log("_______________________________________________");
}else{
    console.log("Employee is Present");
    console.log("_______________________________________________");
}