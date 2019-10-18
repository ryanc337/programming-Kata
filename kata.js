const organizeInstructors = function(instructors) {
  let newObject = {};
  for (const key in instructors) {
    if (instructors[key]['course'] === "iOS") {
      if (newObject['iOS']) {
        newObject['iOS'] += [instructors[key]['name']]
        
      } else {
        newObject['iOS'] = [instructors[key]['name']]
        
      }
    } else if (instructors[key]['course'] === "Web") {
      if (newObject['Web']) {
        newObject['Web'] += [instructors[key]['name'] + " "]
         
      } else {
        newObject['Web'] = [instructors[key]['name']]
      }
    } else {
      if (newObject['Blockchain']) {
        newObject['Blockchain'] += [instructors[key]['name']]
         
      } else {
        newObject['Blockchain'] = [instructors[key]['name']]
      }
    }
  }
  return newObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }