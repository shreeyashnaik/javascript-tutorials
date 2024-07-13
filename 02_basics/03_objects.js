// const tinderUser = new Object() // Singleton object
// // const tinderUser = {}   // Non-singleton object

// tinderUser.Id = "123abc"
// tinderUser.name = "Sassy"
// tinderUser.isLoggedIn = false

// const regularUser = {
//     email: "some@gmai.com",
//     fullName: {
//         firstName: "Shreeyash",
//         lastName: "Naik"
//     }
// }

// console.log(regularUser.fullName.firstName);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {1: "c", 2: "d"}

// const obj3 = {...obj1, ...obj2} // Merge values of 2 objects
// const target = {}
// const returnedTarget = Object.assign(target, obj1, obj2) // Merge values of 2 objects
// console.log(target === returnedTarget);


// const usersFromDb =[
//     {

//     }
// ]


// const keys = Object.keys(tinderUser) // returns all keys
// const values = Object.values(tinderUser) // returns all values
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// De-structuring of Objects
const course = {
    courseName: "Complete SQL Mastery",
    courseInstructor: "Mr. Shreeyash Naik",
    coursePrice: 5999
}

const {courseInstructor: instructor} = course
console.log(instructor);


const navbar = ({company}) => { // instead of props.company

}

// APIs
// {
//     name: "Shreeyash",
//     course_name: "SQL mastery",
//     price: "free"
// }
