document.addEventListener("DOMContentLoaded", () => {
    const atletas = {
        "carolina-uliana": {
            nome: "Carolina Uliana",
            foto: "../assets/carol.jpg",
            nascimento: "1996-05-12",
            plano: "Presencial 1x por semana / 2x lição de casa",
            frequencia: "3x semana",
            numero: "#1/2024",
            foco: "Saúde e emagrecimento",
            dataProducao: "10/01",
            links: [
                { texto: "Treino Academia A", url: "http://kaioguerrero.com/atletas/5614_a" },
                { texto: "Treino Academia B", url: "http://kaioguerrero.com/atletas/5614_b" }
            ]
        },
        "joao-silva": {
            nome: "João Silva",
            foto: "../galeria/tacila.png",
            grafico:"../galeria/bia2.png",
            nascimento: "1989-11-20",
            plano: "Treino remoto 3x por semana",
            frequencia: "3x semana",
            numero: "#2/2024",
            foco: "Aumento de massa muscular",
            dataProducao: "15/02",
            
            
            objetivo_principal: "Ganho de massa magra",
            treinos: [
                { texto: "Treino Online A", url: "http://kaioguerrero.com/atletas/5614_a" },
                { texto: "Treino Online B", url: "http://kaioguerrero.com/atletas/joao_b" },
                { texto: "Testes", url: "http://kaioguerrero.com/atletas/5614_a" }
            ],
            testes:[
                {texto: "Teste", url: "http://kaioguerrero.com/atletas/5614_a"}
            ]
            
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
                <p><b>Produzido em:</b> ${atleta.dataProducao}</p>
                <div class="acoes">
                    ${atleta.treinos.map(link => `<a href="${link.url}" class="botao">${link.texto}</a>`).join('')}
                </div>
                </br>
            </div>
            <div class="flip-indicator">↩ Girar</div>
        </div>
        <div class="card-back">
        <header class="card-header">
                <h1>Objetivos</h1>
            </header>
            <div class="info">
                
                <p> ${atleta.objetivo_principal}</p>
                <p><b>Produzido em:</b> ${atleta.dataProducao}</p>
                <div class="acoes">
                    ${atleta.testes.map(link => `<a href="${link.url}" class="acoes b">${link.texto}</a>`).join('')}
                </div>
                <img src="${atleta.grafico}" alt="Foto do atleta ${atleta.nome}" class="foto">
                
            </div>
            <div class="flip-indicator">↩ Voltar</div>
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