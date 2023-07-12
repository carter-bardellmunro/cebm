import React from 'react';
import { Heading } from '@chakra-ui/react';

interface SectionHeadingInterface {
    text: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    color: string;
}

const SectionHeading = ({ text, size, color }: SectionHeadingInterface) => {
    return (
        <Heading
            size={size}
            color={`#${color}`}
            position="relative"
            pb="10px"
            _before={{
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '4px',
                borderRadius: '4px',
                backgroundColor: '#689af8',
                bottom: 0,
                left: 0,
                transformOrigin: 'right',
                transform: 'scaleX(0)',
                transition: 'transform .3s ease-in-out',
            }}
            _hover={{
                _before: {
                    transformOrigin: 'left',
                    transform: 'scaleX(1)',
                },
            }}
        >
            {text}
        </Heading>
    );
};

export default SectionHeading;
