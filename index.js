function calculateRepayments() {
  const amount = document.getElementById("amount").value;
  const term = document.getElementById("term").value;
  const rate = document.getElementById("rate").value;
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked'
  ).value;

  if (!amount || !term || !rate) {
    alert("Please fill in all fields.");
    return;
  }

  const principal = parseFloat(amount);
  const annualInterestRate = parseFloat(rate) / 100;
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = parseFloat(term) * 12;

  let monthlyRepayment;
  if (mortgageType === "repayment") {
    monthlyRepayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  } else {
    monthlyRepayment = principal * monthlyInterestRate;
  }

  document.getElementById(
    "resultado"
  ).innerText = `Monthly Repayments: £${monthlyRepayment.toFixed(2)}`;
}

function clearAll() {
  document.getElementById("amount").value = "";
  document.getElementById("term").value = "";
  document.getElementById("rate").value = "";
  document.querySelector(
    'input[name="mortgageType"][value="repayment"]'
  ).checked = true;
  document.getElementById("resultado").innerText =
    'Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.';
}
