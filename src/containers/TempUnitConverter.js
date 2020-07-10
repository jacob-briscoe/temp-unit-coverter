import React, { useState } from 'react';
import * as R from 'ramda';
import TempUnit from '../components/TempUnit';
import { Side } from '../model/model';
import { convert } from '../helpers/converter';

const TempUnitConverter = ({ initModel }) => {
  const [model, setModel] = useState(initModel);

  const conversionHandler = R.pipe(
    convert,
    setModel
  );

  return (
    <div className="container">
      <div className="row justify-content-center border-bottom">
        <div>
          <h3 style={{display: 'inline'}}>Temp Converter</h3><small className="font-weight-light ml-2">v{process.env.REACT_APP_VERSION}</small>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col">
          <TempUnit side={Side.LEFT} model={model} conversionHandler={conversionHandler} />
        </div>
        <div className="col">
          <TempUnit side={Side.RIGHT} model={model} conversionHandler={conversionHandler} />
        </div>
      </div>
    </div>
  );
};

export default TempUnitConverter;