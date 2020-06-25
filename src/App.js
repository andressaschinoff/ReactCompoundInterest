import React, { useState, useEffect } from 'react';

import InputNumber from './components/InputNumber';
import Interests from './components/Interests';

import { formatMoney, formatPercentage } from './helpers/formatNumbers';
import {
  balanceCalc,
  totalInterest,
  effectiveRate,
} from './helpers/calculatingInterest';

const INITIAL_MONTHLY_INTEREST = {
  id: 1,
  monthlyBalance: 'R$ 1005,00',
  monthlyInterest: 'R$ 5,00',
  monthlyRate: '0,5%',
};

export default function App() {
  const [initialValue, setInicialValue] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [calculationPeriod, setCalculationPeriod] = useState(1);
  const [monthlyInterests, setMonthlyInterests] = useState([
    INITIAL_MONTHLY_INTEREST,
  ]);

  useEffect(() => {
    handleMonthlyInterests(initialValue, interestRate, calculationPeriod);
  }, [calculationPeriod, initialValue, interestRate]);

  const handleMonthlyInterests = (value, rate, period) => {
    const newMonthlyInterests = [];

    for (let i = 0; i < period; i++) {
      let currentPeriod = i + 1;
      const newMonthlyInterest = {
        id: i + 1,
        monthlyBalance: formatMoney(balanceCalc(value, rate, currentPeriod)),
        monthlyInterest: formatMoney(totalInterest(value, rate, currentPeriod)),
        monthlyRate: formatPercentage(
          effectiveRate(value, rate, currentPeriod)
        ),
      };
      newMonthlyInterests.push(newMonthlyInterest);
    }

    setMonthlyInterests(newMonthlyInterests);
  };

  const handleInitialValueChange = (newValue) => {
    setInicialValue(newValue);
  };

  const handleInterestRateChange = (newValue) => {
    setInterestRate(newValue);
  };

  const handleCalculationPeriodChange = (newValue) => {
    setCalculationPeriod(newValue);
  };

  return (
    <div className="container">
      <h1>React - Juros Compostos</h1>
      <InputNumber
        id="initialValue"
        title="Montante inicial"
        value={initialValue}
        step="100"
        min="100"
        onChangeInput={handleInitialValueChange}
      />
      <InputNumber
        id="interestRate"
        title="Taxa de juros mensal"
        value={interestRate}
        step="0.1"
        min="-12"
        max="12"
        onChangeInput={handleInterestRateChange}
      />
      <InputNumber
        id="calculationPeriod"
        title="Periodo (mensal)"
        min="1"
        value={calculationPeriod}
        onChangeInput={handleCalculationPeriodChange}
      />
      <Interests
        monthlyInterests={monthlyInterests}
        initialValue={initialValue}
        currentBalance={balanceCalc(
          initialValue,
          interestRate,
          calculationPeriod
        )}
      />
    </div>
  );
}
