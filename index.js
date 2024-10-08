const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Stock Portfolio analysis API!');
});

function calculateReturnValue(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);

  res.send(calculateReturnValue(boughtAt, marketPrice, quantity).toString());
});

function calculateTotalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(calculateTotalReturns(stock1, stock2, stock3, stock4).toString());
});

function calculateReturnPercent(boughtAt, returns) {
  return (returns / boughtAt) * 100;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(calculateReturnPercent(boughtAt, returns).toString());
});

function calculateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(
    calculateTotalReturnPercentage(stock1, stock2, stock3, stock4).toString()
  );
});

function isPortfolioInProfit(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;

  res.send(isPortfolioInProfit(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
