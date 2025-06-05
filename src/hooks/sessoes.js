import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateSessao,  DeleteSessao,  DeleteUsuario, GetSessoes} from "../services/api/endpoints"


export function useCreateSessao({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: CreateSessao, onSuccess, onError});
} 

export function useGetSessoes({onSuccess = () => {}, onError = () => {}, } = {}) {
    return useQuery({
    queryKey:["sessoes"],
    queryFn: GetSessoes,
    onSuccess, 
    onError});
} 

export function useDeleteSessao({ onSuccess, onError } = {}) {
  return useMutation({
    mutationFn: ({ id_usuario }) => DeleteSessao(id_usuario),
    onSuccess,
    onError,
  });
}