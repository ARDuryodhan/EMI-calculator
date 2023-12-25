document.addEventListener("DOMContentLoaded", function () {
  var Slider1 = document.getElementById("amount");
  var Slider2 = document.getElementById("intrest");
  var Slider3 = document.getElementById("years");

  var result1 = document.querySelector(".result1");
  var result2 = document.querySelector(".result2");
  var result3 = document.querySelector(".result3");

  if (Slider1 && Slider2 && Slider3 && result1 && result2 && result3) {
    result1.innerHTML = Slider1.value;
    result2.innerHTML = Slider2.value;
    result3.innerHTML = Slider3.value;

    Slider1.oninput = function () {
      result1.innerHTML = this.value;
    };

    Slider2.oninput = function () {
      result2.innerHTML = this.value;
    };

    Slider3.oninput = function () {
      result3.innerHTML = this.value;
    };

    document
      .getElementById("loan_form")
      .addEventListener("submit", calculateResult);
  }

  function calculateResult(e) {
    const showAmount = Slider1.value;
    const showIntrest = Slider2.value;
    const showYears = Slider3.value;

    const principal = parseFloat(showAmount);
    const CalculateInterest = parseFloat(showIntrest) / 100 / 12;
    const calculatedPayments = parseFloat(showYears) * 12;

    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (principal * x * CalculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    document.getElementById("monthlyPay").innerHTML = "₹" + "&nbsp;"+ monthlyPayment;

    document.getElementById("totalIntrest").innerHTML = "₹" + "&nbsp;"+ totalInterest;

    document.getElementById("totalAmt").innerHTML = "₹" + "&nbsp;"+ totalPayment;

    e.preventDefault();
  }
});
