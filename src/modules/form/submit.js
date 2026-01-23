import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.querySelector("#date");

// Data atual para o input date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
   // Previne o comportamento padrão de atualizar a página ao submeter o formulário
   event.preventDefault();

   console.log("Formulário enviado!");
};
