import { Container } from '@/components/Container'
import Pricing from '@/components/Pricing'
import Head from 'next/head'

export default function HireMe() {
  return (
    <>
      <Head>
        <title>Hire Me - Farhan Helmy</title>
        <meta name="description" content="Hire me" />
      </Head>
      <Container>
        <Pricing />
      </Container>
    </>
  )
}
