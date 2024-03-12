const commonCourses=[]; 
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for (let i = 0; i < student1Courses.length; i++) {
    let course= student1Courses[i];
    if (student2Courses.includes(course)) {commonCourses.push(course);
    console.log("Se agrego "+ student1Courses[i]);};          
}

console.log(`Las materias que hay en común son: ${commonCourses}`);