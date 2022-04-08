var gen_button = document.getElementById('generate_qr');
var qrcode = document.getElementById('qr_code');
var user_input = document.getElementById('input');

gen_button.addEventListener ("click", () => {
    
    if(user_input.value==='')
    {
        alert("input valid url");
    }
    else{
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${user_input.value}`;
    qrcode.style.display="block";
    qrcode.src = url;
    }
});