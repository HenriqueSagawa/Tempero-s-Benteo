import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    email: z.string().min(1, { message: "O email é obrigatório" }).email({ message: "Formato de email inválido" }),
    password: z.string().min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
    confirmPassword: z.string().min(1, { message: "A confirmação da senha é obrigatória" })
})
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
});

export type UserFormData = z.infer<typeof userSchema>;

interface UseUserProps {
    name: string | null,
    email: string | null,
    password: string | null
}

export function useUserForm() {
    return useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })
}