//Student class Practice 

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    //Method to add grade 
    addGrade(grade) {
        this.grades.push(grade)
    }

    /*Normal method of finding average 
    getAverageGrade() {
        let sum = 0;

        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        let average = sum / this.grades.length;

        return average;
    }
*/ 
    //method of returning average grade using reduce() which reduces array to a single value; 
    //array.reduce(accumulator, currrentValue) => () 
    getAverageGrade() {
        let sum = this.grades.reduce((totalSum, num) => totalSum + num, 0); //(totalSum, num)= initialization. totalSum + num: takes num, which is the current value in the array, and add it to totalSum, which stores the sum. 0 initialize totalSum with 0 before the accumulation begins
        return sum / this.grades.length;
    }
    //Method to info
    displayStudentInfo() {
        console.log(`${this.name}: ${this.age}: ${this.grades}, ${this.getAverageGrade()}`)
    }

}

//Instance of Student. 
const student1 = new Student("Chino", 19); 
student1.addGrade(90); 
student1.addGrade(85); 
student1.addGrade(95); 
student1.displayStudentInfo()