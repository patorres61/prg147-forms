// get id from html and use them
//var alert = String;

var $ = function (id) {
    'use strict';
    return document.getElementById(id)
}



var calculate_cost = function () {
    'use strict';
    // we have to parse - or change - the values to floats. Form values are strings by default.
    var rylength = parseFloat($("rylength").value)
    var rywidth = parseFloat($("rywidth").value);
    var lylength = parseFloat($("lylength").value)
    var lywidth = parseFloat($("lywidth").value);
    var bylength = parseFloat($("bylength").value);
    var bywidth = parseFloat($("bywidth").value);
    var fylength = parseFloat($("fylength").value);
    var fywidth = parseFloat($("fywidth").value);


    if (isNaN(rylength) || isNaN(rywidth) || isNaN(lylength) || isNaN(lywidth) || isNaN(bylength) || isNaN(bywidth) || isNaN(fylength) || isNaN(fywidth)) {
        alert("You have an invalid value. Correct and click submit");
    } else {
        var total = ((rylength * rywidth) + (lylength * lywidth) + (bylength * bywidth) + (fylength * fywidth)) * .10; //10 cents per square foot

        total = total.toFixed(2); //sets decimals to 2 places

        $("mowingcost").value = "$ " + total;
    }
}
window.onload = function () {
    'use strict';
    $("submit").onclick = calculate_cost;

}