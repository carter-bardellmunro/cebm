'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import SkillSet from '@/components/SkillSet';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

const Home = () => {
    return (
        <Flex flexDir="column" minH="100vh" px={[5, 10, 20, 120, 200]}>
            <HeroSection />
            <AboutMe />
            <SkillSet />
            <GetInTouch />
            <Footer />
        </Flex>
    );
};

export default Home;
