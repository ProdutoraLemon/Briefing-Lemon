// Evento de submissão do formulário
document.getElementById('briefingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const ideiaPrincipal = document.getElementById('ideiaPrincipal').value;
    const objetivo = document.getElementById('objetivo').value;
    const publicoAlvo = document.getElementById('publicoAlvo').value;
    const especificacoes = document.getElementById('especificacoes').value;
    const deadline = document.getElementById('deadline').value;
    const obrigacoes = document.getElementById('obrigacoes').value;
    const limitacoes = document.getElementById('limitacoes').value;
    const referencias = document.getElementById('referencias').value;

    // Coleta os serviços selecionados
    const servicos = Array.from(document.querySelectorAll('input[name="servicos"]:checked'))
                          .map(input => input.value);

    // Monta o resultado
    let result = `
        <h2>Briefing Enviado</h2>
        <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Ideia Principal:</strong> ${ideiaPrincipal}</p>
        <p><strong>Objetivo:</strong> ${objetivo}</p>
        <p><strong>Público-alvo:</strong> ${publicoAlvo}</p>
        <p><strong>Serviços Necessários:</strong> ${servicos.join(', ')}</p>
        <p><strong>Especificações:</strong> ${especificacoes}</p>
        <p><strong>Referências:</strong> ${referencias}</p>
        <p><strong>Obrigações:</strong> ${obrigacoes}</p>
        <p><strong>Limitações:</strong> ${limitacoes}</p>
        <p><strong>Prazo:</strong> ${deadline}</p>
    `;

    // Exibe o resultado
    document.getElementById('result').innerHTML = result;

    // Limpa o formulário após o envio
    document.getElementById('briefingForm').reset();
});
