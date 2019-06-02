// calc tip
function calculateTip() {
    var billtot = document.getElementById("billtot").value;
    var tipamt = document.getElementById("tipamt").value;
    var numOfPeople = document.getElementById("participants").value;

    // make sure fields have values
    if (billtot === "" || tipamt == 0) {
        alert("Please enter values");
        return;
    }
    // make sure there are people paying the bill
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // actual math calculations for tip
    var total = (billtot * tipamt) / numOfPeople;
    var billonly = billtot / numOfPeople;

    total += billonly;
    // round total to 2dp
    total = Math.round(total * 100) / 100;
    // present it in format for representing money (2dp)
    total = total.toFixed(2);
    // display the tip to the visitor
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

/*
  make sure that the javascript doesn't just show the result as you enter it
  keeps it hidden until you click the calculate button
*/
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// call the function at the start of this file
document.getElementById("calculate").onclick = function () {
    calculateTip();

};