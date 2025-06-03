  "use client";

  import React from 'react';
  import { Flex, Grid, Heading, Text, Button } from '@/once-ui/components';
  import StarBackground from '../../once-ui/components/StarBackground';

  const projects = [
    {
      title: 'Check out all my projects on my GitHub!',
      description: 'The projects on my website are only a few of the many projects I have worked on. Check out my GitHub for more!',
      link: 'https://github.com/jaime-bustos',
    },
    {
      title: 'GDP and Carbon Emissions Reinforcement Learning',
      description:
        `• Simulated government policy to reduce CO2 while optimizing GDP using reinforcement learning in OpenAI Gym.\n
        • Used linear and polynomial regression to predict CO2 and GDP growth with scikit-learn.\n
        • Found that GDP can stay positive long-term with the right CO2 policies, though at a reduced growth rate.`,
      link: 'https://drive.google.com/file/d/1JOn780qTTXDyJ4wY_J5RLlTU8pEwgzTO/view?usp=sharing',
    },
    {
      title: 'A* Path Visualization',
      description:
        `• Built an interactive visual of the A* pathfinding algorithm with real-time grid plotting.\n
        • Used priority queues to optimize search performance.`,
      link: 'https://github.com/jaime-bustos/a-star-pathfinding',
    },
    {
      title: 'Malaria Detection in Cells using CNNs',
      description:
        `• Trained a CNN in TensorFlow to detect diseased cells using image classification.\n
        • Applied hyperparameter tuning and validation splits on hundreds of labeled images.`,
      link: 'https://drive.google.com/file/d/1SnISeNGu2kr1uFhVU2Z34zfrgnY2XZZr/view?usp=sharing',
    },
  ];

  const ProjectsPage = () => {
    return (
      <Flex
        direction="column"
        alignItems="center"
        paddingX="l"
        paddingTop="xl"
        style={{ minHeight: '100vh', position: 'relative' }}
      >
        <StarBackground />

        <Flex
          direction="column"
          alignItems="center"
          style={{
            zIndex: 1,
            maxWidth: '960px',
            width: '100%',
          }}
          gap="l"
        >
          <Heading variant="display-strong-s" style={{ textAlign: 'center' }}>
            projects
          </Heading>

          <Flex gap="m" justifyContent="center" >
            <Button href="../" suffixIcon="chevronRight" variant="secondary">
              home
            </Button>
            <Button href="../about" suffixIcon="chevronRight" variant="secondary">
              feed
            </Button>
          </Flex>

          <Grid
              columns="1fr 1fr"
              gap="l"
              fillWidth

          >
            {projects.map((project, index) => (
              <Flex
                key={index}
                direction="column"
                justifyContent="space-between"
                padding="l"
                gap="m"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(6px)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              >
                <Heading variant="body-strong-m" style={{ color: 'white' }}>
                  {project.title}
                </Heading>
                <Text
                  variant="body-default-s"
                  style={{ color: 'white', whiteSpace: 'pre-line' }}
                >
                  {project.description}
                </Text>
                <Button
                  href={project.link}
                  suffixIcon="chevronRight"
                  variant="secondary"
                >
                  {project.title.includes('GitHub') ? 'Visit GitHub' : 'View Project'}
                </Button>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>
    );
  };

  export default ProjectsPage;