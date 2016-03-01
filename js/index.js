$(function() {
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 15) {
        number = '';
        totaldiv.text('Err');
      }
    }
  };
  
  var eQ = [];
  var a = '';
  var temp = [];
  var number = '';
  var CE = '';
  var operator = '';
  var totaldiv = $('#total');
  totaldiv.text('Hello');
  
  $('.numbers').not('.clear,.clearall').click(function() {
    number += $(this).text();
    totaldiv.text(number);
    temp.push(number);
  });

  $('.operators').not('#equals').click(function() {
    a = temp.pop();
    eQ.push(a);
    operator = $(this).text();
    number = '',  a = '', temp = [];
    totaldiv.text(operator);
    eQ.push(operator);
   
  });

  $('.clear,.clearall').click(function() {
    //CE = answer;
    eQ = [];
    totaldiv.text('0');
    if ($(this).attr('class') === 'clearall') {
      eQ = [];
    }
  });

  $('#equals').click(function() {
    a = temp.pop();
    eQ.push(a);
    var answer = eQ.join('');
    number = eval(answer);
    totaldiv.text(number);
    number = '';
    console.log(answer);
  });

 
  $('#percent').click(function(){
    number = (number / 100);
    totaldiv.text(number);
    eQ.push(number);
  }); 
 

  $('#decimal').click(function() {
    var numOfDecs = 0;
    if (numOfDecs === 0) {
      number.append('.');
    }
   totaldiv.text(number);
   eQ.push(number);

    for (number = 0; number.length < 9; number++) {
      if (number === '.') {
        numOfDec++;
      }
    };
  });
 
});