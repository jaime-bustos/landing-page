"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background } from '@/once-ui/components';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const StarBackground = dynamic(() => import('../once-ui/components/StarBackground'), {
  ssr: false,
});


export default function Home() {
	const links = [
		{
			href: "/about",
			title: "About",
			description: "Know my story.",
		},
		{
			href: "/projects",
			title: "Projects",
			description: "See all my recent projects.",
		},
		{
			href: "https://drive.google.com/file/d/1eRRWu4QdaVpmM304vaurv71LOu6Mo_8y/view?usp=sharing",
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
				fillWidth minHeight="0" maxWidth={64}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							fillWidth paddingTop="56" paddingX="l">
							<Heading variant="display-strong-s">
								Jaime Bustos
							</Heading>
						</Flex>
						<Flex
							position="relative"
							fillWidth gap="24" marginBottom="104"
							direction="column">
							<Heading
								variant="display-strong-s">
								AI Engineer.<br/>Data Scientist.<br/>Python Dev.
							</Heading>
							<Button
								href="/projects"
								suffixIcon="chevronRight"
								variant="secondary">
								Portfolio
							</Button>
						</Flex>
					</Flex>

					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
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
			
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					2024 Jaime Bustos
				</Text>
				<Flex
					gap="12">
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
		</Flex>
	);
}
