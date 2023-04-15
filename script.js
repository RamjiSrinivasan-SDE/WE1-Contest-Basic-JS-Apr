/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 1, name: "jenson", age: "21", profession:  "Doctor" },
  { id: 2, name: "victor", age: "24", profession:  "Tailor"},
  { id: 3, name: "kiran", age: "23", profession:  "Engineer" },
];
arr.map(PrintDeveloperswithMap);
function PrintDeveloperswithMap(arritem) {
  //Write your code here
  if(arritem.profession==="developer"){
    console.log(arritem);
  }
}
arr.forEach(PrintDevelopersbyForEach)
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  if(arritem.marks = developer ){
    console.log(arritem);
}}


function addData() {
  //Write your code here
  let newObj ={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin()  {


    const developerprofession = arr.filter( function (profession) {

       //condition
       return profession != admin;
    } )

your code here, just console.log
  console.log(developerprofession);
}

function concatenateArray() {
  //Write your code here, just console.log
  const community = arr.concat(arr1);
  console.log(community);
}