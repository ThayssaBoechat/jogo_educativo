document.addEventListener('DOMContentLoaded', () => {
    const interactiveObjects = document.querySelectorAll('.interactive-object');
    const audioPlayer = document.getElementById('audio-player');

    // Função para falar o texto usando a API de síntese de voz
    function speak(text, lang) {
        // Cancela qualquer fala em andamento
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.onend = () => {
            // Quando a fala termina, permite que outras falas comecem
            window.speechSynthesis.cancel();
        };
        window.speechSynthesis.speak(utterance);
    }

    // Adiciona evento de clique para cada objeto interativo
    interactiveObjects.forEach(object => {
        object.addEventListener('click', () => {
            const ptWord = object.dataset.pt;
            const enWord = object.dataset.en;

            // Remove a classe de escala de todos os objetos
            interactiveObjects.forEach(obj => {
                obj.style.transform = 'scale(1)';
            });

            // Aplica o efeito de escala ao objeto clicado
            object.style.transform = 'scale(1.2)';

            // Fala a palavra em português
            speak(ptWord, 'pt-BR');

            // Espera um pouco e fala em inglês
            setTimeout(() => {
                speak(enWord, 'en-US');
            }, 1000);

            // Remove o efeito de escala após a animação
            setTimeout(() => {
                object.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// Tela de início
window.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startScreen.style.display = 'none';
        });
    }
}); 