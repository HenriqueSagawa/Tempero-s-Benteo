import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userSchema = z.object({
    email: z.string().min(1, { message: "O email é obrigatório" }).email({ message: "Formato de email inválido" }),
    password: z.string().min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
})

export type LoginFormData = z.infer<typeof userSchema>;

export function useLoginForm() {
    return useForm<LoginFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })
}