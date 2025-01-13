import Container from '@/components/layouts/container'
import Introduce from './components/introduce'
import GridBillboard from './components/grid-billboard'
import { Divider } from '@nextui-org/react'
import Footer from '@/components/layouts/footer'

export default function Home() {
  return (
    <Container>
      <div className='banner'>
        <Introduce />
      </div>
      <GridBillboard />
      <Divider />
      <Footer />
    </Container>
  )
}
