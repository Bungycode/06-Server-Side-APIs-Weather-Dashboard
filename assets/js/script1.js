
// function getWeatherApi() {
//   var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={faf4114a34574ace15305ce081f94248}"
//   fetch(requestUrl)
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data);

//     for (var i = 0; i < data.length; i++) {
//       var createtableRow = document.createElement("tr");
//       var createTableDataCell = document.createElement("td");
//       var createLink = document.createElement("a");
      
//       // link.textContent = data[i].
//     }
//   });
// }


// weatherResult.addEventListener("click", getWeatherApi);




// function arrayDiff(a,b) {
//   // Temporary array, containing all values from a, which are not contained in b
//   let diffArray = [];
//   // Looping over a
//   for(let i = 0; i < a.length; i++) {
//       // Per default we say that b does not contain a
//       let bContainsAValue = false;
//       // Loop over b
//       for(let y = 0; y < b.length; y++) {
//           // If any value in b is the same as the current value from a, we set bContainsAValue to true
//           if(a[i] === b[y]) bContainsAValue = true;
//           console.log("a[i] = " + a[i] + "b[y] = " + b[y]);
//       }
//       // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
//       console.log()
//       if(!bContainsAValue) 
//       console.log(a[i]);
//       diffArray.push(a[i]);
//       console.log(diffArray)
//   }
//   // In the end we return the temporary array
//   return diffArray;
// }

// arrayDiff([1,2],[3,5,6,7,1,0]);