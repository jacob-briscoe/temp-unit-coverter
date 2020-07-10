import React, { useCallback } from 'react';
import * as R from 'ramda';
import { Side, UNITS } from '../model/model';

const TempUnit = ({ side, model, conversionHandler }) => {
  const [tempLens, unitLens] = sideLenses(side);

  const readTemp = readValue(tempLens);
  const readUnit = readValue(unitLens);

  const temp = readTemp(model);
  const unit = readUnit(model);

  const converter = getConverter(side, conversionHandler);

  const tempChangeHandler = useCallback((tempString) => {
    const temp = toNumber(tempString);

    const convert = converter(tempLens, temp);

    convert(model);
  }, [converter, tempLens, model]);

  const unitChangeHandler = useCallback((unit) => {
    const convert = converter(unitLens, unit);

    convert(model);
  }, [converter, unitLens, model]);

  return (
    <div>
      <div className="form-group">
        <input type="number"
          className="form-control"
          placeholder="Temperature"
          value={temp}
          onChange={e => tempChangeHandler(e.target.value)} />
      </div>
      <div className="form-group">
        <select className="form-control" value={unit} onChange={e => unitChangeHandler(e.target.value)}>
          {R.map(unit => <option key={unit}>{unit}</option>, UNITS)}
        </select>
      </div>
    </div>);
};

const sourceLeftLens = R.lensProp('sourceLeft');

const tempLens = R.curry((side) => R.lensProp(`${side}Value`));

const unitLens = R.curry((side) => R.lensProp(`${side}Unit`));

const sideLenses = R.curry((side) => R.pair(tempLens(side), unitLens(side)));

const readValue = R.curry((lens, model) => R.view(lens, model));

const getConverter = R.curry((side, conversionHandler, lens, changedValue) =>
  R.pipe(
    adjustModel(side, [R.set(lens, changedValue)]),
    conversionHandler
  ));

const adjustModel = R.curry((side, adjustments) =>
  R.pipe(
    ...adjustments,
    R.set(sourceLeftLens, isSourceLeft(side))
  ));

const isSourceLeft = R.equals(Side.LEFT);

const toNumber = R.pipe(
  parseInt,
  R.defaultTo(''),
);

export default TempUnit;