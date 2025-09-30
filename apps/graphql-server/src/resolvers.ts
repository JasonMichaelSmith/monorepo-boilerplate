import { users, verificationSessions } from './mockData.js';
import {
    Resolvers,
    MutationCreateUserArgs,
    MutationUpdateUserArgs,
    MutationDeleteUserArgs,
    QueryUserArgs,
    QueryVerificationSessionArgs,
    User,
    VerificationLevel
} from './generated/types.js';

export const resolvers: Resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }: QueryUserArgs) => users.find(user => user.id === id) || null,
        verificationSession: (_, { id }: QueryVerificationSessionArgs) =>
            verificationSessions.find(session => session.id === id) || null,
    },

    Mutation: {
        createUser: (_, { input }: MutationCreateUserArgs) => {
            const newUser: User = {
                id: String(users.length + 1),
                ...input,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                verificationLevel: VerificationLevel.Basic,
                isVerified: false,
                verificationSessions: []
            };
            users.push(newUser);
            return newUser;
        },

        updateUser: (_, { id, input }: MutationUpdateUserArgs) => {
            const user = users.find(u => u.id === id);
            if (!user) throw new Error('User not found');

            Object.assign(user, input, { updatedAt: new Date().toISOString() });
            return user;
        },

        deleteUser: (_, { id }: MutationDeleteUserArgs) => {
            const index = users.findIndex(u => u.id === id);
            if (index === -1) throw new Error('User not found');

            const [user] = users.splice(index, 1);
            return user;
        },
    },

    User: {
        verificationSessions: (user: User) =>
            verificationSessions.filter(session =>
                user.verificationSessions.includes(session)
            )
    }
};