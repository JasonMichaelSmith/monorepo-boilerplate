import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum VerificationStatus {
    PENDING
    APPROVED
    REJECTED
    EXPIRED
  }

  enum DocumentType {
    PASSPORT
    DRIVERS_LICENSE
    NATIONAL_ID
    UTILITY_BILL
    BANK_STATEMENT
  }

  enum VerificationLevel {
    BASIC
    ENHANCED
    PREMIUM
  }

  type Address {
    street: String!
    city: String!
    state: String!
    country: String!
    postalCode: String!
  }

  type Document {
    id: ID!
    type: DocumentType!
    number: String!
    expiryDate: String
    issuingCountry: String!
    status: VerificationStatus!
    uploadedAt: String!
    verifiedAt: String
    rejectionReason: String
  }

  type BiometricData {
    id: ID!
    faceMatchScore: Float
    livenessScore: Float
    capturedAt: String!
    verified: Boolean!
  }

  type VerificationSession {
    id: ID!
    userId: ID!
    level: VerificationLevel!
    status: VerificationStatus!
    startedAt: String!
    completedAt: String
    documents: [Document!]!
    biometrics: BiometricData
    riskScore: Float
    notes: String
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    phoneNumber: String
    address: Address
    createdAt: String!
    updatedAt: String!
    verificationLevel: VerificationLevel!
    isVerified: Boolean!
    verificationSessions: [VerificationSession!]!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    verificationSession(id: ID!): VerificationSession
    usersByVerificationStatus(status: VerificationStatus!): [User!]!
    pendingVerifications: [VerificationSession!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
    startVerification(userId: ID!, level: VerificationLevel!): VerificationSession!
    uploadDocument(sessionId: ID!, input: DocumentInput!): Document!
    submitBiometrics(sessionId: ID!, input: BiometricInput!): BiometricData!
    approveVerification(sessionId: ID!, notes: String): VerificationSession!
    rejectVerification(sessionId: ID!, reason: String!): VerificationSession!
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    phoneNumber: String
    address: AddressInput
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    phoneNumber: String
    address: AddressInput
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    country: String!
    postalCode: String!
  }

  input DocumentInput {
    type: DocumentType!
    number: String!
    expiryDate: String
    issuingCountry: String!
  }

  input BiometricInput {
    faceMatchScore: Float!
    livenessScore: Float!
  }
`;