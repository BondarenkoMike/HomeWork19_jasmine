function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}


function square_equation(a, b, c) {
  if (!isFinite(a)) a = 0;
  if (!isFinite(b)) b = 0;
  if (!isFinite(c)) c = 0;

  if (a === 0) {
    if (b === 0) return null
    else return -c / b;

  } else {
    d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) return null;
    x1 = (-b + Math.sqrt(d)) / 2 * a;
    x2 = (-b - Math.sqrt(d)) / 2 * a;
    return [x1, x2];
  }

}


// console.log(square_equation(1, -1, -6))