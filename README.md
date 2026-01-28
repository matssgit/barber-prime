---
# 🪮 Barber-Prime | Hair Day - Professional

O **Barber-Prime** é uma plataforma robusta de agendamento de serviços, projetada para otimizar o fluxo de atendimento de barbearias e salões de estética. O foco do projeto foi construir uma interface de alta fidelidade visual (UI) aliada a uma lógica de gerenciamento de dados resiliente e modular.
---

## 🏛️ Arquitetura e Engenharia de Software

O projeto foi concebido utilizando os princípios de **Separação de Preocupações (SoC)** e **Responsabilidade Única (SRP)**, dividindo a aplicação em camadas lógicas:

### 1. Camada de Serviços (Data Access Layer)

Utilização da **Fetch API** para comunicação assíncrona com o back-end (JSON Server).

- **Gestão de Tipagem**: Implementação de tratamento rigoroso de IDs como `Strings` para garantir a integridade referencial nas rotas de exclusão do servidor.
- **Módulos**: `schedule-new.js`, `schedule-fetch-by-day.js` e `schedule-cancel.js` isolam as chamadas de rede da interface.

### 2. Camada de Domínio e Lógica (Business Logic)

- **Manipulação Temporal**: Integração profunda com a biblioteca **Day.js** para parse, validação e formatação de datas no padrão ISO e local (PT-BR).
- **Algoritmo de Períodos**: Implementação de uma lógica condicional para classificação automática de horários em janelas de atendimento (Manhã, Tarde e Noite).

### 3. Interface e Experiência (UI/UX)

- **Glassmorphism & 3D Design**: Estilização avançada com CSS moderno, utilizando `backdrop-filter` para efeitos de vidro, `perspective` para profundidade e sombras dinâmicas que fornecem feedback visual tátil ao usuário.
- **DOM Manipulation**: Renderização dinâmica de elementos HTML baseada no estado atual da API, garantindo uma interface sempre atualizada.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Finalidade                                                    |
| ---------------------- | ------------------------------------------------------------- |
| **JavaScript (ES6+)**  | Lógica central e manipulação de estado do DOM                 |
| **Day.js**             | Tratamento complexo de datas e horários                       |
| **Webpack & Babel**    | Bundler e transpilação para compatibilidade entre navegadores |
| **JSON Server**        | API REST simulada para persistência de dados                  |
| **CSS Grid & Flexbox** | Layout responsivo e arquitetura visual                        |

---

## 🧠 Desafios Técnicos e Soluções

Durante o desenvolvimento, um dos maiores desafios foi a **Incompatibilidade de Tipagem em APIs REST**.

- **Problema**: O servidor retornava erro 404 ao tentar deletar registros, pois o ID era gerado como `Number` no front-end, mas tratado de forma ambígua pelo banco de dados mockado.
- **Solução**: Padronização da geração de identificadores únicos via `String(new Date().getTime())`, garantindo que a chave de busca na URL fosse exatamente compatível com o registro no `server.json`.

---

## 📚 Base Teórica

A construção deste projeto foi guiada por conceitos extraídos de obras fundamentais presentes na minha biblioteca de estudos de ADS:

- **Entendendo Algoritmos**: Otimização de busca e filtragem de dados.
- **Estrutura de Dados e Algoritmos com JS**: Gerenciamento eficiente de objetos e arrays no front-end.
- **React Fluente**: Aplicação de mentalidade de estado e componentes, preparando o terreno para uma futura refatoração em framework.

---

## 🚀 Como Executar o Ambiente

1. **Instalação**: `npm install`
2. **Backend**: `npm run server` (Inicia o JSON Server na porta 3333)
3. **Frontend**: `npm run dev` (Inicia o Webpack Dev Server)

---

### 👨‍💻 Autor

**Matheus** – Estudante de ADS na UniSantos.
Apaixonado por pagode, Corinthians e por resolver problemas complexos através do código.

---
