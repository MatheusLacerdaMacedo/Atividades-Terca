
function limparFormulario() {
    document.getElementById("cadastroForm").reset();
  }
  
  function cadastrar() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
  
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }
  
    alert("Cadastro realizado com sucesso!");
    limparFormulario();
  }
  
