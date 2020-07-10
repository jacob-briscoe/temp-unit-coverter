import * as R from 'ramda';

export const convert = (model) => {
  const { leftValue, leftUnit, rightValue, rightUnit } = model;

  const [fromUnit, fromTemp, toUnit] =
    model.sourceLeft
      ? [leftUnit, leftValue, rightUnit]
      : [rightUnit, rightValue, leftUnit];

  const otherValue = R.pipe(
    convertFromToTemp,
    round,
  )(fromUnit, toUnit, fromTemp);

  return model.sourceLeft
    ? { ...model, rightValue: otherValue }
    : { ...model, leftValue: otherValue };
}

const round = R.pipe(
  R.multiply(10),
  Math.round,
  R.divide(R.__, 10)
);

const convertFromToTemp = (fromUnit, toUnit, temp) => {
  const convertFn = R.pathOr(
    R.identity,
    [fromUnit, toUnit],
    UnitConversions);

  return convertFn(temp);
}

const FtoC = (temp) => 5 / 9 * (temp - 32);

const CtoF = (temp) => 9 / 5 * temp + 32;

const KtoC = (temp) => temp - 273.15;

const CtoK = (temp) => temp + 273.15;

const FtoK = R.pipe(FtoC, CtoK);
const KtoF = R.pipe(KtoC, CtoF);

const UnitConversions = {
  Celsius: {
    Fahrenheit: CtoF,
    Kelvin: CtoK,
  },
  Fahrenheit: {
    Celsius: FtoC,
    Kelvin: FtoK,
  },
  Kelvin: {
    Celsius: KtoC,
    Fahrenheit: KtoF,
  },
};