"use client";

import React from 'react';
import { Flex, Grid, Heading, Text, Button } from '@/once-ui/components';
import StarBackground from '../../once-ui/components/StarBackground';

const projects = [
  {
    title: 'GDP and Carbon Emmissions Reinforcment Learning',
    description: 'A brief description of project one.',
    link: '#',
  },
  {
    title: 'A* Path Visualization',
    description: 'A brief description of project two.',
    link: '#',
  },
  {
    title: 'Malaria Disease Detection in Cells using CNNs',
    description: 'A brief description of project three.',
    link: '#',
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
              <Text variant="body-default-s" onBackground="neutral-weak" style={{color: 'black'}}>
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
