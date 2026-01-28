import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.querySelector("#date");

// Data atual para o input date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
   // Previne o comportamento padrão de atualizar a página ao submeter o formulário
   event.preventDefault();

   try {
      // Recuperando o nome do cliente.
      const name = clientName.value.trim();

      if (!name) {
         return alert("Por favor, informe o nome do cliente!");
      }

      // Recupera o horário selecionado.
      const hourSelected = document.querySelector(".hour-selected");

      // Recupera o horário selecionado.
      if (!hourSelected) {
         return alert("Por favor, selecione um horário para o agendamento!");
      }

      // Recupera somente a hora.
      const [hour] = hourSelected.innerText.split(":");

      // Insere a hora na data
      const when = dayjs(selectedDate.value).add(hour, "hour");

      // Gera um ID
      const id = new Date().getTime();

      await scheduleNew({ id, name, when: when.format("DD/MM/YYYY") });
      console.log({ id, name, when: when.format("DD/MM/YYYY") });
   } catch (error) {
      alert("Não foi possível realizar o agendamento.");
      console.log(error);
   }
};
