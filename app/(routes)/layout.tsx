import Container from "@/components/shared/container";
import Footer from "@/components/shared/footer";
import { Divider } from "@nextui-org/react";

interface RoutesLayoutProps {
    children: React.ReactNode;
}

export default function RoutesLayout({
    children,
}: Readonly<RoutesLayoutProps>) {
    return (
        <Container>
            {children}
            <Divider />
            <Footer />
        </Container>
    );
}
