"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";

export function Header() {

    const [cartItemsCount, setCartItemsCount] = useState(2);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/*Logo*/}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900 hover:text-gray-800">Tempero's Benteo</span>
                    </Link>

                    {/*Navbar para pc*/}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/#sobre" className="text-gray-700 hover:text-green-600 transition-colors">Sobre</Link>
                        <Link href="/#produtos" className="text-gray-700 hover:text-green-600 transition-colors">Produtos</Link>
                        <Link href="/contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</Link>
                    </nav>

                    {/* Outras funções da nav de pc */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/buscar">
                            <Button variant="ghost" size="sm">
                                <Search className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/conta">
                            <Button variant="ghost" size="sm">
                                <User className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/carrinho" className="relative">
                            <Button variant="ghost" size="sm">
                                <ShoppingCart className="w-4 h-4" />
                                {cartItemsCount > 0 && (
                                    <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-red-600 text-white text-xs">
                                        {cartItemsCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                            <Link href="/login">
                                Entrar
                            </Link>
                        </Button>
                    </div>

                    {/* Menu mobile */}

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size='sm' className="p-2">
                                    <Menu className="w-6 h-6" />
                                    <span className="sr-only">Abrir menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="w-80 sm:w-96 p-4" side="right">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-gray-900">Tempero's Benteo</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="space-y-6">
                                    <nav className="space-y-4">
                                        <SheetClose asChild>
                                            <Link href="/#produtos">
                                                <Button variant="ghost" className="w-full text-base justify-start text-left" size='lg'>
                                                    Produtos
                                                </Button>
                                            </Link>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Link href="/#buscar">
                                                <Button variant="ghost" className="w-full text-base justify-start text-left" size='lg'>
                                                    Sobre
                                                </Button>
                                            </Link>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Link href="/contato">
                                                <Button variant="ghost" className="w-full text-base justify-start text-left" size='lg'>
                                                    Contato
                                                </Button>
                                            </Link>
                                        </SheetClose>
                                    </nav>

                                    <div className="border-t border-gray-200 pt-6">
                                        <div className="space-y-4">
                                            <SheetClose asChild>
                                                <Link href="/buscar">
                                                    <Button variant="ghost" className="w-full justify-start text-left" size='lg'>
                                                        <Search className="w-5 h-5 mr-3" />
                                                        Buscar Produtos
                                                    </Button>
                                                </Link>
                                            </SheetClose>

                                            <SheetClose asChild>
                                                <Link href="/conta">
                                                    <Button variant="ghost" className="w-full justify-start text-left" size="lg">
                                                        <User className="w-5 h-5 mr-3" />
                                                        Minha Conta
                                                    </Button>
                                                </Link>
                                            </SheetClose>

                                            <SheetClose asChild>
                                                <Link href="/carrinho">
                                                    <Button variant="ghost" className="w-full justify-start text-left relative" size="lg">
                                                        <ShoppingCart className="w-5 h-5 mr-3" />
                                                        Carrinho
                                                        {cartItemsCount > 0 && (
                                                            <Badge className="ml-auto bg-red-600 text-white">{cartItemsCount}</Badge>
                                                        )}
                                                    </Button>
                                                </Link>
                                            </SheetClose>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}