function handleSubmit(){
    const name= document.getElementById('name').value;
    const status= document.getElementById('status').value;
    const birth= document.getElementById('birth').value;
    const email= document.getElementById('email').value;
    const info= document.getElementById('info').value;


    sessionStorage.setItem('NAME',name)
    sessionStorage.setItem('STATUS',status)
    sessionStorage.setItem('BIRTH',birth)
    sessionStorage.setItem('EMAIL',email)
    sessionStorage.setItem('INFO',info)

    return;
}






