/*Ax2 + Bx + C = 0, где A, B и C — заданные константы (с ограничением A != 0)
Первым шагом решения уравнения является вычисление дискриминанта D = B^2-4AC. 
Если D = 0, уравнение имеет единственный действительный корень x = -B/2A, 
в противном случае существует пара корней x1 = (-B+sqrt(D))/2A, 
x2 = (-B-sqrt(D))/2A (корни являются действительными или комплексными
зависимости от знака дискриминанта).*/
module.exports = function solveEquation(equation) {
  var strArray = equation.split(" ");
  var A, B, C;
  A = Number(strArray[0]);
  B = Number(strArray[3] + strArray[4]);
  C = Number(strArray[7] + strArray[8]);
  // x1 = (-B+sqrt(D))/2A, x2 = (-B-sqrt(D))/2A
  //console.log(strArray);
  //console.log("A=",A,"B=",B,"C=",C);
  var discriminant = B * B - 4 * A * C;
  var x1 = (-B + Math.pow(discriminant, 1 / 2)) / (2 * A);
  var x2 = (-1 * B - Math.sqrt(discriminant)) / (2 * A);
  x1=Math.round(x1);
  x2=Math.round(x2);
  var temp;
  if (x2 < x1) {
    temp = x2;
    x2 = x1;
    x1 = temp;
  }
  var result = [x1, x2];
  return result;
  // your implementation
}