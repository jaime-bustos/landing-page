"use client";

import React from 'react';
import { Flex, Grid, Heading, Text, Button } from '@/once-ui/components';
import StarBackground from '../../once-ui/components/StarBackground';

const projects = [
  {
    title: 'GDP and Carbon Emissions Reinforcement Learning',
    description: 
      '• Simulated specific government policies and costs to find ways to lower global CO2 levels while maintaining high long-term GDP growth using policy-based reinforcement learning in OpenAI’s Gym library.\n' +
      '• Implemented and visualized linear and polynomial regression to predict future CO2 and GDP growth using Pandas, Matplotlib, and scikit-learn.\n' +
      '• Discovered that projected long-term GDP growth can stay positive with the correct CO2 policies; however, the tradeoff is a slight decline in the overall growth rate from 2% to around -1%, indicating a negative growth rate in 100 years.',
    link: 'https://drive.google.com/file/d/1JOn780qTTXDyJ4wY_J5RLlTU8pEwgzTO/view?usp=sharing',
  },

  {
    title: 'A* Path Visualization',
    description:
    "• Developed an interactive visual representation of the A* pathfinding algorithm, enabling users to visually plot a start and end point on a grid and observe the algorithm's real-time pathfinding process.\n"+
    "• Employed data structures like Priority Queues for maintaining open nodes in the pathfinding process, optimizing the algorithm's performance.",
    link: 'https://github.com/jaime-bustos/a-star-pathfinding',
  },
  {
    title: 'Malaria Disease Detection in Cells using CNNs',
    description:
    "• Developed a supervised learning computer vision model that detected diseased cells using Keras in TensorFlow.\n"+
    "• CNN model was trained on over hundreds of cell images using a validation split to determine what to look for.\n" +
    "• Employed various types of hyperparameter tuning (pooling size, Kernel size, epoch size) through hyperparameter testing.", 
    link: 'https://drive.google.com/file/d/1SnISeNGu2kr1uFhVU2Z34zfrgnY2XZZr/view?usp=sharing',
  },

];

const ProjectsPage = () => {
  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      <StarBackground />
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={64}
        direction="column" alignItems="center" flex={1}>
        
        <Heading variant="display-strong-s" marginBottom="m">
          Projects
        </Heading>

        <Grid
          columns="repeat(1, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          fillWidth gap="l"
          radius="l"
          border="neutral-medium"
          //borderStyle="solid-1"
          padding="l"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '12px' }}>
          {projects.map((project, index) => (
            <Flex
              key={index}
              direction="column" justifyContent="space-between"
              padding="l"
              gap="m"
              style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '8px' }}>
              <Heading variant="body-strong-m" style={{color: 'black'}}>
                {project.title}
              </Heading>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak" 
                style={{color: 'black', whiteSpace: 'pre-line'}}>
                {project.description}
              </Text>
              <Button
                href={project.link}
                suffixIcon="chevronRight"
                variant="secondary">
                View Project
              </Button>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ProjectsPage;
