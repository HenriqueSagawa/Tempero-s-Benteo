import { Card } from "@/components/ui/card";
import { Heart, Leaf, Award, Users } from "lucide-react";
import testeImg from "../../../../public/foto-teste-alho.jpg"
import Image from "next/image";

export function AboutSection() {
    const features = [
        {
            icon: Heart,
            title: "Feito com Amor",
            description: "Cada tempero é preparado artesanalmente com dedicação e carinho pela tradição culinária.",
            color: "red",
        },
        {
            icon: Leaf,
            title: "100% Natural",
            description: "Utilizamos apenas ingredientes naturais, sem conservantes ou aditivos químicos.",
            color: "green",
        },
        {
            icon: Award,
            title: "Qualidade Premium",
            description: "Selecionamos os melhores alhos e especiarias para garantir sabor excepcional.",
            color: "yellow",
        },
        {
            icon: Users,
            title: "Tradição Familiar",
            description: "Receitas passadas de geração em geração, preservando o sabor autêntico.",
            color: "blue",
        },
    ]

    const getIconColor = (color: string) => {
        switch (color) {
            case "red":
                return "text-red-600 bg-red-50"
            case "green":
                return "text-green-600 bg-green-50"
            case "yellow":
                return "text-yellow-600 bg-yellow-50"
            case "blue":
                return "text-blue-600 bg-blue-50"
            default:
                return "text-gray-600 bg-gray-50"
        }
    }

    return (
        <section id="sobre" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Nossa História
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A Tempero&apos;s Benteo nasceu da paixão pela culinária tradicional e do desejo de levar o sabor autêntico do
                        alho caseiro para sua mesa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Tradição e Qualidade em Cada Tempero
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Há mais de XX anos, nossa família se dedica ao cultivo e preparo artesanal de temperos de alho. Começamos
                            em nossa própria cozinha, aperfeiçoando receitas passadas de geração em geração.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Hoje, mantemos o mesmo cuidado artesanal de sempre, selecionando cada ingrediente e preparando nossos
                            temperos em pequenos lotes para garantir a máxima qualidade e frescor.
                        </p>
                        <div className="flex items-center space-x-4 pt-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-700">Ingredientes Selecionados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-700">Processo Artesanal</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden h-96">
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <Image
                                src={testeImg}
                                alt="Processo artesanal de preparo dos temperos"
                                className="rounded-lg w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${getIconColor(feature.color)}`}
                            >
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}