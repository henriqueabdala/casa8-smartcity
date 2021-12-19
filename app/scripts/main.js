new VenoBox({
    selector: '.venobox-video',
});


const form = document.querySelector('#submit-hypnobox');
form.addEventListener('submit', e => {
    e.preventDefault();
    const v = {
        name: document.querySelector("#name").value,
        tel: document.querySelector("#whatsapp").value.split(" "),
        email: document.querySelector("#email").value,
        msg: document.querySelector("#msg").value,
        produto: document.querySelector('input[name="emp"]:checked').value,
        landpage: "Land Page Smart City",
    }
    const number = {
        ddd: v.tel[0].replace("(", "").replace(")", ""),
        phone: v.tel[1].replace("-", "") 
    };
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = { 
        method: "POST", 
        mode: "no-cors", 
        headers: headers, 
        redirect: "follow", 
        body: "" 
    };
    fetch(`https://casa8.hypnobox.com.br/email.receber.php?nome=${v.name}&email=${v.email}&id_produto=${v.produto}&mensagem="${v.msg}&ddd_celular=${number.ddd}&tel_celular=${number.phone}&midia=${v.landpage}`, options)
    .then(r => r.text())
    .then(r => {
        alert("Seu contato foi adicionado com sucesso! Em breve entraremos em contato!");
        $("#contato-modal").modal("toggle")
        form.reset();
    })
    .catch(e =>{
        alert("Ops! Ocorreu um erro inesperado, por favor tente novamente!");
        $("#contato-modal").modal("toggle")
        form.reset();
    })
})

