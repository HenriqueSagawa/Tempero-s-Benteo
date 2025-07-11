import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
    const products = [
        {
            id: 1,
            name: "Tempero de Alho Tradicional",
            description: "Nossa receita clássica com alho, sal marinho e ervas selecionadas para o dia a dia.",
            price: "R$ 15,90",
            originalPrice: "R$ 18,90",
            image: "/placeholder.svg?height=400&width=400",
            badge: "Mais Vendido",
            badgeColor: "green",
        },
        {
            id: 2,
            name: "Tempero de Alho Picante",
            description: "Para quem gosta de um toque especial com pimenta calabresa selecionada.",
            price: "R$ 17,90",
            image: "/placeholder.svg?height=400&width=400",
            badge: "Novidade",
            badgeColor: "red",
        },
        {
            id: 3,
            name: "Tempero de Alho Premium",
            description: "Versão gourmet com alho roxo e especiarias importadas de primeira qualidade.",
            price: "R$ 22,90",
            image: "/placeholder.svg?height=400&width=400",
            badge: "Premium",
            badgeColor: "yellow",
        },
        {
            id: 4,
            name: "Kit Degustação Completo",
            description: "Experimente todos os nossos sabores em porções ideais para conhecer nossa linha.",
            price: "R$ 39,90",
            originalPrice: "R$ 56,70",
            image: "/placeholder.svg?height=400&width=400",
            badge: "Oferta Especial",
            badgeColor: "orange",
        },
    ]

    return (
        <section id="produtos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-200 text-green-700 text-sm font-medium mb-6">
                        Temperos Tradicionais
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Nossos <span className="text-green-600">Temperos</span> Especiais
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Descubra nossa linha completa de temperos de alho artesanais. Cada produto é cuidadosamente preparado com
                        ingredientes selecionados para oferecer o melhor sabor e qualidade para sua cozinha.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                        Ver Todos os Produtos
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}