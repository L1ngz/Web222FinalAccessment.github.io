function clickhandler(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const msg = document.getElementById("msg");
    if(name.value.length < 1)
        window.alert("Name cannot be empty!");
    else if(email.value.length < 1)
        window.alert("Email cannot be empty!");
    else if(subject.value.length < 1)
        window.alert("Subject cannot be empty!")
    else if(msg.value.length < 1)
        window.alert("Message cannot be empty!");
    else
        window.alert("Success!");
}


