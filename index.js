function getdata()
{
    var element=document.getElementById("data");
    var data=element.value;
    var data_length=data.length;
    var para_element=document.getElementById("message");


    if(data_length>8){
        para_element.innerText="The letter must be below 8 character";
        para_element.style.color="red";
    }
    else{
        para_element.innerText="";
    }
}