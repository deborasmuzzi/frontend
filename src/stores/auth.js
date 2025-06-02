import { create } from 'zustand'
import {persist} from "zustand/middleware"
import {jwtDecode} from "jwt-decode"

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            usuario: null,
            setToken: (token) => {
                const {usuario} = jwtDecode(token);
                set({token, usuario});
            },
            setUsuario: (usuario) => setUsuario({usuario}),
            clearAuth : () => set({token: null, usuario: null}),
 
}),
        {
            name: "auth",
        }
    )
);
