import api from "./api";
//usuarios
export async function GetUsuarios() {
    const {data} = api.get(`/usuarios`);
    return data;
}
export async function CreateUsuario(body) {
    console.log("cheguei na endpoint")
    const {data} = api.post(`/usuario`, body);
    console.log(data)
    return data;
}
export async function UpdateUsuario(id, body) {
    const {data} = api.put(`/usuario:${id}`, body);
    return data;
}
export async function DeleteUsuario(id) {
    const {data} = api.delete(`/usuario:${id}`);
    return data;
}
//entidades2

export async function DeleteSessao(id_usuario) {
    const {data} = api.delete(`/sessao:${id_usuario}`);
    return data;
}

export async function CreateSessao(id_usuario) {
    const {data} = api.delete(`/sessao:${id_usuario}`);
    return data;
}
export async function GetSessoes() {
    const {data} = api.get(`/sessoes`);
    return data;
}