"use client";

import React from 'react';
import { Flex, Grid, Heading, Text, Button } from '@/once-ui/components';
import StarBackground from '../../once-ui/components/StarBackground';

const AboutMe = () => {
  return (
    <Flex direction="column" align="center" style={{ position: 'relative', minHeight: '100vh' }}>
      <StarBackground />
      <Flex direction="column" align="center" style={{ zIndex: 1, padding: '0 20px', maxWidth: '800px' }}>
        <Heading color="white">
          About Me
        </Heading>
        <Text color="white" align="center" style={{ marginTop: '20px' }}>
          I am a passionate computer science and economics student, eager to explore the limitless possibilities of AI and 
          uncover the mysteries of the universe. With a strong foundation in programming and a deep curiosity for space, 
          I am driven to work on innovative projects that blend cutting-edge technology with scientific discovery. My journey 
          has led me to develop expertise in areas such as machine learning, astrophysics, and algorithm design, and I am 
          committed to making a meaningful impact in these fields.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
