"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select";
import { ProductCard } from "@/components/product-card";

export function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("all");
    const [sortBy, setSortBy] = useState("relevance");

    const products = [
        {
            id: 1,
            name: "Tempero de Alho Tradicional",
            description: "Nossa receita clássica com alho, sal marinho e ervas selecionadas.",
            price: "R$ 15,90",
            originalPrice: "R$ 18,90",
            image: "/placeholder.svg?height=300&width=300",
            badge: "Mais Vendido",
            badgeColor: "green",
            category: "tradicional",
            priceValue: 15.9,
        },
        {
            id: 2,
            name: "Tempero de Alho Picante",
            description: "Para quem gosta de um toque especial com pimenta calabresa.",
            price: "R$ 17,90",
            image: "/placeholder.svg?height=300&width=300",
            badge: "Novidade",
            badgeColor: "red",
            category: "picante",
            priceValue: 17.9,
        },
        {
            id: 3,
            name: "Tempero de Alho Premium",
            description: "Versão gourmet com alho roxo e especiarias importadas.",
            price: "R$ 22,90",
            image: "/placeholder.svg?height=300&width=300",
            badge: "Premium",
            badgeColor: "yellow",
            category: "premium",
            priceValue: 22.9,
        },
        {
            id: 4,
            name: "Kit Degustação",
            description: "Experimente todos os nossos sabores em porções menores.",
            price: "R$ 39,90",
            originalPrice: "R$ 56,70",
            image: "/placeholder.svg?height=300&width=300",
            badge: "Oferta",
            badgeColor: "orange",
            category: "kit",
            priceValue: 39.9,
        },
    ]

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        const matchesPrice = priceRange === 'all' || (priceRange === "0-20" && product.priceValue <= 20) || (priceRange === "20-30" && product.priceValue > 20 && product.priceValue <= 30) || (priceRange === "30+" && product.priceValue > 30)

        return matchesCategory && matchesPrice && matchesSearch;
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.priceValue - b.priceValue
            case "price-high":
                return b.priceValue - a.priceValue
            case "name":
                return a.name.localeCompare(b.name)
            default:
                return 0
        }
    })

    return (
        <div className="pt-20 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Buscar Produtos</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input placeholder="Buscar temperos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
                        </div>
                        <Button className="flex items-center bg-transparent" variant='outline'>
                            <SlidersHorizontal className="w-4 h-4 mr-2" />
                            Filtros
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-4">Categorias</h3>
                                <div className="space-y-2">
                                    {[
                                        { value: "all", label: "Todos os Produtos" },
                                        { value: "tradicional", label: "Tradicional" },
                                        { value: "picante", label: "Picante" },
                                        { value: "premium", label: "Premium" },
                                        { value: "kit", label: "Kits" },
                                    ].map((category) => (
                                        <Button
                                            key={category.value}
                                            variant="ghost"
                                            onClick={() => setSelectedCategory(category.value)}
                                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.value ? "bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700" : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {category.label}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-4">Faixa de Preço</h3>
                                <div className="space-y-2">
                                    {[
                                        { value: "all", label: "Todos os Preços" },
                                        { value: "0-20", label: "Até R$ 20" },
                                        { value: "20-30", label: "R$ 20 - R$ 30" },
                                        { value: "30+", label: "Acima de R$ 30" },
                                    ].map((range) => (
                                        <Button
                                            variant="ghost"
                                            key={range.value}
                                            onClick={() => setPriceRange(range.value)}
                                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${priceRange === range.value ? "bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700" : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {range.label}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600">
                                {sortedProducts.length} produto{sortedProducts.length !== 1 ? "s" : ""} encontrado
                                {sortedProducts.length !== 1 ? "s" : ""}
                                {searchTerm && ` para "${searchTerm}"`}
                            </p>
                            <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                                <SelectTrigger className="w-[180px] border border-gray-300 rounded-lg px-3 py-2">
                                    <SelectValue placeholder="Ordenar por..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="relevance">Relevância</SelectItem>
                                    <SelectItem value="price-low">Menor Preço</SelectItem>
                                    <SelectItem value="price-high">Maior Preço</SelectItem>
                                    <SelectItem value="name">Nome A-Z</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {sortedProducts.length > 0 ? (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {sortedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum produto encontrado</h3>
                                <p className="text-gray-600 mb-4">Tente ajustar seus filtros ou termo de busca</p>
                                <Button
                                    onClick={() => {
                                        setSearchTerm("")
                                        setSelectedCategory("all")
                                        setPriceRange("all")
                                    }}
                                    variant="outline"
                                >
                                    Limpar Filtros
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}