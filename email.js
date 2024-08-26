function sendMail(){
    let parms ={
    
    name : document.getElementById ("name"). value,
    
    email : document.getElementById ("email") .value,
    
    subject : document-getElementById ("subjec"). value,
    
    message : document-getElementById ("message"). value,
}
emailjs.send("service_cqn96g6","template_sxktthi",parms).then(alert("Email send"))
}