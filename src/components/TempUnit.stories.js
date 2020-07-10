import React from 'react';
import { action } from '@storybook/addon-actions';
import TempUnit from './TempUnit';
import initModel, { Side } from '../model/model';

export default {
  title: 'Temp Unit',
  component: TempUnit
};

export const View = () => <TempUnit side={Side.LEFT} model={initModel} conversionHandler={action('Convert')} />
