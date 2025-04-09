const student = [
  {
    rollno: 123,
    name: "Adam",
  },
  {
    rollno: 456,
    name: "Jhon",
  },
  {
    rollno: 789,
    name: "Mitchel",
  },
  {
    rollno: 965,
    name: "Harry",
  },
];

// // find a student details wrt. rollno
// let studentDetails = student.find((item) => item.rollno === 123);
// if (typeof studentDetails === "undefined") {
//   console.log("value not found");
// } else {
//   console.log(studentDetails);
// }

// let index = student.findIndex((item) => item.rollno === 456);

// console.log(index > -1 ? student[index] : "Data not found");

// add a property in every student details
let updatedStudent = student.map((item) => {
  return {
    ...item,
    instituteName: "xyz clg",
  };
});
console.log(updatedStudent);

// let getEle = updatedStudent.find((item)=> item.rollno === 123);
// getEle.instituteName = "abc college";

let getIdx = updatedStudent.findIndex((item) => item.rollno === 123);
if (getIdx > -1) {
  let getDetails = updatedStudent[getIdx];
  getDetails.instituteName = "abc clg";
  updatedStudent[getIdx] = getDetails;
} else {
  console.log("Data updation failed");
}
console.log(updatedStudent);
