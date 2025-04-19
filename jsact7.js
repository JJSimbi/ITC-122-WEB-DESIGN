function calculateGrade() {
    var name = document.getElementById("studentName").value;
    var s1 = parseFloat(document.getElementById("score1").value);
    var s2 = parseFloat(document.getElementById("score2").value);
    var s3 = parseFloat(document.getElementById("score3").value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || name === "") {
        document.getElementById("output").innerText = "Please fill in all fields correctly.";
        return;
    }

    var avg = (s1 + s2 + s3) / 3;
    var result = avg >= 75 ? "Passed" : "Failed";

    document.getElementById("output").innerText =
        "Student: " + name + "\n" +
        "Average Score: " + avg.toFixed(2) + "\n" +
        "Result: " + result;
}