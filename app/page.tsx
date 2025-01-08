import Container from "@/components/shared/container";
import Introduce from "./components/introduce";
import GridBillboard from "./components/grid-billboard";
import { Divider } from "@nextui-org/react";
import Footer from "@/components/shared/footer";

export default function Home() {
    return (
        <Container>
            <div className="banner">
                <Introduce />
            </div>
            <GridBillboard />
            <Divider />
            <Footer />
        </Container>
    );
}
