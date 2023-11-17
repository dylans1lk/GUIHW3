// Dylan Silk - dylan_silk@student.uml.edu - 11/16/23
function genDynamicTable() {
    // Position for my table to be made :)
    var tablePosition = document.getElementById("dynamicTable");

    // Grabs numbers from the form
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);

    // Input validation
    if (minCol < -50 || maxCol > 50 || minCol > maxCol) {
        tablePosition.innerHTML = "Invalid size, input numbers from -50 to 50";
        return;
    } else if (minRow < -50 || maxRow > 50 || minRow > maxRow) {
        tablePosition.innerHTML = "Invalid size, input numbers from -50 to 50";
        return;
    }

    // Builds the multiplication table
    var table = "<table rules='all'>";

    // Adds the top headers
    table += "<tr>" + "<th>" + "</th>";
    for (var i = minCol; i <= maxCol; i++) {
        table += "<th>" + i + "</th>";
    }
    table += "</tr>";

    // Adds all the other numbers
    for (var i = minRow; i <= maxRow; i++) {
        table += "<tr>";
        table += "<th>" + i + "</th>";

        for (var j = minCol; j <= maxCol; j++) {
            table += "<td>" + i*j + "</td>";
        }

        table += "</tr>";
    }
    table += "</table>"

    tablePosition.innerHTML = table;
}
