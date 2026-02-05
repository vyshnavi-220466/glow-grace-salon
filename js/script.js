const form=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const nameinput=document.getElementById('name')
    const emailinput=document.getElementById('email')
    const messageinput=document.getElementById('message')
    const name=nameinput.value.trim();
    const email=emailinput.value.trim();
    const message=messageinput.value.trim()

    if(name===""||email===""||message===""){
        alert('please fill all the details')
        return
    }

    alert("Thank you! We will contact you soon.")



form.reset();})