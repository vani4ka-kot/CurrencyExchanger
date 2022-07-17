setInterval(function () {
    let toHrivniya = +document.getElementById("input2").value;
    let dollarRate = +document.getElementById("input1").value;

    let result = `${toHrivniya} UAH => ${(toHrivniya % dollarRate != 0) ? (toHrivniya / dollarRate).toFixed(2) : toHrivniya / dollarRate} USD`;

    if (toHrivniya == 0 || dollarRate == 0) result = "result";

    document.getElementById("Res").innerHTML = result
}, 300);
