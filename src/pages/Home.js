import React from 'react';
import Header from '../components/Header'
import Slider from '../components/Slider'
import Categories from '../components/Categories';
import Branches from '../components/Branches'
import Offers from "../components/Offers";
import Wrapper from "../components/Wrapper";


function Home() {
    return (
        <Wrapper>
            <Header/>
            <Slider/>
            <Offers/>
            <Categories/>
            <Branches/>
        </Wrapper>
    );
}

export default Home;
