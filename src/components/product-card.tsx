'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import textImg from "../../public/foto-teste-alho.jpg";

interface Product {
    id: number
    name: string
    description: string
    price: string
    originalPrice?: string
    image: string
    badge?: string
    badgeColor?: string
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {

    const getBadgeColors = (color: string) => {
        switch (color) {
            case "green":
                return "bg-green-600 text-white hover:bg-green-700"
            case "red":
                return "bg-red-600 text-white hover:bg-red-700"
            case "yellow":
                return "bg-yellow-500 text-white hover:bg-yellow-600"
            case "orange":
                return "bg-orange-500 text-white hover:bg-orange-600"
            default:
                return "bg-gray-600 text-white hover:bg-gray-700"
        }
    }

    return (
        <Link href={`/produto/${product.id}`} className="block">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg bg-white">
                <div className="relative overflow-hidden">
                    <Image
                        src={textImg}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                        <Badge className={`absolute top-4 left-4 ${getBadgeColors(product.badgeColor || "gray")} shadow-lg`}>
                            {product.badge}
                        </Badge>
                    )}
                    <Button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </Button>
                </div>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-green-600">
                                {product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">
                                    {product.originalPrice}
                                </span>
                            )}
                        </div>
                    </div>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg group-hover:shadow-lg transition-all duration-300"
                    >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adicionar ao Carrinho
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}