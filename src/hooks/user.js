import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateUsuario, DeleteUsuario, GetUsuarios, UpdateUsuario} from "../services/api/endpoints"
import api from "../services/api/api"

export function useCreateUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: CreateUsuario, onSuccess, onError});
} 

export function useGetUsuarios({onSuccess = () => {}, onError = () => {}, } = {}) {
    return useQuery({
    queryKey:["usuarios"],
    queryFn: GetUsuarios,
    onSuccess, 
    onError});
} 


export function useUpdateUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({
        mutationFn: async (usuarioData) => {
            if (!usuarioData.id) {
                throw new Error("ID do usuário é necessário para atualizar o perfil.");
            }
            const usuarioId = usuairoData.id;
            const payload = { ...usuarioData };
            delete payload.id;

            const { data } = await api.put(`/usuario/${id}`, payload);
            return data;
        },
        onSuccess,
        onError,
    });
}

export function useDeleteUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: DeleteUsuario, onSuccess, onError});
} 

//sessao
