import { convert } from './converter';
import initModel from '../model/model.js';

describe('convert', () => {

  it('from Fahrenheit to Fahrenheit', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      rightUnit: 'Fahrenheit'
    };

    const expected = {
      ...when,
      rightValue: 0
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Fahrenheit to Celsius', () => {
    const when = {
      ...initModel,
      leftValue: 90
    };

    const expected = {
      ...when,
      rightValue: 32.2
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Fahrenheit to Kelvin', () => {
    const when = {
      ...initModel,
      leftValue: 90,
      rightUnit: 'Kelvin'
    };

    const expected = {
      ...when,
      rightValue: 305.4
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Celsius to Celsius', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Celsius',
      rightUnit: 'Celsius',
    };

    const expected = {
      ...when,
      rightValue: 0
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Celsius to Fahrenheit', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Celsius',
      rightUnit: 'Fahrenheit',
    };

    const expected = {
      ...when,
      rightValue: 32
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Celsius to Kelvin', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Celsius',
      rightUnit: 'Kelvin',
    };

    const expected = {
      ...when,
      rightValue: 273.2
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Kelvin to Kelvin', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Kelvin',
      rightUnit: 'Kelvin',
    };

    const expected = {
      ...when,
      rightValue: 0
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Kelvin to Fahrenheit', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Kelvin',
      rightUnit: 'Fahrenheit',
    };

    const expected = {
      ...when,
      rightValue: -459.7
    };

    expect(convert(when)).toMatchObject(expected);
  });

  it('from Kelvin to Celsius', () => {
    const when = {
      ...initModel,
      leftValue: 0,
      leftUnit: 'Kelvin',
      rightUnit: 'Celsius',
    };

    const expected = {
      ...when,
      rightValue: -273.1
    };

    expect(convert(when)).toMatchObject(expected);
  });

});