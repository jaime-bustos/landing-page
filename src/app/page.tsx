"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background} from '@/once-ui/components';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const StarBackground = dynamic(() => import('../once-ui/components/StarBackground'), {
  ssr: false,
});

const Footer = dynamic(() => import('../once-ui/components/Footer'), {
	ssr: false,
  });


export default function Home() {
	const links = [
		{
			href: "/about",
			title: "feed",
			description: "all my posts and updates",
		},
		{
			href: "/projects",
			title: "portfolio",
			description: "see all my projects",
		},
		{
			href: "https://drive.google.com/file/d/1N1LpNE6SvVQZS0R782ur18InKVNn5G9i/view?usp=sharing",
			title: "resume",
			description: "check out my resume",
		},
	];

	return (
		<Flex
			fillWidth
			direction="column" alignItems="center" flex={1} justifyContent="center">
			<StarBackground/>
			<Flex
				position="relative"
				fillWidth
				maxWidth={40}
				direction="column" 
				alignItems="center"	
				justifyContent="center"
				>
				
				<Flex
					as="main"
					direction="column" justifyContent="center"
					padding="m" gap="l"
					border="neutral-medium"
					borderStyle="solid-1"
					radius="xl"
					style={{ backgroundColor: "#0d0d0d" }}
					alignItems='center'

					>
					<Flex
						mobileDirection="column"
						fillWidth gap="0">
						<Flex
							position="relative"
							paddingTop="m" paddingX="l"
    						direction="column" gap="20"
							justifyContent='center'>

							
							<Heading variant="display-strong-s" style={{ fontSize: "30px", lineHeight: '1.2', textAlign: 'left', whiteSpace: "nowrap"}}>
								Jaime Bustos
							</Heading>
							<Heading
								variant="display-strong-s" style={{ fontSize: "15px", lineHeight: '1.5', textAlign: 'left' }}>
								data analyst.<br/>developer.<br/>ML engineer.<br/>futurist.
							</Heading>
						</Flex>


						<Grid
						rows="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth
						gap="s"
						paddingTop="s">
						{links.map((link) => (
							<Link

								key={link.href}
								href={link.href}>
								<Flex
									fillWidth 
									padding="s"
									gap="1"
									direction="column">
									<Flex
										fillWidth gap="1"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="chevronRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
					
					</Flex>

					<Footer/>
				</Flex>
				
			</Flex>
			
			
		</Flex>
	);
}
