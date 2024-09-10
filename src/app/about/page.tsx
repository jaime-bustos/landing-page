"use client";

import React from 'react';
import { Flex, Heading, Text, Button} from '@/once-ui/components';
import StarBackground from '../../once-ui/components/StarBackground';

const AboutMe = () => {
  return (
    <Flex
      direction="column"
      align="center"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StarBackground />
      <Flex
        direction="column"
        align="center"
        style={{
          zIndex: 1,
          padding: '40px',
          maxWidth: '800px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Button
          href="/projects"
          suffixIcon="chevronRight"
          variant="secondary">
          Portfolio
        </Button>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGrhP2ppUZqyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673057401650?e=1730937600&v=beta&t=CrBYf7MvaIQ8hbgSDW2UfnzPSHvnzh6IJBLJHvB4jjs"
          alt="Your Picture"
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px', alignSelf: 'center'}}
        />
        <Heading style={{ color: 'black' }}>Jaime Bustos</Heading>
        <Heading style={{ color: 'black', fontSizeAdjust: '0.35', padding: '20px'}}>B.S. Computer Science, Business Economics</Heading>
        <Flex
          direction="row"
          style={{
            width: '90%',
            justifyContent: 'space-between',
            alignSelf: 'center',
            padding: '10px',
            fontSize: '15px'
          }}
        >
          <Text style={{ textAlign: 'left', color: 'black', paddingRight: '20px'}}>
            <b>Languages</b>: Python, R, C++, C, Java<br />
            <br /><b>Tools</b>: Git, Pandas, Numpy, Keras, Seaborn, Matplotlib, SaTScan, Jupyter, scikit-learn, STATA, Microsoft Office
          </Text>
          <Text style={{ textAlign: 'left', color: 'black' }}>
            <b>Interests</b>: Astronomy, Astrophysics, AI Development, AI Engineering, AI Research, Computational Engineering<br />
            <br /><b>Skills</b>: ML Models, DNN Models, Econometric Data Analysis, Web Scraping, Exploraratory Data Analysis
          </Text>
        </Flex>
        
        <Text style={{ color: 'black', marginTop: '20px'}}>
          I'm currently in my last year at Wofford College studying computer science and business economics. <br />
          <br />
          I aim to be ambitious in all my work. I see challenges as opportunities and ways to grow. No matter what kind of project I'm working on,
            I will always try to get it complete. This contributes to my mindset of being a lifelong learner. I always seek out new information,
            and when I do learn something new, I am  excited to share it or put it to practical use.<br />
          <br />
          It excites me to be on the forefront of AI engineering developing new technologies for humanity's future. 
            I believe in making a positive impact in my job. With AI engineering, I believe this is one of the best ways I can contribute
            to this goal. <br />

        </Text>
      </Flex>
      <Flex
					gap="12" 
          style={{padding:'20px'}}>
					<Button
						href="https://github.com/jaime-bustos"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://www.linkedin.com/in/jaimebustosjr/"
						prefixIcon="linkedin" size="s" variant="tertiary">
						LinkedIn
					</Button>
				</Flex>
    </Flex>
    
    
  );
};

export default AboutMe;
