
/*
const gradientArray = [
                        "radial-gradient(circle 150px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 200px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 250px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 300px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 350px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 400px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 450px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 500px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 550px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 600px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 650px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 600px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 550px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 500px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 450px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 400px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 350px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 300px at center, #DA22FF 0%, #52057B 100%)", 
                        "radial-gradient(circle 250px at center, #DA22FF 0%, #52057B 100%)",
                        "radial-gradient(circle 200px at center, #DA22FF 0%, #52057B 100%)",];
*/
const gradientArray = [
  
  "linear-gradient(#61045F , #AA076B )",
  "linear-gradient(#9733ee, #AA076B )",
  "linear-gradient( #9733ee, #da22ff )",
  "linear-gradient( #DD2476, #da22ff )",
  "linear-gradient( #DD2476, #FF512F)",
  "linear-gradient( #cc2b5e #FF512F)",
  "linear-gradient(#cc2b5e, #753a88)",
  "linear-gradient(#ec008c, #753a88)",
  "linear-gradient( #ec008c, #fc6767)",
  "linear-gradient( #c471ed, #fc6767)",
  "linear-gradient( #c471ed, #493240)",
  "linear-gradient(#ff0099, #493240)",
  "linear-gradient(#ff0099, #b91d73)",
  "linear-gradient( #f953c6, #b91d73)",
  "linear-gradient( #f953c6, #AA076B)",


]

const gradient = document.querySelector(".gradient");

setInterval (gradientChange, 1000);
let y = 0;
    function gradientChange() {
        document.querySelector(".gradient").style.backgroundImage = gradientArray [y];
        y++;
        if (y>gradientArray.length) {
            y=0;
        }
    }


let text = "LE JEU COMMENCE...";
let i=0;
let speed = 300;
function type() {
  if (i< text.length) {
    document.querySelector("#par").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();


const glazArray = ["glaz22.png", "glaz11.png",];
const glazImg = document.querySelector(".glaz");
let b=0;
glazImg.addEventListener('mouseover', ()=> { 
  b++;
    if (b>glazArray.length-1) {
        b=0
    }
  document.querySelector('.glaz').src=glazArray[b];
});

const glazArray2 = ["glaz22.png", "glaz11.png",];
const glazImg2 = document.querySelector(".glaz");
let c=0;
glazImg.addEventListener('click', ()=> { 
  c++;
    if (c>glazArray2.length-1) {
        c=0
    }
  document.querySelector('.glaz').src=glazArray[c];
});


const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor (Math.random()*30)+1;

input.addEventListener("keypress", function(e) {
  if (e.keyCode===13) {
    play ();
  }
});
button.addEventListener ("click", play);
function play (){
  const userNumber = document.querySelector("#guess").value;
  if (userNumber<1 || userNumber>30) {
      swal.fire ({
      icon: 'error',
      title: 'Oops!',
      text: 'Essayez un numéro entre 1 et 30!',
    })
  }
  else if (isNaN(userNumber)) {
      swal.fire ({
      icon: 'error',
      title: 'Oops!',
      text: 'Il faut entrer un numéro!',
    })
  }
  else {
    if (userNumber<answer) {
      Swal.fire(
        "Essayez un numéro plus élevé!",
        "Je gagne pour l'instant..."
      )
    }
    else if (userNumber>answer) {
      Swal.fire(
        "Essayez un numéro mois élevé!",
        "Je gagne pour l'instant..."
      )
    }
    else {
      Swal.fire({
        title: "OOoouuuiii!!! BRAVO!!!",
        text: "Vous avez gagné!!!",
        imageUrl: 'end.jpg',
        imageWidth: 400,
        imageHeight: 250,
      })
    }
  }
}


