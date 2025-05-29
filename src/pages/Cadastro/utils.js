import z from "zod"

export const usuarioVallidationSchema = z.object({
    nome: z.string({required_error: "O nome é obrigatório"})
            .min(2, {message: "O nome deve ter no mínimo 2 caracteres"})
            .max(60, {message:"O nome é muito grande"}),
    email: z.string({required_error: "O email é obrigatório"})
            .email({required_error: "O email é inválido"}),
    senha: z.string({required_error: "A senha é obrigatória"})
            .min(2, {message: "A senha deve ter no mínimo 2 caracteres"}),
    senha2: z.string({required_error: "Confirme sua senha"})
            .min(2, {message: "Confirme sua senha"}),
    cargo: z.string({required_error: "O cargo é obrigatório"})
            .min(2, {message: "O cargo é obrigatório"}),
});