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
			title: "Feed",
			description: "All my posts and updates.",
		},
		{
			href: "/projects",
			title: "Portfolio",
			description: "See all my projects.",
		},
		{
			href: "https://drive.google.com/file/d/1TDtYdWAC9h1CeYYfzFCD-0i3d0eJ36MM/view?usp=sharing",
			title: "Resume",
			description: "Check out my resume.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<StarBackground/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={40}
				direction="column" alignItems="center" flex={1}	>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					padding="l" gap="l"
					border="neutral-medium"
					borderStyle="solid-1"
					radius="xl"
					style={{ backgroundColor: "#0d0d0d" }}

					>
					<Flex
						mobileDirection="column"
						fillWidth gap="0">
						<Flex
							position="relative"
							fillWidth paddingTop="56" paddingX="l"
    						direction="column" gap="20">

							<Heading variant="display-strong-s" style={{ fontSize: "30px", lineHeight: '1.2', textAlign: 'left' }}>
								Jaime Bustos
							</Heading>
							<Heading
								variant="display-strong-s" style={{ fontSize: "15px", lineHeight: '1.5', textAlign: 'left' }}>
								data analyst.<br/>developer.<br/>ai engineer.
							</Heading>
						</Flex>


						<Grid
						rows="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth
						gap="xs">
						{links.map((link) => (
							<Link

								key={link.href}
								href={link.href}>
								<Flex
									fillWidth padding="20" gap="1"
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

					
				</Flex>
				<Footer/>
			</Flex>
			
			
		</Flex>
	);
}
