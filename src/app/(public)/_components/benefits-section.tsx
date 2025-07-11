import { BenefitCard } from "./benefit-card";
import { Truck, Shield, Clock, Users } from "lucide-react";

export function BenefitsSection() {
    const benefits = [
        {
            icon: Truck,
            title: "Entrega Rápida",
            description: "Receba seus temperos em até 3 dias úteis em todo o Brasil.",
        },
        {
            icon: Shield,
            title: "Garantia de Qualidade",
            description: "Se não ficar satisfeito, devolvemos seu dinheiro em até 30 dias.",
        },
        {
            icon: Clock,
            title: "Sempre Fresco",
            description: "Produzimos sob demanda para garantir máximo frescor e sabor.",
        },
        {
            icon: Users,
            title: "Atendimento Personalizado",
            description: "Nossa equipe está sempre pronta para ajudar você.",
        },
    ]

    return (
        <section id="beneficios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Por Que Escolher a Tempero&apos;s Benteo?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Oferecemos muito mais que temperos excepcionais. Proporcionamos uma experiência completa de qualidade e
                        confiança.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    )
}