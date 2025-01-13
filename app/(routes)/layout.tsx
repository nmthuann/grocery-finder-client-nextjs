import Container from '@/components/layouts/container'
import Footer from '@/components/layouts/footer'
import { Divider } from '@nextui-org/react'

interface RoutesLayoutProps {
  children: React.ReactNode
}

export default function RoutesLayout({ children }: Readonly<RoutesLayoutProps>) {
  return (
    <Container>
      {children}
      <Divider />
      <Footer />
    </Container>
  )
}
