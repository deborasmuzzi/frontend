import api from "./api";
//usuarios
export async function GetUsuarios() {
    const {data} =  await api.get(`/usuarios`);
    return data;
}
export async function CreateUsuario(body) {
    console.log("cheguei na endpoint")
    const {data} =  await api.post(`/usuario`, body);
    console.log(data)
    return data;
}
export async function UpdateUsuario(id, body) {
    const {data} = await api.put(`/usuario:${id}`, body);
    return data;
}
export async function DeleteUsuario(id) {
    const {data} = await api.delete(`/usuario:${id}`);
    return data;
}
//entidades2

export async function DeleteSessao(id_usuario) {
    const {data} = await api.delete(`/sessao:${id_usuario}`);
    return data;
}

export async function CreateSessao(id_usuario) {
    const {data} = await api.delete(`/sessao:${id_usuario}`);
    return data;
}
export async function GetSessoes() {
    const {data} = await api.get(`/sessoes`);
    return data;
}