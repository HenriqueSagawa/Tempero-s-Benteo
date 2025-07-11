import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Benefit {
    icon: LucideIcon
    title: string
    description: string
}

interface BenefitCardProps {
    benefit: Benefit
}

export function BenefitCard({ benefit }: BenefitCardProps) {
    return (
        <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
        </Card>
    )
}