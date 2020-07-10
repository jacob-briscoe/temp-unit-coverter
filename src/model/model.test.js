import initModel from './model';

describe('initModel', () => {
  it('has sensible defaults', () => {
    const expected = {
      ...initModel,
      leftUnit: 'Fahrenheit',
      rightUnit: 'Celsius'
    };

    expect(initModel).toMatchObject(expected);
  });
});