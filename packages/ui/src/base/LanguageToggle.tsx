'use client';

import { FormControl, Select, MenuItem, Box } from '@mui/material';
import { FlagIcon, type FlagIconCode } from 'react-flag-kit';

interface Language {
    code: string;
    label: string;
    flagCode: FlagIconCode;
}

interface LanguageToggleProps {
    selectedLanguage?: string;
    onLanguageChange: (locale: string) => void;
    loading?: boolean;
    languages?: Language[];
}

const DEFAULT_LANGUAGES: Language[] = [
    { code: 'en', label: 'EN', flagCode: 'US' },
];

export function LanguageToggle({
    selectedLanguage = 'en',
    onLanguageChange,
    languages = DEFAULT_LANGUAGES,
}: LanguageToggleProps) {
    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
                value={selectedLanguage}
                onChange={(event) => onLanguageChange(event.target.value)}
                displayEmpty
            >
                {languages.map((language) => (
                    <MenuItem key={language.code} value={language.code}>
                        <Box display="flex" alignItems="center" gap={1}>
                            <FlagIcon code={language.flagCode} size={20} />
                            {language.label}
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
