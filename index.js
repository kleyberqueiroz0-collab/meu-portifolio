// Função para abrir o modal de contacto
function contacto() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Fechar modal ao clicar fora da caixa branca
window.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        fecharModal();
    }
});

// Animação das barras de habilidades ao rolar a página
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(function(bar) {
                bar.style.width = bar.dataset.pct + '%';
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Inicia o observador na seção de habilidades
const skillsSection = document.getElementById('skills-section');
if (skillsSection) {
    observer.observe(skillsSection);
}const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Alterna a classe .light-mode no <body>
    body.classList.toggle('light-mode');
    
    // Opcional: Mudar o texto do botão
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = "Modo Escuro";
    } else {
        themeToggle.textContent = "Modo Claro";
    }
});