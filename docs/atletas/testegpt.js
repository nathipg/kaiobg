document.addEventListener("DOMContentLoaded", () => {
    const atletas = {
        "gabriel_peagno": {
            nome: "Gabriel Peagno",
            foto: "../galeria/gadiel.png",
            grafico:"../galeria/testes.png",
            nascimento: "2003-02-16",
            plano: "Consultoria de treino",
            frequencia: "4x semana",
            numero: "#1/2024",
            foco: "Constância é a chave para o resultado",
            dataProducao: "29/12",
            desempenho: "0/10",
            
            objetivo_principal: "Criar rotina, emagrecer, fortalecer, saúde física e mental e entrar em forma",
            treinos: [
                {texto: "Treino funcional A", url: "http://kaioguerrero.com/atletas/gabriel_peagno_a"},
                {texto: "Treino funcional B", url: "http://kaioguerrero.com/atletas/gabriel_peagno_b"},
                {texto: "Treino Basquete", url: "http://kaioguerrero.com/atletas/gabriel_peagno_c"},
                { texto: "Treino Corrida", url: "https://docs.google.com/spreadsheets/d/1iiu6vaaa4803hvowzGfDG_Pd6j_8-LPz7OWbcy2wHfQ/edit?usp=sharing" },
                
            ],
            testes:[
                {texto: "Teste detalhado", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "nathipg": {
            nome: "Nathália Pissuti",
            foto: "../galeria/nathalia.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1996-05-12",
            plano: "Presencial 1x por semana / 3x lição de casa",
            frequencia: "4x semana",
            numero: "#1/2024",
            foco: "Bora lá que você consegue",
            dataProducao: "29/12",
            desempenho: "5/10",
            
            objetivo_principal: "Fortalecimento geral, fortalecimento específico de músculos para forçar menos o joelho, melhora da postura",
            treinos: [
                { texto: "Treino Adaptado", url: "http://kaioguerrero.com/atletas/nathipg_a" },
                
            ],
            testes:[
                {texto: "Teste detalhado", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Marinaggm": {
            nome: "Marina Maza",
            foto: "../galeria/mazza.png",
            grafico:"../galeria/mazzat.png",
            nascimento: "1990-02-16",
            plano: "Presencial 2x por semana/ 2x academia",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Cuidado com a lombar",
            dataProducao: "29/12",
            desempenho: "5/10",
            objetivo_principal: "Treinos focados em emagrecimento, saúde e condicionamento",
            treinos: [
                { texto: "Treino Fim de ano", url: "http://kaioguerrero.com/atletas/Marinaggm_a" },
                
            ],
            testes:[
                {texto: "Teste detalhado", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Simioni": {
            nome: "Marcelo  Simioni",
            foto: "../galeria/simioni.png",
            grafico:"../galeria/simionit.png",
            nascimento: "1990-07-28",
            plano: "Presencial 2x por semana/ 2x academia",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Para de ficar lavando couve",
            dataProducao: "29/12",
            desempenho: "5/10",

            objetivo_principal: "Treinos focados em emagrecimento, saúde e prevenção de lesão",
            treinos: [
                { texto: "Treino Fim de ano", url: "http://kaioguerrero.com/atletas/Simioni_a" },
                
            ],
            testes:[
                {texto: "Teste detalhado", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "rafmbr": {
            nome: "Rafael de Menezes Barros",
            foto: "../galeria/rafael.png",
            grafico:"../galeria/testes.png",
            nascimento: "1988-08-09",
            plano: "Consultoria de treino",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Grandes resultados começam com uma simples escolha",
            dataProducao: "29/12",
            desempenho: "0/10",

            objetivo_principal: "Condicionamento físico geral",
            treinos: [
                {texto: "Treino A - Agora vai", url: "http://kaioguerrero.com/atletas/rafmbr_a" },
                {texto: "Treino B - Bora que dá", url: "http://kaioguerrero.com/atletas/rafmbr_b"},
                {texto: "Treino C - Cê consegue", url: "http://kaioguerrero.com/atletas/rafmbr_c"},
                
            ],
            testes:[
                {texto: "Teste detalhado", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        }
    };

    // Pega a URL para determinar o atleta
    const atletaId = window.location.pathname.split("/").pop().split(".")[0];
    const atleta = atletas[atletaId];

    if (!atleta) {
        window.location.href = "../index.html";
        return;
    }
    
    const calcularIdade = (nascimento) => {
        const dataNascimento = new Date(nascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        if (
            hoje.getMonth() < dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
        ) {
            idade--;
        }
        return idade;
    };

    const idade = calcularIdade(atleta.nascimento);

    const atletaHTML = `
        <div class="card-container">
    <div class="card">
        <div class="card-front">
            <header class="card-header">
                <h1>${atleta.nome}</h1>
            </header>
            <div class="card-body">
                <img src="${atleta.foto}" alt="Foto do atleta ${atleta.nome}" class="foto">
                <p><b>Idade:</b> ${idade} anos</p>
                <p><b>Plano:</b> ${atleta.plano}</p>
                <p><b>Frequência:</b> ${atleta.frequencia}</p>
                <p><b>Treino Número:</b> ${atleta.numero}</p>
                <p><b>Foco:</b> ${atleta.foco}</p>
                <p><b>Produção:</b> ${atleta.dataProducao}</p>
                <div class="acoes">
                    ${atleta.treinos.map(link => `<a href="${link.url}" class="botao">${link.texto}</a>`).join('')}
                </div>
                </br>
               
                
</a>
            </div>
            <div class="flip-indicator">↩ </div>
        </div>
        <div class="card-back">
        <header class="card-header">
                <h1>Objetivos</h1>
            </header>
            <div class="info">
                
                <p> ${atleta.objetivo_principal}</p>
                <p><b>Desempenho no último mês:</b> ${atleta.desempenho}</p>
                <div class="acoes">
                    ${atleta.testes.map(link => `<a href="${link.url}" class="acoes b">${link.texto}</a>`).join('')}
                </div>
                <img src="${atleta.grafico}" alt="Foto do atleta ${atleta.nome}" class="foto">
                 <div class=" whatss">
                    ${atleta.whats.map(link => `<a href="${link.url}" class="botao">${link.texto}</a>`).join('')}
                </div>
            </div>
           
            <div class="flip-indicator">↩ </div>
        </div>
    </div>
</div>
    `;

    const atletaMain = document.getElementById("atletaMain");
    atletaMain.innerHTML = atletaHTML;

    // const card = document.querySelector(".card");
    // card.addEventListener("click", () => {
    //     card.classList.toggle("flipped");
    // });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const link = card.querySelector("a");  // Selecionando o link dentro do card

    // Quando o link for clicado, impedir que o card vire e acessar diretamente o link
    if (link) {
        link.addEventListener("click", function (e) {
            e.stopPropagation();  // Previne que o evento de clique no link propague para o card (impedindo o flip)
            window.location.href = link.href;  // Redireciona diretamente para o link
        });
    }

    // Agora o card realiza o flip em qualquer clique que não seja no link
    card.addEventListener("click", (e) => {
        if (!e.target.closest("a")) {  // Se o clique não for dentro de um link, realiza o flip
            card.classList.toggle("flipped");
        }
    });
});