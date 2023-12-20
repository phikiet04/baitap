//1
let arr = [];
for (let i = 0; i < 10; i++) {
  let n = prompt("Nhập phần tử thứ " + (i+1));
  n = parseInt(n);
  arr.push(n); 
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 
}
//2
tinhtongphantumang = [] 
    var giatri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    var sum = 0;
    for (var i = 0; i < giatri.length; i++) {
      sum += giatri[i];
    }
    console.log("Tổng các phần tử của mảng: " + sum);
    if (sum % 2 === 0) {
        console.log("Tổng là số chẵn.");
      } else {
        console.log("Tổng là số lẻ.");
      }
      //3
      var evenCount = 0;
      var oddCount = 0;
    
      for (var i = 0; i < giatri.length; i++) {
        if (giatri[i] % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
      console.log("Số phần tử chẵn trong mảng: " + evenCount);
      console.log("Số phần tử lẻ trong mảng: " + oddCount);  
///4
var ascendingArr = giatri.slice().sort(function(a, b) {
    return a - b;
  });
  console.log("Mảng sắp xếp tăng dần: " + ascendingArr);
  var descendingArr = giatri.slice().sort(function(a, b) {
    return b - a;
  });
  console.log("Mảng sắp xếp giảm dần: " + descendingArr);
  //5
  var elementCounts = {};
  var maxCount = 0;
  var mostFrequentElements = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (elementCounts[element] === undefined) {
      elementCounts[element] = 1;
    } else {
      elementCounts[element]++;
    }
    if (elementCounts[element] > maxCount) {
      maxCount = elementCounts[element];
    }
  }
  for (var key in elementCounts) {
    if (elementCounts[key] === maxCount) {
      mostFrequentElements.push(parseInt(key));
    }
  }
  console.log("Phần tử(s) xuất hiện nhiều nhất trong mảng: " + mostFrequentElements);
  //6