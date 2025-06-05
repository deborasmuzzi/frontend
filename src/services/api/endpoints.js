import { useAuthStore } from "../../stores/auth";
import api from "./api";

//usuarios
export async function GetUsuarios() {
    const {data} =  await api.get(`/usuarios`);
    return data;
}
export async function CreateUsuario(body) {
    const {data} =  await api.post(`/usuario`, body);
    console.log(data)
    return data;
}

export async function UpdateUsuario({ id, nome, cargo, email, senha, senha2}) {
   const { token, usuario } = useAuthStore.getState();

  if (!token) {
    throw new Error("Usuário não autenticado ou token indisponível");
  }
  const { data } = await api.put(
    `/usuario/${id}`,
    { nome, cargo, email, senha, senha2 },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}


export async function DeleteUsuario(id) {
  const { token} = useAuthStore.getState();

  if (!token) {
    throw new Error("Usuário não autenticado ou token indisponível");
  }
  const { data } = await api.delete(
    `/usuario/${id}`,
   {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}

//entidades2

export async function DeleteSessao(id_sessao) {
  const token = useAuthStore.getState().token;

  const { data } = await api.delete(`/sessao/${id_sessao}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}


export async function CreateSessao({ id_usuario }) {
  const { token, usuario } = useAuthStore.getState();

  if (!token) {
    throw new Error("Usuário não autenticado ou token indisponível");
  }

  const { data } = await api.post(
    '/sessao',
    { id_usuario },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}




export async function GetSessoes() {
  const token = useAuthStore.getState().token;

  const response = await api.get("/sessoes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

console.log("response de /sessoes:", response);

  return response.data;
}
