function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / ((height/100) * (height/100));
    var result = document.getElementById("result");

    if (bmi < 18.5) {
        result.innerHTML = "Your BMI is <span class='bold'>" + bmi.toFixed(1) + "</span> which means you are <span class='normal'>underweight</span>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = "Your BMI is <span class='bold'>" + bmi.toFixed(1) + "</span> which means you are <span class='normal'>normal</span>";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = "Your BMI is <span class='bold'>" + bmi.toFixed(1) + "</span> which means you are <span class='normal'>overweight</span>";
    } else {
        result.innerHTML = "Your BMI is <span class='bold'>" + bmi.toFixed(1) + "</span> which means you are <span class='normal'>obese</span>";
    }
}
