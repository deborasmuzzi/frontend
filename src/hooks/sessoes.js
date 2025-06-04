import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateSessao,  DeleteUsuario, GetSessoes} from "../services/api/endpoints"


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


export function useDeleteSessao({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: DeleteSessao, onSuccess, onError});}
