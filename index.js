 button = document.querySelectorAll("button");
 result = document.getElementById("result");
 clear = document.getElementById("clear");

 button.forEach(element => {
    element.addEventListener('click',function(){
        result.value += element.value;
        // console.log(element);
        //console.log(element.value);
    })
 });
 function calculate(){
    let value = eval(result.value);
    console.log(value);
    result.value = value;
 }

 clear.addEventListener('click' , function(){
    result.value = "";
 })