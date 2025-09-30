import { User, VerificationSession, Document, BiometricData, VerificationLevel, VerificationStatus, DocumentType } from './generated/types.js';

// In-memory data using generated types
export const users: User[] = [
    {
        id: '1',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-05-15',
        phoneNumber: '+1-555-0123',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '10001'
        },
        createdAt: '2024-01-15T08:30:00Z',
        updatedAt: '2024-03-10T14:22:00Z',
        verificationLevel: VerificationLevel.Enhanced,
        isVerified: true,
        verificationSessions: []
    },
    {
        id: '2',
        email: 'jane.smith@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        dateOfBirth: '1985-11-22',
        phoneNumber: '+1-555-0456',
        createdAt: '2024-02-20T10:15:00Z',
        updatedAt: '2024-02-20T10:15:00Z',
        verificationLevel: VerificationLevel.Basic,
        isVerified: false,
        verificationSessions: []
    }
];

export const verificationSessions: VerificationSession[] = [];
export const documents: Document[] = [];
export const biometrics: BiometricData[] = [];