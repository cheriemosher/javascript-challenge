//create a variable from data.js
var tableData = data;

//create a variable for the table space on the html
var tbody = d3.select("tbody");

//create a variable for the date and time button
var select = d3.select("#submit");

//load the alien sighting data onto the page
tableData.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);

    //Capitalize letters in city, state, country, and shape
    if (key === "city") {
      cell.text(value.charAt(0).toUpperCase() + value.substring(1));
    }
    else if (key === "state") {
      cell.text(value.toUpperCase());
    }
    else if (key === "country") {
      cell.text(value.toUpperCase());
    }
    else if (key === "shape") {
      cell.text(value.charAt(0).toUpperCase() + value.substring(1));
    }
    else{
      cell.text(value);
    };
  });
});

// select filter button
select.on("click", function() {

  //override default behaviour of button
  d3.event.preventDefault();

  //clear the table area
  d3.select("#ufosightings").html("");

  //create a variable for the date and time and add the value to that variable
  var inputDate = d3.select("#datetime");
  var inputValue = inputDate.property("value");

  //filter data from table based on input date and time
  var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

  //load reports into table area
  filterData.forEach((dateReport) => {
    var row = tbody.append("tr");
    Object.entries(dateReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
      //Capitalize letters in city, state, country, and shape
      if (key === "city") {
        cell.text(value.charAt(0).toUpperCase() + value.substring(1));
      } 
      else if (key === "state") {
        cell.text(value.toUpperCase());
      }
      else if (key === "country") {
        cell.text(value.toUpperCase());
      }
      else if (key === "shape") {
        cell.text(value.charAt(0).toUpperCase() + value.substring(1));
      }
      else{
        cell.text(value);
      };
    });
  });
});