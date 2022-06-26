import React from 'react';
import Header from './Header/Header';
import Quote from './Quote/Quote';
import Footer from './Footer/Footer';
import { HEADER } from '../Constants/Constants';

interface props{}

const Home: React.FC<props> = () => {
    return(
        <section>
            <Header title={HEADER.HEADING}/>
            <Quote />
            <Footer />
        </section>

    )
}

export default Home;
