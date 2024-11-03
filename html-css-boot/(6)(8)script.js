class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    toString() {
        return `Nome: ${this.nome}`;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }

    getCPF() {
        return this.cpf;
    }

    setCPF(cpf) {
        this.cpf = cpf;
    }

    toString() {
        return `${super.toString()}, CPF: ${this.cpf}`;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }

    getCNPJ() {
        return this.cnpj;
    }

    setCNPJ(cnpj) {
        this.cnpj = cnpj;
    }

    toString() {
        return `${super.toString()}, CNPJ: ${this.cnpj}`;
    }
}


const pessoas = [];


document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const tipoPessoa = document.getElementById("tipoPessoa").value;
    const nome = document.getElementById("nome").value;
    let pessoa;

    if (tipoPessoa === "fisica") {
        const cpf = document.getElementById("cpf").value;
        pessoa = new PessoaFisica(nome, cpf);
    } else if (tipoPessoa === "juridica") {
        const cnpj = document.getElementById("cnpj").value;
        pessoa = new PessoaJuridica(nome, cnpj);
    }

    
    pessoas.push(pessoa);

    
    atualizarLista();
    
    this.reset();
    document.getElementById("cpfField").style.display = "none";
    document.getElementById("cnpjField").style.display = "none";
});


function atualizarLista() {
    const pessoasList = document.getElementById("pessoasList");
    pessoasList.innerHTML = ''; 

    pessoas.forEach(pessoa => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = pessoa.toString();
        pessoasList.appendChild(listItem);
    });
}


document.getElementById("tipoPessoa").addEventListener("change", function() {
    const tipoPessoa = this.value;
    if (tipoPessoa === "fisica") {
        document.getElementById("cpfField").style.display = "block";
        document.getElementById("cnpjField").style.display = "none";
    } else if (tipoPessoa === "juridica") {
        document.getElementById("cnpjField").style.display = "block";
        document.getElementById("cpfField").style.display = "none";
    } else {
        document.getElementById("cpfField").style.display = "none";
        document.getElementById("cnpjField").style.display = "none";
    }
});
