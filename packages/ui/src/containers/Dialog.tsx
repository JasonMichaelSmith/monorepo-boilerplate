'use client';

import { Box, CircularProgress, Typography } from '../primitives';
import { ComponentType, useLayoutEffect, useRef } from 'react';

interface DialogProps<T> {
    loading?: boolean;
    queries?: string[];
    responses?: T[];
    ResponseComponent?: ComponentType<T>;
}

export function Dialog<T = Record<string, unknown>>({
    loading,
    queries = [],
    responses = [],
    ResponseComponent,
}: DialogProps<T>) {
    const maxLength = Math.max(queries.length, responses.length);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom whenever responses change
    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [responses]); // This will trigger whenever responses prop updates

    return (
        <Box
            ref={containerRef}
            maxHeight="80vh"
            sx={{
                overflowX: 'hidden',
                overflowY: 'auto', // Add this to enable vertical scrolling
            }}
        >
            {Array.from({ length: maxLength }, (_, index) => (
                <Box textAlign="left" key={index}>
                    {queries[index] && (
                        <Typography
                            sx={{
                                backgroundColor: 'info.dark',
                                color: 'common.white',
                                maxWidth: 'fit-content',
                                borderRadius: 2,
                                p: 1,
                                px: 1.5,
                            }}
                        >
                            {queries[index]}
                        </Typography>
                    )}
                    {loading && index === maxLength - 1 ? (
                        <CircularProgress sx={{ my: 2 }} />
                    ) : (
                        responses[index] &&
                        (ResponseComponent ? (
                            <ResponseComponent {...responses[index]} />
                        ) : (
                            <Typography>{String(responses[index])}</Typography>
                        ))
                    )}
                </Box>
            ))}
        </Box>
    );
}
