import Container from "@/components/layouts/container";
import Introduce from "./components/introduce";
import GridBillboard from "./components/grid-billboard";
import { Divider } from "@nextui-org/react";
import Footer from "@/components/layouts/footer";
import SellersBanner from "./components/seller-banner";

export default function Home() {
    return (
        <Container>
            <div className="banner">
                <Introduce />
            </div>
            <GridBillboard />

            <SellersBanner />
            <Divider />
            <Footer />
        </Container>
    );
}
