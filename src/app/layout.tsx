import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';

const primaryFont = Inter({
  variable: '--font-family-body', // this matches your SCSS expectation
  subsets: ['latin'],
  display: 'swap',
});

const codeFont = Source_Code_Pro({
  variable: '--font-code', // if you use --font-code in SCSS, great
  subsets: ['latin'],
  display: 'swap',
});

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

const headingFont = Inter({
  variable: '--font-family-heading',
  subsets: ['latin'],
  display: 'swap',
});

type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-neutral="gray" data-brand="blue" data-accent="violet"
			data-solid="color" data-solid-style="flat"
			data-theme="dark"
			data-border="playful"
			data-surface="filled"
			data-transition="all"
			className={classNames(
                primaryFont.variable,
                headingFont.variable,
                codeFont.variable,
                'root'
                )}>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}