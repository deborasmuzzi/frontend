import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateUsuario, DeleteUsuario, GetUsuarios, UpdateUsuario} from "../services/api/endpoints"

export function useCreateUsuario({
    onSucess = () => (), 
    onError = () => (),
     } = {})
{return useMutation({mutationFn: CreateUsuario, onSuccess});
} 

export function useGetUsuarios({onSucess = () => (), onError = () => (), } = {}) {
    return useQuery({
    queryKey:["usuarios"],
    queryFn: GetUsuarios,
    onSuccess, 
    onError});
} 


export function useUpdateUsuario({
    onSucess = () => (), 
    onError = () => (),
     } = {})
{return useMutation({mutationFn: UpdateUsuario, onSuccess});
} 

export function useDeleteUsuario({
    onSucess = () => (), 
    onError = () => (),
     } = {})
{return useMutation({mutationFn: DeleteUsuario, onSuccess});
} 
