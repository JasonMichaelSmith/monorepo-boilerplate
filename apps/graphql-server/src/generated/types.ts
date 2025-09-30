import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
};

export type Address = {
    __typename?: 'Address';
    city: Scalars['String']['output'];
    country: Scalars['String']['output'];
    postalCode: Scalars['String']['output'];
    state: Scalars['String']['output'];
    street: Scalars['String']['output'];
};

export type AddressInput = {
    city: Scalars['String']['input'];
    country: Scalars['String']['input'];
    postalCode: Scalars['String']['input'];
    state: Scalars['String']['input'];
    street: Scalars['String']['input'];
};

export type BiometricData = {
    __typename?: 'BiometricData';
    capturedAt: Scalars['String']['output'];
    faceMatchScore?: Maybe<Scalars['Float']['output']>;
    id: Scalars['ID']['output'];
    livenessScore?: Maybe<Scalars['Float']['output']>;
    verified: Scalars['Boolean']['output'];
};

export type BiometricInput = {
    faceMatchScore: Scalars['Float']['input'];
    livenessScore: Scalars['Float']['input'];
};

export type CreateUserInput = {
    address?: InputMaybe<AddressInput>;
    dateOfBirth: Scalars['String']['input'];
    email: Scalars['String']['input'];
    firstName: Scalars['String']['input'];
    lastName: Scalars['String']['input'];
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Document = {
    __typename?: 'Document';
    expiryDate?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    issuingCountry: Scalars['String']['output'];
    number: Scalars['String']['output'];
    rejectionReason?: Maybe<Scalars['String']['output']>;
    status: VerificationStatus;
    type: DocumentType;
    uploadedAt: Scalars['String']['output'];
    verifiedAt?: Maybe<Scalars['String']['output']>;
};

export type DocumentInput = {
    expiryDate?: InputMaybe<Scalars['String']['input']>;
    issuingCountry: Scalars['String']['input'];
    number: Scalars['String']['input'];
    type: DocumentType;
};

export enum DocumentType {
    BankStatement = 'BANK_STATEMENT',
    DriversLicense = 'DRIVERS_LICENSE',
    NationalId = 'NATIONAL_ID',
    Passport = 'PASSPORT',
    UtilityBill = 'UTILITY_BILL'
}

export type Mutation = {
    __typename?: 'Mutation';
    approveVerification: VerificationSession;
    createUser: User;
    deleteUser: User;
    rejectVerification: VerificationSession;
    startVerification: VerificationSession;
    submitBiometrics: BiometricData;
    updateUser: User;
    uploadDocument: Document;
};


export type MutationApproveVerificationArgs = {
    notes?: InputMaybe<Scalars['String']['input']>;
    sessionId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
    input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
    id: Scalars['ID']['input'];
};


export type MutationRejectVerificationArgs = {
    reason: Scalars['String']['input'];
    sessionId: Scalars['ID']['input'];
};


export type MutationStartVerificationArgs = {
    level: VerificationLevel;
    userId: Scalars['ID']['input'];
};


export type MutationSubmitBiometricsArgs = {
    input: BiometricInput;
    sessionId: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
    id: Scalars['ID']['input'];
    input: UpdateUserInput;
};


export type MutationUploadDocumentArgs = {
    input: DocumentInput;
    sessionId: Scalars['ID']['input'];
};

export type Query = {
    __typename?: 'Query';
    pendingVerifications: Array<VerificationSession>;
    user?: Maybe<User>;
    users: Array<User>;
    usersByVerificationStatus: Array<User>;
    verificationSession?: Maybe<VerificationSession>;
};


export type QueryUserArgs = {
    id: Scalars['ID']['input'];
};


export type QueryUsersByVerificationStatusArgs = {
    status: VerificationStatus;
};


export type QueryVerificationSessionArgs = {
    id: Scalars['ID']['input'];
};

export type UpdateUserInput = {
    address?: InputMaybe<AddressInput>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
    __typename?: 'User';
    address?: Maybe<Address>;
    createdAt: Scalars['String']['output'];
    dateOfBirth: Scalars['String']['output'];
    email: Scalars['String']['output'];
    firstName: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    isVerified: Scalars['Boolean']['output'];
    lastName: Scalars['String']['output'];
    phoneNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['String']['output'];
    verificationLevel: VerificationLevel;
    verificationSessions: Array<VerificationSession>;
};

export enum VerificationLevel {
    Basic = 'BASIC',
    Enhanced = 'ENHANCED',
    Premium = 'PREMIUM'
}

export type VerificationSession = {
    __typename?: 'VerificationSession';
    biometrics?: Maybe<BiometricData>;
    completedAt?: Maybe<Scalars['String']['output']>;
    documents: Array<Document>;
    id: Scalars['ID']['output'];
    level: VerificationLevel;
    notes?: Maybe<Scalars['String']['output']>;
    riskScore?: Maybe<Scalars['Float']['output']>;
    startedAt: Scalars['String']['output'];
    status: VerificationStatus;
    userId: Scalars['ID']['output'];
};

export enum VerificationStatus {
    Approved = 'APPROVED',
    Expired = 'EXPIRED',
    Pending = 'PENDING',
    Rejected = 'REJECTED'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Address: ResolverTypeWrapper<Address>;
    AddressInput: AddressInput;
    BiometricData: ResolverTypeWrapper<BiometricData>;
    BiometricInput: BiometricInput;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    CreateUserInput: CreateUserInput;
    Document: ResolverTypeWrapper<Document>;
    DocumentInput: DocumentInput;
    DocumentType: DocumentType;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
    Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    UpdateUserInput: UpdateUserInput;
    User: ResolverTypeWrapper<User>;
    VerificationLevel: VerificationLevel;
    VerificationSession: ResolverTypeWrapper<VerificationSession>;
    VerificationStatus: VerificationStatus;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Address: Address;
    AddressInput: AddressInput;
    BiometricData: BiometricData;
    BiometricInput: BiometricInput;
    Boolean: Scalars['Boolean']['output'];
    CreateUserInput: CreateUserInput;
    Document: Document;
    DocumentInput: DocumentInput;
    Float: Scalars['Float']['output'];
    ID: Scalars['ID']['output'];
    Mutation: Record<PropertyKey, never>;
    Query: Record<PropertyKey, never>;
    String: Scalars['String']['output'];
    UpdateUserInput: UpdateUserInput;
    User: User;
    VerificationSession: VerificationSession;
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
    city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type BiometricDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BiometricData'] = ResolversParentTypes['BiometricData']> = ResolversObject<{
    capturedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    faceMatchScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    livenessScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = ResolversObject<{
    expiryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    issuingCountry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    rejectionReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    status?: Resolver<ResolversTypes['VerificationStatus'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['DocumentType'], ParentType, ContextType>;
    uploadedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    verifiedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    approveVerification?: Resolver<ResolversTypes['VerificationSession'], ParentType, ContextType, RequireFields<MutationApproveVerificationArgs, 'sessionId'>>;
    createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
    deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
    rejectVerification?: Resolver<ResolversTypes['VerificationSession'], ParentType, ContextType, RequireFields<MutationRejectVerificationArgs, 'reason' | 'sessionId'>>;
    startVerification?: Resolver<ResolversTypes['VerificationSession'], ParentType, ContextType, RequireFields<MutationStartVerificationArgs, 'level' | 'userId'>>;
    submitBiometrics?: Resolver<ResolversTypes['BiometricData'], ParentType, ContextType, RequireFields<MutationSubmitBiometricsArgs, 'input' | 'sessionId'>>;
    updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
    uploadDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationUploadDocumentArgs, 'input' | 'sessionId'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    pendingVerifications?: Resolver<Array<ResolversTypes['VerificationSession']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
    users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
    usersByVerificationStatus?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersByVerificationStatusArgs, 'status'>>;
    verificationSession?: Resolver<Maybe<ResolversTypes['VerificationSession']>, ParentType, ContextType, RequireFields<QueryVerificationSessionArgs, 'id'>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
    address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    verificationLevel?: Resolver<ResolversTypes['VerificationLevel'], ParentType, ContextType>;
    verificationSessions?: Resolver<Array<ResolversTypes['VerificationSession']>, ParentType, ContextType>;
}>;

export type VerificationSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationSession'] = ResolversParentTypes['VerificationSession']> = ResolversObject<{
    biometrics?: Resolver<Maybe<ResolversTypes['BiometricData']>, ParentType, ContextType>;
    completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    documents?: Resolver<Array<ResolversTypes['Document']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    level?: Resolver<ResolversTypes['VerificationLevel'], ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    riskScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    startedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['VerificationStatus'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
    Address?: AddressResolvers<ContextType>;
    BiometricData?: BiometricDataResolvers<ContextType>;
    Document?: DocumentResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
    VerificationSession?: VerificationSessionResolvers<ContextType>;
}>;

