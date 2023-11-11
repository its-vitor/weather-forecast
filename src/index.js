async function getAddressByCep() {
    let cep = document.getElementById('cep').value.replace(/\D/g, '');
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();
        document.getElementById('street').value = data.logradouro;
        document.getElementById('neighborhood').value = data.bairro;
        document.getElementById('city').value = data.localidade;
    } catch (err) {
        console.error(err);
        alert('CEP inválido ou não encontrado');
    }
}