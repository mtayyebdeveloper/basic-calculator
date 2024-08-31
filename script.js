let result_body = document.getElementById("r-body");
let final_result = document.getElementById("resuls");
let buttons = document.querySelectorAll(".btn");
let body_int = "";
let resuls = "";
buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let sound =new Audio('mixkit-hard-single-key-press-in-a-laptop-2542.wav');
    sound.play();
    body_int += e.target.innerHTML;
    result_body.innerHTML = body_int;
try{
    if (e.target.innerHTML == "=") {
      let r = eval(resuls);
      final_result.innerHTML = r;
    }
    else if(e.target.innerHTML == "C"){
      body_int ="";
      result_body.innerHTML =body_int;
      resuls ="";
      final_result.innerHTML =resuls;
    }
    else if(e.target.innerHTML == "CE"){
      body_int ="";
      result_body.innerHTML =body_int;
    }
    else {
      console.log(e.target);
      resuls = resuls + e.target.innerHTML;
    }
}catch(error){
  let sound1 =new Audio('mixkit-wrong-long-buzzer-954.wav');
    sound1.play();
    setTimeout(() => {
      alert("Error: Click 'C' button to solve the error...")
    }, 1000);
}
  });
});
