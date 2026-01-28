import { apiConfig } from "./api-config";

// No seu schedule-cancel.js
export async function scheduleCancel({ id }) {
   try {
      // Tente garantir que o ID não tenha espaços em branco
      await fetch(`${apiConfig.baseURL}/schedules/${id.trim()}`, {
         method: "DELETE",
      });

      alert("Agendamento cancelado com sucesso!");
   } catch (error) {
      console.log(error);
   }
}
