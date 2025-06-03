"use client";

import React, { useState } from 'react';
import { Flex, Heading, Text, Button, Avatar } from '@/once-ui/components';
import StarBackground from '../../once-ui/components/StarBackground';

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to my new feed page",
      date: "June 3, 2025",
      excerpt: "This is the beginning of my feed section. Think of these as blog posts!",
      //link: "/posts/ai-models-from-scratch"
    },

  ]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      <StarBackground />

      {/* Sticky Header */}
      <Flex
        position="sticky"

        zIndex={100}

        justifyContent="center"


        style={{
          backdropFilter: 'blur(6px)',
        }}
      >
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
                  <Heading variant="display-strong-s" style={{ textAlign: 'center', paddingTop:80}}>
                    feed
                  </Heading>
        
                  <Flex gap="m" justifyContent="center" >
                    <Button href="../" suffixIcon="chevronRight" variant="secondary">
                      home
                    </Button>
                    <Button href="../projects" suffixIcon="chevronRight" variant="secondary">
                        projects
                    </Button>
                  </Flex>
                </Flex>
            </Flex>
                  

      {/* Main Feed Container */}
      <Flex
        direction="column"
        style={{
          zIndex: 1,
          width: '100%',
          maxWidth: '640px',
          padding: '16px',
          
        }}
      >

        {/* Composer Placeholder */}
        <Flex
          direction="row"
          gap="m"
          style={{
            padding: '16px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',

          }}
        >
          <Text style={{ color: '#aaa' }}>
            <em>"If you have a dream, then the next step is to have a plan." - Unknown</em>
          </Text>
        </Flex>

        {/* Posts */}
        {posts.map((post) => (
          <Flex
            key={post.id}
            direction="row"
            gap="m"
            paddingY="m"
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'background-color 0.2s',
              backdropFilter: 'blur(6px)',

            }} 
          >

            <Flex direction="column" gap="xs" flex={1}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text variant="body-strong-m" style={{ color: 'white' }}>
                  Jaime Bustos
                </Text>
                <Text variant="body-default-s" style={{ color: '#888' }}>
                  {post.date}
                </Text>
              </Flex>

              <Text variant="body-default-s" style={{ color: '#ccc' }}>
                {post.excerpt}
              </Text>

              {/* <Button
                href={post.link}
                suffixIcon="chevronRight"
                variant="tertiary"
                size="s"
                style={{ alignSelf: 'flex-start', marginTop: '4px' }}
              >
                Read more
              </Button> */}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default FeedPage;