let arr = [];

for (i = 1; i <= 1000; i++) {
   arr.push(i);
};
console.log(arr);

let arr2 = [];

for (i = 0; i <= 1000; i++) {
   if (i % 10 == 0) {
     arr2.push(i);
   };
 };
 console.log(arr = arr2);

 let arr3 = [];

for (i = 0; i <= 1000; i++) {
   if (i % 15 == 0) {
      var result = arr3.filter((i)=>(i % 2));
      result.reverse();
     arr3.push(i);
 };
};
 console.log(result);



 let student1Courses = ['Math', 'English', 'Programming'];
 let student2Courses = ['Geography', 'Spanish', 'Programming'];


 var index = 0;
var student_result = [];
while(student1Courses.length > index){
   student_result.push(student1Courses[index] === student2Courses[index]);
  index++
}
console.log(student_result);