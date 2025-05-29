import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateSessao, CreateUsuario, DeleteSessao, DeleteUsuario, GetSessoes, GetUsuarios, UpdateUsuario} from "../services/api/endpoints"

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
{return useMutation({mutationFn: UpdateUsuario, onSuccess, onError});
} 

export function useDeleteUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: DeleteUsuario, onSuccess, onError});
} 

//sessao

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