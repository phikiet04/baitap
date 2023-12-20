// function checkPositiveOrNegative() {
//     let number = parseInt(prompt("Nhập số nguyên:")); 
//     if (number > 0) {
//       console.log("Số nguyên dương");
//     } else if (number < 0) {
//       console.log("Số nguyên âm");
//     } else {
//       console.log("Số không âm cũng không dương");
//     }
//   }
//   checkPositiveOrNegative();
  
//   //bt10.2
//   function checkDivisibleBy3Or5() {
//     let n = parseInt(prompt("Nhập số nguyên:"));
//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log("Số chia hết cho cả 3 và 5");
//     } else if (n % 3 === 0) {
//       console.log("Số chia hết cho 3");
//     } else if (n % 5 === 0) {
//       console.log("Số chia hết cho 5");
//     } else {
//       console.log("Số không chia hết cho 3 và 5");
//     }
//   }
//   checkDivisibleBy3Or5();
//   //bt10.3
//   let n = parseInt(prompt("nhập tháng trong năm"))
// switch (n) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("thang"+n+"co 31 ngay")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("thang "+n+" co 30 ngay")
//         break; 
//     case 2:
//         console.log("tháng này có 28 hoặc 29 ngày")  
//         break; 
//     default:
//         console.log("thang nay không tồn tại") 


// }
// //bt10.4
// function solveQuadraticEquation() {
//   let a = parseFloat(prompt("Nhập hệ số a:"));
//   let b = parseFloat(prompt("Nhập hệ số b:"));
//   let c = parseFloat(prompt("Nhập hệ số c:"));
//   let delta = b * b - 4 * a * c;
//     if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log("Phương trình có 2 nghiệm: x1 = " + x1 + ", x2 = " + x2);
//   } else if (delta === 0) {
//     let x = -b / (2 * a);
//     console.log("Phương trình có nghiệm kép: x = " + x);
//   } else {
//     console.log("Phương trình vô nghiệm");
//   }
// }
// solveQuadraticEquation();
// //bt10.5
// function checkTriangleSides() {
//   let a = parseFloat(prompt("Nhập số thứ nhất:"));
//   let b = parseFloat(prompt("Nhập số thứ hai:"));
//   let c = parseFloat(prompt("Nhập số thứ ba:")); 
//   if (a + b > c && a + c > b && b + c > a) {
//     console.log("Ba số " + a + ", " + b + ", " + c + " là độ dài của các cạnh của một tam giác");
//   } else {
//     console.log("Ba số " + a + ", " + b + ", " + c + " không phải là độ dài của các cạnh của một tam giác");
//   }
// } 
// checkTriangleSides();

