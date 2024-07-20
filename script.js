let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee) => {
    if (employee.profession == "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession == "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "alice", age: "22", profession: "manager" },
    { id: 5, name: "bob", age: "21", profession: "developer" },
    { id: 6, name: "charlie", age: "23", profession: "designer" },
  ];
  let concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
