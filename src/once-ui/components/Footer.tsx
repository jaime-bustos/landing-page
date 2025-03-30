import { Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background } from '@/once-ui/components';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth
            paddingX="l"
            paddingY="m"
            justifyContent="space-between"
        >
            <Text variant="body-default-s" onBackground="neutral-weak">
                2025 Jaime Bustos
            </Text>
            <Flex gap="12">
                <Button
                    href="https://github.com/jaime-bustos"
                    prefixIcon="github"
                    size="s"
                    variant="tertiary"
                >
                    GitHub
                </Button>
                <Button
                    href="https://www.linkedin.com/in/jaimebustosjr/"
                    prefixIcon="linkedin"
                    size="s"
                    variant="tertiary"
                >
                    LinkedIn
                </Button>
            </Flex>
        </Flex>
    );
}