import { Box, Stack, StackDivider } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from '../Header/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'

export const Footer = () => (
    <Box as="footer" role="contentinfo" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <Logo />
                <SocialMediaLinks />
            </Stack>
            <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
        </Stack>
    </Box>
)