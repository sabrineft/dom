//minus button
var minus=document.getElementsByClassName("minus-btn");
console.log(minus)
for (let i=0; i<minus.length; i++){
    let oneminus=minus[i];
    oneminus.addEventListener("click", function(){

        if( oneminus.nextElementSibling.value>0){
    oneminus.nextElementSibling.value--;
       calcul();
       calcul1();
       calcul2();
       total();
        }

    })
}

//plus button

var plus=document.getElementsByClassName("plus-btn");
for (let i=0; i<plus.length; i++){
    let oneplus=plus[i];
    oneplus.addEventListener("click", function(){
    oneplus.previousElementSibling.value++;
    calcul();
    calcul1();
    calcul2();
    total();
    })
    }


    //like btn

var likes=document.getElementsByClassName("like");
for (let i=0; i<likes.length; i++){
    let like=likes[i];
   like.addEventListener("click", function(){
    if(like.firstChild.style.color=="black"){
        like.firstChild.style.color="red"
    }
     else{
         like.firstChild.style.color="black"
     }
    })
    }

//delete


var deletebtn=document.getElementsByClassName("delete");
for(let i=0; i<deletebtn.length; i++){
   let  deleteone=deletebtn[i];
    deleteone.addEventListener("click", function(){
       deleteone.parentElement.remove();
          calcul();
          calcul1();
          calcul2();
          total();
    })
}

function calcul(){

let quant=document.getElementById("quant1");
let price=document.getElementById("prix1");
price.innerHTML=Number(quant.value)*1379;

}


function calcul1(){
    let qt=document.getElementById("quant2");
    let price1=document.getElementById("prix2");
    price1.innerHTML=Number(qt.value)*176;
}

function calcul2(){
    let qn=document.getElementById("qt3");
    let price2=document.getElementById("prix3");
    price2.innerHTML=Number(qn.value)*500;
}

function total(){
    let a=document.getElementById("prix1");
    let b=document.getElementById("prix2");
    let c=document.getElementById("prix3");
    let totall=document.getElementById("finalPrice");
    totall.value=parseInt(a.innerHTML)+parseInt(b.innerHTML)+parseInt(c.innerHTML);
}

let final=document.getElementById("finalPrice");
let delet=document.getElementById("del")
for(let i=0;i<delet;i++){
let d=delet[i];
d.addEventListener("click", function(){
final.value=final.value - (d.previousElementSibling.innerHTML)

})
}