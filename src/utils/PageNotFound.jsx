import { Center, Container } from '@chakra-ui/react'
import pageNotFound from '../assets/pageNotFound.jpg'
import React from 'react'

export default function PageNotFound() {
  return (
    <section>
        <Container>
            <Center h='100vh'>
                <img src={pageNotFound} alt="page not found" />
            </Center>
        </Container>
    </section>
  )
}
