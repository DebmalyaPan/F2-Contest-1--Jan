/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingThroghMap);
  function printingThroghMap(arrayElement) {
    if (arrayElement.profession === "developer") {
      console.log(arrayElement);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroghForEach);
  function printingThroghForEach(arrayElement) {
    if (arrayElement.profession === "developer") {
      console.log(arrayElement);
    }
  }
}

function addData() {
  //Write your code here
  let newObject = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObject);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filtered_arr = arr.filter(function (data) {
    if (data.profession !== "admin") {
      return data;
    }
  });
  console.log(filtered_arr);
  
}

function concatenateArray() {
  //Write your code here
  let newArr = [
    { id: 5, name: "Debmalya", age: "27", profession: "developer" },
    { id: 6, name: "Sourav", age: "26", profession: "developer" },
    { id: 7, name: "Somnath", age: "30", profession: "HR" },
  ];

  let concatArray = arr.concat(newArr);
  console.log(concatArray);
}
