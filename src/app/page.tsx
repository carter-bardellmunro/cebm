'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import SkillSet from '@/components/SkillSet';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

const Home = () => (
    <Flex flexDir="column" minH="100vh">
        <HeroSection />
        <AboutMe />
        <SkillSet />
        <GetInTouch />
        <Footer />
    </Flex>
);

export default Home;
