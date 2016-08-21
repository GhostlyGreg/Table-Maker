function makeTable() {

  // Next time I do something like this I will just use Jquery to simplify the funtions I used. 
  // Really saves me a lot of code. 

  // https://developer.mozilla.org/en-US/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
  // The above link was very useful for making this Webpage. 


  // Using remove to refresh.
  var rTable = document.getElementById("myTable");
  if (rTable !== null) {
    rTable.remove();
  }

  // Retrieving the 4 Inputs
  // The "+" makes the values be treated as a number and not a string.
  var minColumn = +document.getElementById("minColumn").value;
  var maxColumn = +document.getElementById("maxColumn").value;
  var minRow = +document.getElementById("minRow").value;
  var maxRow = +document.getElementById("maxRow").value;
 
  // Reference to the body of the HTML
  var body = document.getElementsByTagName("body")[0];

  // Check if the numbers are actually a range
  // If the first input is bigger than the second,
  // the second will be highlighted

  if (isNaN(minRow) === true) {
    document.getElementById("minRow").setAttribute("style",
      "outline-color: blue");
    document.getElementById("minRow").setAttribute("style",
      "border-color: blue");
    return;
  }

  if (isNaN(maxRow) === true) {
    document.getElementById("maxRow").setAttribute("style",
      "outline-color: blue");
    document.getElementById("maxRow").setAttribute("style",
      "border-color: blue");
    return;
  }

  if (isNaN(minColumn) === true) {
    document.getElementById("minColumn").setAttribute("style",
      "outline-color: blue");
    document.getElementById("minColumn").setAttribute("style",
      "border-color: blue");
    return;
  }

  if (isNaN(maxColumn) === true) {
    document.getElementById("maxColumn").setAttribute("style",
      "outline-color: blue");
    document.getElementById("maxColumn").setAttribute("style",
      "border-color: blue");
    return;
  }

  if (minRow > maxRow) {
	document.getElementById("error1").style.display = "block";
    document.getElementById("minRow").setAttribute("style",
      "outline-color: red");
    document.getElementById("minRow").setAttribute("style",
      "border-color: red");
	document.getElementById("maxRow").setAttribute("style",
      "outline-color: red");
    document.getElementById("maxRow").setAttribute("style",
      "border-color: red");
    return;
  }
  if (minColumn > maxColumn) {
	document.getElementById("error2").style.display = "block";
    document.getElementById("minColumn").setAttribute("style",
      "outline-color: red");
    document.getElementById("minColumn").setAttribute("style",
      "border-color: red");
	document.getElementById("maxColumn").setAttribute("style",
      "outline-color: red");
    document.getElementById("maxColumn").setAttribute("style",
      "border-color: red");  
    return;
  }


  // Creates the <table> element and the <tbody> element
  // In html used to make a table. 
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Creating all cells
  for (var i = minRow, ii = maxRow + 1; i <= ii; ++i) {
    // Creates the Row,  
    var tblRow = document.createElement("tr");
    for (var j = minColumn, jj = maxColumn + 1; j <= jj; ++j) {
      // Creates a cell
      var cell = document.createElement("td");
      var cellText;

      // Give some style to the cell/table
      var cellStyle = "padding: 6px; ";
      if (i === minRow && j === minColumn) {
        cellText = document.createTextNode("");
        cell.setAttribute("style", cellStyle + "background-color: #777");
      } else if (i === minRow) {
        cellText = document.createTextNode(j - 1);
        cell.setAttribute("style", cellStyle + "background-color: #ccc");
      } else if (j === minColumn) {
        cellText = document.createTextNode(i - 1);
        cell.setAttribute("style", cellStyle + "background-color: #ccc");
      } else {
        cellText = document.createTextNode((i - 1) * (j - 1));
        cell.setAttribute("style", cellStyle + "background-color: #ddd");
      }

      // add the text to cell
      cell.appendChild(cellText);
      // add the cell to row
      tblRow.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(tblRow);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // setting an id for tbl
  tbl.setAttribute("id", "myTable");
}