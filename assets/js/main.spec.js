// const { describe, it } = require("node:test");
let description = "Тестирование фкнкции классификации возраста"
const controlValues =
  [
    { age: -1, rightValue: null },
    { age: 1, rightValue: "детский возраст" },
    { age: 24, rightValue: "детский возраст" },
    { age: 24.01, rightValue: "молодой возраст" },
    { age: 44, rightValue: "молодой возраст" },
    { age: 44.01, rightValue: "средний возраст" },
    { age: 65, rightValue: "средний возраст" },
    { age: 65.1, rightValue: "пожилой возраст" },
    { age: 75, rightValue: "пожилой возраст" },
    { age: 75.01, rightValue: "старческий возраст" },
    { age: 90, rightValue: "старческий возраст" },
    { age: 90.01, rightValue: "долгожители" },
    { age: 122, rightValue: "долгожители" },
    { age: 122.01, rightValue: null },
    { age: 150, rightValue: null }
  ]


describe(description, () => {
  controlValues.forEach((tstData) => {
    it(`Возраст : ${tstData.age} => ${tstData.rightValue}`, () => {
      expect(ageClassification(tstData.age)).toBe(tstData.rightValue);
    });
  });
});


describe(description + ". Краштесты.", () => {
  it(`Возраст : как стоорка => null`, () => {
    expect(ageClassification("25")).toBe("молодой возраст");
  });

  it(`Возраст : пустая сторока => null`, () => {
    expect(ageClassification("")).toBe(null);
  });

  it(`Возраст : не пустая сторока => null`, () => {
    expect(ageClassification("abc")).toBe(null);
  });

  it(`Возраст : очень большое число => null`, () => {
    expect(ageClassification(999999999)).toBe(null);
  });

});
