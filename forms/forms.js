$(document).ready(function () {
    var array = [];
    $('#employeeinfo').on('submit', function (event) {
        event.preventDefault();

        // initialize a new variable as an empty object
        var values = {};

        // convert the form inputs into an array
        var fields = $('#employeeinfo').serializeArray();

        // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
        fields.forEach(function (element) {
          values[element.name] = element.value;
        });

        console.log(values);

        // clear out inputs
        $('#employeeinfo').find('input[type=text]').val('');
        // append to DOM
        appendDom(values);
      });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>' + empInfo.employeeFirstName + '</p>');
      $el.append('<p>' + empInfo.employeeLastName  + '</p>');
      $el.append('<p>' + empInfo.employeeIdNumber + '</p>');
      $el.append('<p>' + empInfo.employeeJobTitle + '</p>');
      $el.append('<p>' + parseInt(empInfo.employeeSalary) + '</p>');

      $('#monthlySalary').append('<div class="sal"></div>');
      var salaries = $('#monthlySalary').children().last();
      var salarySum = empInfo.employeeSalary / 12;

      salaries.append('<p class="adjustedSalary">Month Salary Expenditures: $' + (salarySum + salarySum) + '</p>');
    }
  });
