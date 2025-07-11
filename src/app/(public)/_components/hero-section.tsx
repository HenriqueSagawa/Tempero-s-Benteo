import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import testeImg from "../../../../public/foto-teste-alho.jpg";

export function HeroSection() {
    return (
        <section suppressHydrationWarning className="relative py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium shadow-sm">
                                <Award className="w-4 h-4 mr-2 text-green-600" />
                                Tradição e Qualidade desde 20XX
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                O Sabor Autentêntico do <span className="text-green-600">Alho Caseiro</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Há mais de XX anos levamos para sua mesa temperos artesanais feitos com ingredientes selecionados e
                                muito amor pela culinária tradicional brasileira.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size='lg' asChild className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                                <Link href="/buscar">
                                    Comprar Agora
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600 bg-transparent">
                                <Link target="_blank" href="https://wa.me/44991053790">
                                    <Phone className="w-5 h-5" />
                                    Falar no WhatsApp
                                </Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">500+</div>
                                <div className="text-sm text-gray-500 font-medium">Clientes Satisfeitos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">100%</div>
                                <div className="text-sm text-gray-500 font-medium">Natural</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                    <span className="text-3xl font-bold text-gray-900">5.0</span>
                                    <Star className="w-6 h-6 text-yellow-400 fill-current ml-1" />
                                </div>
                                <div className="text-sm text-gray-500 font-medium">Avaliação</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl">
                            <Image width={500} height={500} src={testeImg} className="rounded-2xl max-h-[400px] md:max-h-[600px] object-cover w-full" quality={100} priority alt="Tempero de alho Tempero's Benteo" />
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-100 rounded-full opacity-60"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}