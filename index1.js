function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter the marks for subject " + i));
        total = total + marks;
    }
    let avg = total / n;
    let grade;
    let result;
    if (avg >= 90) {
        grade = "A+";
    }
    else if (avg >= 75) {
        grade = "A";
    }
    else if (avg >= 60) {
        grade = "B";
    }
    else if (avg >= 50) {
        grade = "C";
    }
    else if (avg >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    if (avg >= 40) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }
    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + avg.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}
