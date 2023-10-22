let opcao = ""

do {
    opcao = prompt (
        "Seja bem vindo \n" +
        "\n Escolha uma das opções abaixo" +
        "\n 1. opção 1" +
        "\n 2. opção 2" +
        "\n 3. opção 3" +
        "\n 4. opção 4" +
        "\n 5. encerrar"
    )
    switch (opcao) {
        case "1": alert ("Você escolheu a opção 1")
        break
        case "2": alert ("Você escolheu a opção 2")
        break
        case "3": alert ("Você escolheu a opção 3")
        break
        case "4": alert ("Você escolheu a opção 4")
        break
        case "5": alert ("Você escolheu encerrar")
        alert ("Encerrando")
        break

        default: alert ("Opção inválida")
    }

} while (opcao !== "5")