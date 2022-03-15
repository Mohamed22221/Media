import React from 'react'
import styled from 'styled-components'
import Header from '../Component/Home/Header'
import Who from '../Component/Home/who'


const Home = () => {
  return (
    <MainHome>
  <Header />
  <Who />
    </MainHome>

  )
}

const MainHome = styled.div`
`
export default Home