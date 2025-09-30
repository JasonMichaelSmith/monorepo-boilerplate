# GraphQL Server

A minimal GraphQL server for learning GraphQL concepts with identity verification data.

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Generate types from schema
pnpm codegen
```

Server runs at: **http://localhost:4000/graphql**

## Test Queries

Copy and paste these into GraphQL Playground at http://localhost:4000/graphql

### Basic Queries (READ)

**Get all users:**
```graphql
query {
  users {
    id
    firstName
    lastName
    email
    verificationLevel
    isVerified
  }
}
```

**Get specific user:**
```graphql
query {
  user(id: "1") {
    id
    firstName
    email
    phoneNumber
    address {
      street
      city
      state
      country
    }
    verificationLevel
    isVerified
  }
}
```

**Get user with nested data:**
```graphql
query {
  user(id: "1") {
    id
    firstName
    email
    verificationSessions {
      id
      level
      status
      startedAt
    }
  }
}
```

### Mutations (CREATE/UPDATE)

**Create new user:**
```graphql
mutation {
  createUser(input: {
    email: "test@example.com"
    firstName: "Test"
    lastName: "User"
    dateOfBirth: "1990-01-01"
    phoneNumber: "+1-555-9999"
  }) {
    id
    firstName
    email
    verificationLevel
    isVerified
    createdAt
  }
}
```

**Update existing user:**
```graphql
mutation {
  updateUser(id: "1", input: {
    firstName: "Updated Name"
    phoneNumber: "+1-555-0000"
  }) {
    id
    firstName
    phoneNumber
    updatedAt
  }
}
```

**Create user with address:**
```graphql
mutation {
  createUser(input: {
    email: "complete@example.com"
    firstName: "Complete"
    lastName: "User"
    dateOfBirth: "1985-05-20"
    phoneNumber: "+1-555-1234"
    address: {
      street: "456 Test Ave"
      city: "TestCity"
      state: "TC"
      country: "USA"
      postalCode: "12345"
    }
  }) {
    id
    firstName
    email
    address {
      street
      city
      state
    }
    verificationLevel
  }
}
```

**Delete user:**
```graphql
mutation {
  deleteUser(id: "1") {
    id
    firstName
    email
  }
}
```

## Architecture

- **Schema-first approach** - GraphQL schema is the single source of truth
- **Code generation** - TypeScript types generated from schema
- **No duplication** - Types defined once in schema, used everywhere
- **Full type safety** - Resolvers use generated types

## Files

- `src/schema.ts` - GraphQL schema definition
- `src/resolvers.ts` - Resolver functions with full type safety
- `src/mockData.ts` - In-memory data using generated types
- `src/generated/types.ts` - Auto-generated TypeScript types
- `codegen.yml` - Code generation configuration