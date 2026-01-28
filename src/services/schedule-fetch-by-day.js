import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
   try {
      // Fazendo a requisição para buscar os agendamentos do dia
      const response = await fetch(`${apiConfig.baseURL}/schedules`);

      //   Converte para json.
      const data = await response.json();

      //   Filtra os agendamentos pela data fornecida.
      const dailySchedules = data.filter((schedule) =>
         dayjs(date).isSame(schedule.when, "day"),
      );

      return dailySchedules;
   } catch (error) {
      console.log(error);
      alert(
         "Não foi possível buscar os agendamentos do dia. Tente novamente mais tarde.",
      );
   }
}
