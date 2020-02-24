


  var i = 0;
  var text = "podroze";
  var r = Math.floor(Math.random() * 1000)

function f(){
    if (i<text.length){
    document.getElementById('tytul').innerHTML += text.charAt(i)
    i++;
      setTimeout(f,r)
    }


  }


