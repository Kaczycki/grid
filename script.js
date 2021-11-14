let myDiv = document.getElementById('pierwszyDiv');
let guz = document.getElementById('guzik1');
let kolor = document.getElementById('wybor')

function zmienKolor(){
    myDiv.style.color=kolor;
}

console.log('pierwszyDiv = ', myDiv , ' guzik1 = ', guz, ' wybor = ',kolor );

// zmienDiv(colInput,5)


/* <html>
 <head>
   <title>Przykład zdarzenia DOM</title>
   <style type="text/css">
     #t { border: 1px solid red }
     #t1 { background-color: pink; }
   </style>
   <script type="text/javascript">

   // Funkcja zmieniająca zawartość komórki tabeli t2
   function modifyText() {
     var t2 = document.getElementById("t2");
     t2.firstChild.nodeValue = "Trzy";
   }

   // Funkcja dodająca obserwatora zdarzeń dla tabeli t
   function load() {
     var el = document.getElementById("t");
     el.addEventListener("click", modifyText, false);
   }

   </script>
 </head>
 <body onload="load();">
 <table id="t">
   <tr><td id="t1">Jeden</td></tr>
   <tr><td id="t2">Dwa</td></tr>
 </table>
 </body>
 </html>*/
