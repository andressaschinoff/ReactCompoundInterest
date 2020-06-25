const formatter = Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
// const formatter = Intl.NumberFormat('pt-BR');

function formatMoney(value) {
  const money = `R$ ${formatter.format(value)}`;
  return money;
}

function formatPercentage(value) {
  const percentage = `${formatter.format(value)} %`;
  return percentage;
}

export { formatMoney, formatPercentage };
