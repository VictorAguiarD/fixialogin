document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Limpa mensagens de erro anteriores
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validação dos campos
        let isValid = true;

        // Validação do email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

        // Validação da senha
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        }

        // Se todos os campos forem válidos, simula um envio
        if (isValid) {
            alert('Login bem-sucedido!'); // Simulação de sucesso
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
