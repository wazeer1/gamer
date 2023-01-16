import React from 'react'
import styled from 'styled-components'
import Header from '../includes/Header'
import Contact from './Contact'
import Spotlight from './Spotlight'
import Teams from './Teams'
import Upcoming from './Upcoming'

const HomeScreen = () => {
  return (
    <Container>
        <Header/>
        <Spotlight/>
        <Upcoming/>
        <Teams/>
        <Contact/>
    </Container>
  )
}

export default HomeScreen
const Container = styled.div``;