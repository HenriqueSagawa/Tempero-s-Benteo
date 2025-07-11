'use client';

import { useState } from "react";
import { UserFormData, useUserForm } from "./register-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";


export function RegisterContent() {
    const form = useUserForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    async function onSubmit(values: UserFormData) {
        console.log("Formulário enviado", values);
        alert("Cadastro realizado com sucesso! (Verifique o console)");
    }

    function handleGoogleLogin() {
        console.log("Tentativa de login com o Google");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Crie sua conta</CardTitle>
                    <CardDescription>
                        É rápido e fácil. Preencha os campos abaixo para começar.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome completo</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Digite seu nome completo" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
                                                <Input {...field} type={showPassword ? "text" : "password"} placeholder="Crie uma senha forte" className="pr-10" />
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

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirmar Senha</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input {...field} type={showConfirmPassword ? "text" : "password"} placeholder="Repita a senha" className="pr-10" />
                                            </FormControl>
                                            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowConfirmPassword(prev => !prev)}>
                                                {showConfirmPassword ? (
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
                                Cadastrar
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

                    <Button variant="outline" className="w-full" type="button" onClick={handleGoogleLogin}>
                        <FaGoogle className="mr-2 h-4 w-4" />
                        Entrar com Google
                    </Button>
                </CardContent>
                <CardFooter>
                    <div className="w-full text-center text-sm text-muted-foreground">
                        Já possui conta?{' '}
                        <Link href="/login" className="font-semibold text-blue-500 hover:underline">
                            Faça login
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}