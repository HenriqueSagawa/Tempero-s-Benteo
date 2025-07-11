import { Header } from "./_components/header";

export default function HomeLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <div suppressHydrationWarning>
            <Header />
            {children}
        </div>
    )
}