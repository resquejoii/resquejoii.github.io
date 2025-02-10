var prev=''
  function change(color,day) {
  document.getElementById(day).style.background = color;
  document.getElementById(day).style.borderColor = color;
  document.getElementById(day).style.animation='moving 1s linear forwards';

        if(prev!='')document.getElementById(prev).style.animation='flying 1s linear forwards';
        prev=day;
 }