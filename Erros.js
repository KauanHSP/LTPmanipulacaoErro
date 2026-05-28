// TODO: Complete o exercício

// 1. Crie o erro personalizado CadastroError aqui:
class CadastroError extends Error{
    constructor(mensagem, campos){
        super(mensagem)
        this.name = "CadastroError"
        this.campos = campos
    }
}


function validarCadastro(dados) {
    let erros = []
    // 2. Implemente a validação aqui:
    if (!dados.nome ||dados.nome.trim().length < 3 ){
        // - nome: obrigatório, mínimo 3 caracteres
        erros.push({mensagem: "O nome deve ter mais de três caracteres " , campo: "nome"})
    }
    if (!dados.email ||!dados.email.includes("@")){
        // - email: obrigatório, deve conter @
        erros.push({mensagem: "O email deve conter @ " , campo: "email"})
    }
    if (!dados.senha ||dados.senha.length < 6){
        // - senha: obrigatória, mínimo 6 caracteres
        erros.push({mensagem: "A senha dev ter mais de seis caracteres", campo: "senha"})
    }
    if (!dados.idade ||dados.idade < 18){
        // - idade: obrigatória, >= 18
        erros.push({mensagem: "Você é menor de idade", campo: "idade"})
    }

    // Lance CadastroError se houver erros
    if (erros.length > 0 ){
        throw new CadastroError("cadastro falhou", erros )
    }


    return true;
}

function processarCadastro(dados) {
    // 3. Use try-catch e retorne objeto estruturado:
    // { sucesso: true, dados: ... } ou
    // { sucesso: false, erros: [...] }
    try {
        validarCadastro(dados)
        return {sucesso: true ,dados: dados}
    } catch (erro) {
        console.log("\nERRO , falha no cadastro:\n")
        return {sucesso: false , erros: erro.campos }
    }
}

// Teste suas funções:
// Dados válidos
console.log(processarCadastro({
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    idade: 20
}));

// Dados inválidos
console.log(processarCadastro({
    nome: "Jo",
    email: "email-invalido",
    senha: "123",
    idade: 16
}));

