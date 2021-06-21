let words = "oi alô como hoje tem tinha além foi que ele ela ter quando junta abriu abrir foi vamos parada linguiça costume região laboratório com o ter a ser gosta hoje você Rafael às louça prato participar linguiça busca bola balão roupa rito caça macarrão partida longe fora dentro gosta quem quando onde irá nunca paralelepípedo dançar dançarina música salada hospital médico rota viatura janta o ser como cartão combinar gravidade escrever avaliar coisa caso tempo ano dia vez homem senhor moço grande bom melhor pior certo último próprio ser ir estar ter haver fazer dar ficar poder ver não mais muito já quando mesmo depois ainda um dois primeiro cem mil uma de em para por com até mas ou também se assim como porque que eu você ele este esse isso sua aqui ali viu paz ser mal céu meu rio pôr vez amor fato viés mito caos zelo saga cedo ruim sagaz êxito mexer anexo honra justo muito fútil razão ícone casal genro digno tempo ânsia dengo ceder então saber mundo sendo velha forte neném cínico apogeu convém utopia índole idiota legado paixão apreço sóbrio julgar limiar solene hábito embora também dispor vulgar alocar desejo ciente sensação objeto alegria sucesso contudo alergia empatia exilado imersão conciso coragem parcial difusão volátil erudito orgulho inércia emotivo apático audácia escória família prudente sinônimo analogia ativista respaldo alicerce despeito consiste desfecho sucumbir portanto complexo gratidão singular vocábulo verídico instigar paradoxo história sanidade solícito repudiar processo paralelo emulação maestria pensado abstração  paradigma essencial plenitude deliberar esperança altruísta descrição desdenhar analítico explícito companhia resolução restrição expressão imparcial nostalgia consoante entediado pretérito convicção arrogante ambicioso dicionário detrimento incidência depreender disposição preliminar tribulação restringir excelência contemplar sarcasmo significado perspectiva resiliência expectativa realidade necessidade reivindicar cumprimento complexidade perseverança consideração sagaz termo nobre plena afeto ética sutil vigor porém porém fazer ideia moral assim anexo muito justo razão ícone etnia casal haver etnia digno então causa tempo dizer amigo comum culto forte ainda regra estar louco criar desse clava jeito pedir atrás ontem sábio vendo coisa presa enfim afins acaso lugar havia obter gerar feliz crise fluxo homem tédio grato ritmo certo favor tomar visão união bravo citar fator adiar fácil possa farsa façam olhar posso sinto levar achar exato gesto cesta atuar falta falso ranço legal morte brega tende leito doido terno ideal calma cauda humor claro caçar pobre velho rigor apoio algum rever outro gênio zelar jovem fonte vimos morar tanto vírus vazio adeus houve morro trama chata manha terra saída junto papel plano opção livro fugir comer treta nunca serão peixe rezar aliás leite sinal mudar saiba prazo época avião nação norma nossa sumir tenso tosco exame solto meses brava fixar andar reino traga sorte cópia aonde tirar grupo preto campo alado certa retém chuva quase corpo grave cheio apego caixa fenda carro nível vilão sabia filho antes índio lenda agora prova navio ligar autor elite rouca calda acesa livre firme coisa texto tetra pisar mente suave convém mérito pressa escopo isento paixão cínico casual receio ciente idiota hábito cômico êxtase dispor sessão formal dúvida ocioso ênfase utopia gentil rancor alocal inerte coesão julgar prover asseio acento método pensar encher objeto linear passar comigo várias embate grande férias sabido talvez frisar tensão xingar surgir omitir propor acerca índice pessoa"

threeLettersWords = []
fourLettersWords = []
fiveLettersWords = []
sixLettersWords = []
sevenLettersWords = []
eightLettersWords = []
nineLettersWords = []
tenLettersWords = []
elevenLettersWords = []

allWords = []

wordsArray = words.split(" ")

wordsArray.forEach(word => {
    switch(word.length) {
        case 3:
            threeLettersWords.push(word)
            break
        case 4:
            fourLettersWords.push(word)
            break
        case 5:
            fiveLettersWords.push(word)
            break
        case 6:
            sixLettersWords.push(word)
            break
        case 7:
            sevenLettersWords.push(word)
            break
        case 8:
            eightLettersWords.push(word)
            break
        case 9:
            nineLettersWords.push(word)
            break
        case 10:
            tenLettersWords.push(word)
            break
        case 11:
            elevenLettersWords.push(word)
           break
    }
    allWords.push(word)
}) 