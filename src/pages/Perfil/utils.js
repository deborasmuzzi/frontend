import z from "zod"

export const usuarioVallidationSchema = z.object({
    nome: z.string({required_error: "O nome é obrigatório"})
            .min(2, {message: "O nome deve ter no mínimo 2 caracteres"})
            .max(60, {message:"O nome é muito grande"}), 
    cargo: z.string({required_error: "O cargo é obrigatório"})
            .min(2, {message: "O cargo é obrigatório"}),
});
