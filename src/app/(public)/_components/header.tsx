"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ShoppingCart, Search, User, ChevronDown, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export function Header() {
    const { data: session, status } = useSession();

    const cartItemsCount = 2;

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' });
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/*Logo*/}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900 hover:text-gray-800">Tempero&apos;s Benteo</span>
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

                        {/* Condição para mostrar perfil do usuário ou botão de entrar */}
                        {status === 'loading' ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                                <div className="hidden lg:block w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                        ) : session?.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center space-x-2 h-10 px-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                            {session.user.image ? (
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    quality={100}
                                                    src={session.user.image}
                                                    alt={session.user.name || 'Usuário'}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <User className="w-4 h-4 text-gray-600" />
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 hidden lg:block">
                                            {session.user.name || 'Usuário'}
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuItem asChild>
                                        <Link href="/perfil" className="flex items-start space-x-3 p-3 cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                {session.user.image ? (
                                                    <Image
                                                        width={100}
                                                        height={100}
                                                        quality={100}
                                                        src={session.user.image}
                                                        alt={session.user.name || 'Usuário'}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <User className="w-5 h-5 text-gray-600" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-gray-900 truncate">
                                                    {session.user.name || 'Usuário'}
                                                </div>
                                                <div className="text-sm text-gray-500 flex items-center">
                                                    Meu Perfil
                                                    <span className="ml-1">›</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer flex items-center text-red-600 hover:text-red-700">
                                        <LogOut className="w-4 h-4" />
                                        <span>Sair</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                                <Link href="/login">
                                    Entrar
                                </Link>
                            </Button>
                        )}
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
                                        <span className="text-xl font-bold text-gray-900">Tempero&apos;s Benteo</span>
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
                                            <Link href="/#sobre">
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

                                            {/* Seção de autenticação no mobile */}
                                            {status === 'loading' ? (
                                                <div className="flex items-center space-x-3 p-3">
                                                    <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                                                    <div className="w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
                                                </div>
                                            ) : session?.user ? (
                                                <>
                                                    <SheetClose asChild>
                                                        <Link href="/perfil">
                                                            <Button variant="ghost" className="w-full justify-start text-left" size="lg">
                                                                <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mr-3">
                                                                    {session.user.image ? (
                                                                        <Image
                                                                            width={100}
                                                                            height={100}
                                                                            src={session.user.image}
                                                                            alt={session.user.name || 'Usuário'}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <User className="w-3 h-3 text-gray-600" />
                                                                    )}
                                                                </div>
                                                                Meu Perfil
                                                            </Button>
                                                        </Link>
                                                    </SheetClose>
                                                    <SheetClose asChild>
                                                        <Button
                                                            variant="ghost"
                                                            className="w-full justify-start text-left text-red-600 hover:text-red-700"
                                                            size="lg"
                                                            onClick={handleSignOut}
                                                        >
                                                            <LogOut className="w-5 h-5 mr-3" />
                                                            Sair
                                                        </Button>
                                                    </SheetClose>
                                                </>
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link href="/login">
                                                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                                                            Entrar
                                                        </Button>
                                                    </Link>
                                                </SheetClose>
                                            )}
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