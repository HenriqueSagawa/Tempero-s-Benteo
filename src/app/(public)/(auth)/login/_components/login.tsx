'use client';

import { useState } from "react";
import Link from 'next/link';
import { LoginFormData, useLoginForm } from "./login-form"; // Importa do novo arquivo
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { handleRegister } from "@/app/(public)/_actions/login";

export function LoginContent() {
    const form = useLoginForm();
    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(values: LoginFormData) {
        console.log("Formulário de LOGIN enviado", values);
        alert("Login realizado com sucesso! (Verifique o console)");
    }

    async function handleLogin() {
        await handleRegister("google");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Faça seu login</CardTitle>
                    <CardDescription>
                        Bem-vindo de volta! Insira suas credenciais.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="email" placeholder="seu@email.com" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Senha</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input {...field} type={showPassword ? "text" : "password"} placeholder="Digite sua senha" className="pr-10" />
                                            </FormControl>
                                            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowPassword(prev => !prev)}>
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-muted-foreground" />
                                                )}
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                                Entrar
                            </Button>
                        </form>
                    </Form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">
                                OU
                            </span>
                        </div>
                    </div>

                    <Button onClick={handleLogin} variant="outline" className="w-full" type="button">
                        <FaGoogle className="mr-2 h-4 w-4" />
                        Entrar com Google
                    </Button>
                </CardContent>

                <CardFooter>
                    <div className="w-full text-center text-sm text-muted-foreground">
                        Não tem uma conta?{' '}
                        <Link href="/register" className="font-semibold text-blue-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}