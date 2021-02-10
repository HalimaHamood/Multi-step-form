window.addEventListener('load', ()=>{
  
    const name=sessionStorage.getItem('NAME')
    const status=sessionStorage.getItem('STATUS')
    const birth=sessionStorage.getItem('BIRTH')
    const email=sessionStorage.getItem('EMAIL')
    const info=sessionStorage.getItem('INFO')
    
    document.getElementById('result-name').innerHTML=name;
    document.getElementById('result-status').innerHTML=status;
    document.getElementById('result-birth').innerHTML=birth;
    document.getElementById('result-email').innerHTML=email;
    document.getElementById('result-info').innerHTML=info;
   
})

function alertMsg() {
    alert('Thank You! Successfully Submitted');
  }


function goBack() {
  window.history.back();
}