function balanceCalc(value, rate, period) {
  const balance = value * Math.pow(1 + rate / 100, period);

  return balance;
}

function totalInterest(value, rate, period) {
  const interestPeriod = balanceCalc(value, rate, period) - value;

  return interestPeriod;
}

function effectiveRate(value, rate, period) {
  const ratePeriod = (totalInterest(value, rate, period) * 100) / value;
  return ratePeriod;
}

export { balanceCalc, totalInterest, effectiveRate };
