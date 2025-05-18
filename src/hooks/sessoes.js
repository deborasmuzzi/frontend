import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateSessao,  DeleteUsuario, GetSessoes} from "../services/api/endpoints"

export function useCreateSessao({
    onSucess = () => (), 
    onError = () => (),
     } = {})
{return useMutation({mutationFn: CreateSessao, onSuccess});
} 

export function useGetSessoes({onSucess = () => (), onError = () => (), } = {}) {
    return useQuery({
    queryKey:["sessoes"],
    queryFn: GetSessoes,
    onSuccess, 
    onError});
} 


export function useDeleteUsuario({
    onSucess = () => (), 
    onError = () => (),
     } = {})
{return useMutation({mutationFn: DeleteUsuario, onSuccess});
} 
