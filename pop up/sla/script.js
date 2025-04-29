document.addEventListener('DOMContentLoaded', function() {
    // Elementos da DOM
    const registrationScreen = document.getElementById('registration-screen');
    const profileSelectScreen = document.getElementById('profile-select-screen');
    const mainApp = document.getElementById('main-app');
    const completeRegistrationBtn = document.getElementById('complete-registration');
    const profileOptions = document.querySelectorAll('.profile-option');
    const currentYearSpan = document.getElementById('current-year');
    
    // Elementos do formulário
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    
    // Dados do usuário
    let userData = {
        name: '',
        email: '',
        password: '',
        profileType: 'general',
        profileSetup: false,
        tasks: []
    };
    
    // Sugestões de tarefas por perfil
    const profileSuggestions = {
        general: [
            "Beber 2L de água",
            "Exercício físico (30 min)",
            "Revisar tarefas do dia",
            "Ler um capítulo de um livro",
            "Meditar por 10 minutos",
            "Planejar o dia seguinte",
            "Desconectar 1h antes de dormir"
        ],
        student: [
            "Revisar anotações das aulas",
            "Preparar material para estudo",
            "Fazer exercícios práticos",
            "Pesquisar para trabalhos",
            "Participar de grupo de estudo",
            "Organizar cronograma de provas",
            "Revisar conteúdo antigo"
        ],
        athlete: [
            "Alongamento matinal",
            "Treino cardiovascular",
            "Treino de força",
            "Hidratação adequada",
            "Refeição pós-treino",
            "Descanso ativo",
            "Monitorar progresso físico"
        ]
    };
    
    // Conteúdo específico por perfil
    const profileContents = {
        general: {
            title: 'Perfil Geral',
            navItems: [
                { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
                { icon: 'fa-tasks', text: 'Tarefas', section: 'tasks' },
                { icon: 'fa-calendar-alt', text: 'Agenda', section: 'schedule' },
                { icon: 'fa-user', text: 'Perfil', section: 'profile' }
            ],
            dashboardContent: `
                <h2>Visão Geral</h2>
                <p>Este é seu organizador pessoal. Adicione tarefas, eventos e gerencie seu dia a dia.</p>
                <div class="dashboard-cards">
                    <div class="dashboard-card">
                        <h3>Suas Tarefas</h3>
                        <p>Organize suas atividades diárias</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Agenda</h3>
                        <p>Planeje seus compromissos</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Metas</h3>
                        <p>Defina e acompanhe seus objetivos</p>
                    </div>
                </div>
            `
        },
        student: {
            title: 'Perfil Estudante',
            navItems: [
                { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
                { icon: 'fa-book', text: 'Estudos', section: 'studies' },
                { icon: 'fa-calendar-alt', text: 'Provas', section: 'exams' },
                { icon: 'fa-tasks', text: 'Tarefas', section: 'tasks' },
                { icon: 'fa-user', text: 'Perfil', section: 'profile' }
            ],
            dashboardContent: `
                <h2>Visão Geral do Estudante</h2>
                <p>Organize suas matérias, provas e trabalhos acadêmicos.</p>
                <div class="dashboard-cards">
                    <div class="dashboard-card">
                        <h3>Matérias</h3>
                        <p>Gerencie suas disciplinas</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Provas</h3>
                        <p>Prepare-se para avaliações</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Trabalhos</h3>
                        <p>Organize seus projetos</p>
                    </div>
                </div>
            `
        },
        athlete: {
            title: 'Perfil Atleta',
            navItems: [
                { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
                { icon: 'fa-running', text: 'Treinos', section: 'workouts' },
                { icon: 'fa-utensils', text: 'Nutrição', section: 'nutrition' },
                { icon: 'fa-calendar-alt', text: 'Competições', section: 'competitions' },
                { icon: 'fa-user', text: 'Perfil', section: 'profile' }
            ],
            dashboardContent: `
                <h2>Visão Geral do Atleta</h2>
                <p>Acompanhe seus treinos, dieta e progresso esportivo.</p>
                <div class="dashboard-cards">
                    <div class="dashboard-card">
                        <h3>Treinos</h3>
                        <p>Planeje suas sessões de treino</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Nutrição</h3>
                        <p>Controle sua alimentação</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Progresso</h3>
                        <p>Acompanhe seu desenvolvimento</p>
                    </div>
                </div>
            `
        }
    };
    
    // Função para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validar formulário em tempo real
    function validateForm() {
        let isValid = true;
        
        // Validar nome
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Nome é obrigatório';
            nameInput.classList.add('input-error');
            isValid = false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('input-error');
        }
        
        // Validar email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email é obrigatório';
            emailInput.classList.add('input-error');
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Email inválido';
            emailInput.classList.add('input-error');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('input-error');
        }
        
        // Validar senha
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Senha é obrigatória';
            passwordInput.classList.add('input-error');
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Senha deve ter pelo menos 6 caracteres';
            passwordInput.classList.add('input-error');
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('input-error');
        }
        
        // Habilitar/desabilitar botão
        completeRegistrationBtn.disabled = !isValid;
        
        return isValid;
    }
    
    // Completar cadastro
    function completeRegistration() {
        if (!validateForm()) return;
        
        userData = {
            ...userData,
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };
        
        // Salvar no localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Mostrar tela de seleção de perfil
        registrationScreen.classList.remove('active');
        showProfileSelectScreen();
    }
    
    // Mostrar tela de seleção de perfil
    function showProfileSelectScreen() {
        profileSelectScreen.classList.add('active');
    }
    
    // Selecionar perfil
    function selectProfile(profileType) {
        userData = {
            ...userData,
            profileType,
            profileSetup: true
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        profileSelectScreen.classList.remove('active');
        showMainApp();
    }
    
    // Mostrar aplicativo principal
    function showMainApp() {
        mainApp.classList.add('active');
        setupAppForProfile();
    }
    
    // Configurar o app para o perfil selecionado
    function setupAppForProfile() {
        const profileContent = profileContents[userData.profileType];
        
        document.querySelector('header h1').textContent = 'Organizador Diário';
        document.getElementById('profile-subtitle').textContent = profileContent.title;
        
        const navUl = document.getElementById('main-nav');
        navUl.innerHTML = '';
        
        profileContent.navItems.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            
            if (index === 0) a.classList.add('active');
            
            a.setAttribute('data-section', item.section);
            a.innerHTML = `<i class="fas ${item.icon}"></i> ${item.text}`;
            
            a.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('#main-nav a').forEach(navA => {
                    navA.classList.remove('active');
                });
                this.classList.add('active');
                showSection(item.section);
            });
            
            li.appendChild(a);
            navUl.appendChild(li);
        });
        
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = '<div class="sections-container"></div>';
        const sectionsContainer = document.querySelector('.sections-container');
        
        profileContent.navItems.forEach(item => {
            const section = document.createElement('section');
            section.id = item.section;
            section.className = 'content-section';
            
            if (item.section === 'dashboard') {
                section.innerHTML = profileContent.dashboardContent;
            } else if (item.section === 'tasks') {
                section.innerHTML = `
                    <div class="routine-planner">
                        <h2>Minhas Tarefas</h2>
                        <div class="input-group">
                            <input type="text" id="taskInput" placeholder="Digite uma tarefa..." />
                            <button id="addBtn">Adicionar</button>
                        </div>
                        <ul class="task-list" id="taskList"></ul>
                        <h4 class="suggestion-title">Sugestões de Tarefas</h4>
                        <ul class="suggestion-list" id="suggestionList"></ul>
                    </div>
                `;
                setupTaskPlanner();
            } else {
                section.innerHTML = `<h2>${item.text}</h2><p>Conteúdo específico para ${item.text.toLowerCase()} no perfil ${userData.profileType}.</p>`;
            }
            
            sectionsContainer.appendChild(section);
        });
        
        showSection(profileContent.navItems[0].section);
    }
    
    // Configurar o planejador de tarefas
    function setupTaskPlanner() {
        const addBtn = document.getElementById('addBtn');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const suggestionList = document.getElementById('suggestionList');
        
        if (userData.tasks && userData.tasks.length > 0) {
            userData.tasks.forEach(task => {
                taskList.appendChild(createTaskItem(task));
            });
        }
        
        profileSuggestions[userData.profileType].forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.addEventListener('click', () => {
                taskInput.value = suggestion;
                taskInput.focus();
            });
            suggestionList.appendChild(li);
        });
        
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });
    }
    
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const task = taskInput.value.trim();
        
        if (task === '') return;
        
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
        
        userData.tasks.push(task);
        localStorage.setItem('userData', JSON.stringify(userData));
        
        taskInput.value = '';
        taskInput.focus();
    }
    
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        span.contentEditable = false;
        
        const btnGroup = document.createElement('div');
        btnGroup.className = "task-buttons";
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.onclick = () => {
            const editing = span.isContentEditable;
            span.contentEditable = !editing;
            span.focus();
            editBtn.textContent = editing ? 'Editar' : 'Salvar';
            
            if (!editing) {
                const index = Array.from(li.parentNode.children).indexOf(li);
                userData.tasks[index] = span.textContent;
                localStorage.setItem('userData', JSON.stringify(userData));
            }
        };
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Remover';
        delBtn.onclick = () => {
            const index = Array.from(li.parentNode.children).indexOf(li);
            userData.tasks.splice(index, 1);
            localStorage.setItem('userData', JSON.stringify(userData));
            li.remove();
        };
        
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(btnGroup);
        
        return li;
    }
    
    function showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) sectionToShow.classList.add('active');
    }
    
    // Inicialização
    function init() {
        const savedUserData = localStorage.getItem('userData');
        
        if (savedUserData) {
            userData = JSON.parse(savedUserData);
            
            if (userData.profileSetup) {
                showMainApp();
            } else {
                showProfileSelectScreen();
            }
        } else {
            registrationScreen.classList.add('active');
            // Configurar validação em tempo real
            nameInput.addEventListener('input', validateForm);
            emailInput.addEventListener('input', validateForm);
            passwordInput.addEventListener('input', validateForm);
            completeRegistrationBtn.addEventListener('click', completeRegistration);
        }
        
        currentYearSpan.textContent = new Date().getFullYear();
        
        // Configurar seleção de perfil
        profileOptions.forEach(option => {
            option.addEventListener('click', function() {
                selectProfile(this.getAttribute('data-profile'));
            });
        });
    }
    
    init();
});