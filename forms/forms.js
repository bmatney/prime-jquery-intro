var array = [];
var totalSalary = 0;
var values = {};

$(document).ready(function () {

    $('#employeeinfo').on('submit', function (event) {
      event.preventDefault();
      var fields = $('#employeeinfo').serializeArray();
      fields.forEach(function (element) {
        values[element.name] = element.value;
      });

      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');
      $('.newSalary').remove();

      console.log(values);

      appendDom(values);

      $('button').click(function(event) {
        event.preventDefault();
        $(this).closest('.person').remove();
      });

    });



    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>' + empInfo.employeeFirstName + '</p>');
      $el.append('<p>' + empInfo.employeeLastName  + '</p>');
      $el.append('<p>' + empInfo.employeeIdNumber + '</p>');
      $el.append('<p>' + empInfo.employeeJobTitle + '</p>');
      $el.append('<p>' + empInfo.employeeSalary + '</p>');
      $el.append('<button class="delete">delete</button>');

      $('#monthlySalary').append('<div class="sal"></div>');
      var salaries = $('#monthlySalary').children().last();
      var salarySum = Math.round(empInfo.employeeSalary / 12);
      totalSalary += salarySum;

      salaries.append('<p class="newSalary">Month Salary Expenditures: $' + totalSalary + '</p>');
    }
  });
