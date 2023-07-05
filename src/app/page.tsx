'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import SkillSet from '@/components/SkillSet';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

const Home = () => (
    <Box position="relative" minHeight="100vh">
        <HeroSection />
        <AboutMe />
        <SkillSet />
        <GetInTouch />
        <Footer />
    </Box>
);

export default Home;
