import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Autogenerated input type of CreateMyList */
export type CreateMyListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Creating my list */
  name: Scalars['String'];
};

/** Autogenerated return type of CreateMyList */
export type CreateMyListPayload = {
  __typename?: 'CreateMyListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  myList: MyList;
};

/** Autogenerated input type of CreateMyListSentence */
export type CreateMyListSentenceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** my_list_id */
  myListId: Scalars['ID'];
  /** sentence_id */
  sentenceId: Scalars['ID'];
};

/** Autogenerated return type of CreateMyListSentence */
export type CreateMyListSentencePayload = {
  __typename?: 'CreateMyListSentencePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  myListSentence: MyListSentence;
};

/** Current user data */
export type CurrentUser = {
  __typename?: 'CurrentUser';
  /** User email */
  email: Scalars['String'];
  /** User ID */
  id: Scalars['ID'];
  /** My lists */
  myLists?: Maybe<Array<MyList>>;
};

/** Autogenerated input type of DeleteMyList */
export type DeleteMyListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Deleting my list */
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteMyList */
export type DeleteMyListPayload = {
  __typename?: 'DeleteMyListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  myList: MyList;
};

/** Autogenerated input type of DeleteMyListSentence */
export type DeleteMyListSentenceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** my_list_id */
  myListId: Scalars['ID'];
  /** sentence_id */
  sentenceId: Scalars['ID'];
};

/** Autogenerated return type of DeleteMyListSentence */
export type DeleteMyListSentencePayload = {
  __typename?: 'DeleteMyListSentencePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  myListSentence: MyListSentence;
};

/** Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  createMyList?: Maybe<CreateMyListPayload>;
  createMyListSentence?: Maybe<CreateMyListSentencePayload>;
  deleteMyList?: Maybe<DeleteMyListPayload>;
  deleteMyListSentence?: Maybe<DeleteMyListSentencePayload>;
};


/** Mutation */
export type MutationCreateMyListArgs = {
  input: CreateMyListInput;
};


/** Mutation */
export type MutationCreateMyListSentenceArgs = {
  input: CreateMyListSentenceInput;
};


/** Mutation */
export type MutationDeleteMyListArgs = {
  input: DeleteMyListInput;
};


/** Mutation */
export type MutationDeleteMyListSentenceArgs = {
  input: DeleteMyListSentenceInput;
};

/** My list for sentences */
export type MyList = {
  __typename?: 'MyList';
  /** My list ID */
  id: Scalars['ID'];
  /** Each sentence of my list */
  myListSentences?: Maybe<Array<MyListSentence>>;
  /** My list name */
  name: Scalars['String'];
};

/** Each sentence of my list */
export type MyListSentence = {
  __typename?: 'MyListSentence';
  /** ID */
  id: Scalars['ID'];
  /** ID */
  myListId: Scalars['ID'];
  /** ID */
  sentenceId: Scalars['ID'];
};

/** Pagination data */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Kaminari method current_page */
  currentPage: Scalars['Int'];
  /** Kaminari method total_pages */
  totalPages: Scalars['Int'];
};

/** Query */
export type Query = {
  __typename?: 'Query';
  /** Sentence index page */
  sentences: Sentences;
};


/** Query */
export type QuerySentencesArgs = {
  attributes: SentenceSearchAttributes;
};

/** Sentence */
export type Sentence = {
  __typename?: 'Sentence';
  /** created_at */
  createdAt: Scalars['ISO8601DateTime'];
  /** Sentence in English */
  english: Scalars['String'];
  /** id */
  id: Scalars['ID'];
  /** Sentence in Japanese */
  japanese: Scalars['String'];
  /** Section id */
  sectionId: Scalars['Int'];
  /** updated_at */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Words in the sentence */
  words: Array<Word>;
};

/** Attributes for filtering and sorting sentences */
export type SentenceSearchAttributes = {
  /** current_my_list_id */
  currentMyListId?: Maybe<Scalars['Int']>;
  /** current_page */
  currentPage?: Maybe<Scalars['Int']>;
  /** id_max */
  idMax?: Maybe<Scalars['Int']>;
  /** id_min */
  idMin?: Maybe<Scalars['Int']>;
  /** keywords */
  keywords?: Maybe<Scalars['String']>;
  /** section_id_max */
  sectionIdMax?: Maybe<Scalars['Int']>;
  /** section_id_min */
  sectionIdMin?: Maybe<Scalars['Int']>;
};

/** Sentence */
export type Sentences = {
  __typename?: 'Sentences';
  /** Current user data */
  currentUser?: Maybe<CurrentUser>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
  /** Sentences */
  sentences: Array<Sentence>;
};

/** Word */
export type Word = {
  __typename?: 'Word';
  /** created_at */
  createdAt: Scalars['ISO8601DateTime'];
  /** Word in English */
  english: Scalars['String'];
  /** id */
  id: Scalars['ID'];
  /** Word in Japanese */
  japanese: Scalars['String'];
  /** updated_at */
  updatedAt: Scalars['ISO8601DateTime'];
};

export type CreateMyListMutationVariables = Exact<{
  input: CreateMyListInput;
}>;


export type CreateMyListMutation = { __typename?: 'Mutation', createMyList?: { __typename?: 'CreateMyListPayload', myList: { __typename?: 'MyList', id: string, name: string } } | null | undefined };

export type DeleteMyListMutationVariables = Exact<{
  input: DeleteMyListInput;
}>;


export type DeleteMyListMutation = { __typename?: 'Mutation', deleteMyList?: { __typename?: 'DeleteMyListPayload', myList: { __typename?: 'MyList', id: string } } | null | undefined };

export type CreateMyListSentenceMutationVariables = Exact<{
  input: CreateMyListSentenceInput;
}>;


export type CreateMyListSentenceMutation = { __typename?: 'Mutation', createMyListSentence?: { __typename?: 'CreateMyListSentencePayload', myListSentence: { __typename?: 'MyListSentence', id: string, sentenceId: string, myListId: string } } | null | undefined };

export type DeleteMyListSentenceMutationVariables = Exact<{
  input: DeleteMyListSentenceInput;
}>;


export type DeleteMyListSentenceMutation = { __typename?: 'Mutation', deleteMyListSentence?: { __typename?: 'DeleteMyListSentencePayload', myListSentence: { __typename?: 'MyListSentence', id: string } } | null | undefined };

export type AllSentencesQueryVariables = Exact<{
  attributes: SentenceSearchAttributes;
}>;


export type AllSentencesQuery = { __typename?: 'Query', sentences: { __typename?: 'Sentences', currentUser?: { __typename?: 'CurrentUser', id: string, email: string, myLists?: Array<{ __typename?: 'MyList', id: string, name: string, myListSentences?: Array<{ __typename?: 'MyListSentence', id: string, sentenceId: string, myListId: string }> | null | undefined }> | null | undefined } | null | undefined, pageInfo?: { __typename?: 'PageInfo', currentPage: number, totalPages: number } | null | undefined, sentences: Array<{ __typename?: 'Sentence', id: string, sectionId: number, english: string, japanese: string, words: Array<{ __typename?: 'Word', id: string, japanese: string, english: string }> }> } };


export const CreateMyListDocument = gql`
    mutation CreateMyList($input: CreateMyListInput!) {
  createMyList(input: $input) {
    myList {
      id
      name
    }
  }
}
    `;
export type CreateMyListMutationFn = Apollo.MutationFunction<CreateMyListMutation, CreateMyListMutationVariables>;

/**
 * __useCreateMyListMutation__
 *
 * To run a mutation, you first call `useCreateMyListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMyListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMyListMutation, { data, loading, error }] = useCreateMyListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMyListMutation(baseOptions?: Apollo.MutationHookOptions<CreateMyListMutation, CreateMyListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMyListMutation, CreateMyListMutationVariables>(CreateMyListDocument, options);
      }
export type CreateMyListMutationHookResult = ReturnType<typeof useCreateMyListMutation>;
export type CreateMyListMutationResult = Apollo.MutationResult<CreateMyListMutation>;
export type CreateMyListMutationOptions = Apollo.BaseMutationOptions<CreateMyListMutation, CreateMyListMutationVariables>;
export const DeleteMyListDocument = gql`
    mutation DeleteMyList($input: DeleteMyListInput!) {
  deleteMyList(input: $input) {
    myList {
      id
    }
  }
}
    `;
export type DeleteMyListMutationFn = Apollo.MutationFunction<DeleteMyListMutation, DeleteMyListMutationVariables>;

/**
 * __useDeleteMyListMutation__
 *
 * To run a mutation, you first call `useDeleteMyListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMyListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMyListMutation, { data, loading, error }] = useDeleteMyListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMyListMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMyListMutation, DeleteMyListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMyListMutation, DeleteMyListMutationVariables>(DeleteMyListDocument, options);
      }
export type DeleteMyListMutationHookResult = ReturnType<typeof useDeleteMyListMutation>;
export type DeleteMyListMutationResult = Apollo.MutationResult<DeleteMyListMutation>;
export type DeleteMyListMutationOptions = Apollo.BaseMutationOptions<DeleteMyListMutation, DeleteMyListMutationVariables>;
export const CreateMyListSentenceDocument = gql`
    mutation CreateMyListSentence($input: CreateMyListSentenceInput!) {
  createMyListSentence(input: $input) {
    myListSentence {
      id
      sentenceId
      myListId
    }
  }
}
    `;
export type CreateMyListSentenceMutationFn = Apollo.MutationFunction<CreateMyListSentenceMutation, CreateMyListSentenceMutationVariables>;

/**
 * __useCreateMyListSentenceMutation__
 *
 * To run a mutation, you first call `useCreateMyListSentenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMyListSentenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMyListSentenceMutation, { data, loading, error }] = useCreateMyListSentenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMyListSentenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateMyListSentenceMutation, CreateMyListSentenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMyListSentenceMutation, CreateMyListSentenceMutationVariables>(CreateMyListSentenceDocument, options);
      }
export type CreateMyListSentenceMutationHookResult = ReturnType<typeof useCreateMyListSentenceMutation>;
export type CreateMyListSentenceMutationResult = Apollo.MutationResult<CreateMyListSentenceMutation>;
export type CreateMyListSentenceMutationOptions = Apollo.BaseMutationOptions<CreateMyListSentenceMutation, CreateMyListSentenceMutationVariables>;
export const DeleteMyListSentenceDocument = gql`
    mutation DeleteMyListSentence($input: DeleteMyListSentenceInput!) {
  deleteMyListSentence(input: $input) {
    myListSentence {
      id
    }
  }
}
    `;
export type DeleteMyListSentenceMutationFn = Apollo.MutationFunction<DeleteMyListSentenceMutation, DeleteMyListSentenceMutationVariables>;

/**
 * __useDeleteMyListSentenceMutation__
 *
 * To run a mutation, you first call `useDeleteMyListSentenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMyListSentenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMyListSentenceMutation, { data, loading, error }] = useDeleteMyListSentenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMyListSentenceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMyListSentenceMutation, DeleteMyListSentenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMyListSentenceMutation, DeleteMyListSentenceMutationVariables>(DeleteMyListSentenceDocument, options);
      }
export type DeleteMyListSentenceMutationHookResult = ReturnType<typeof useDeleteMyListSentenceMutation>;
export type DeleteMyListSentenceMutationResult = Apollo.MutationResult<DeleteMyListSentenceMutation>;
export type DeleteMyListSentenceMutationOptions = Apollo.BaseMutationOptions<DeleteMyListSentenceMutation, DeleteMyListSentenceMutationVariables>;
export const AllSentencesDocument = gql`
    query allSentences($attributes: SentenceSearchAttributes!) {
  sentences(attributes: $attributes) {
    currentUser {
      id
      email
      myLists {
        id
        name
        myListSentences {
          id
          sentenceId
          myListId
        }
      }
    }
    pageInfo {
      currentPage
      totalPages
    }
    sentences {
      id
      sectionId
      english
      japanese
      words {
        id
        japanese
        english
      }
    }
  }
}
    `;

/**
 * __useAllSentencesQuery__
 *
 * To run a query within a React component, call `useAllSentencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSentencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSentencesQuery({
 *   variables: {
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useAllSentencesQuery(baseOptions: Apollo.QueryHookOptions<AllSentencesQuery, AllSentencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSentencesQuery, AllSentencesQueryVariables>(AllSentencesDocument, options);
      }
export function useAllSentencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSentencesQuery, AllSentencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSentencesQuery, AllSentencesQueryVariables>(AllSentencesDocument, options);
        }
export type AllSentencesQueryHookResult = ReturnType<typeof useAllSentencesQuery>;
export type AllSentencesLazyQueryHookResult = ReturnType<typeof useAllSentencesLazyQuery>;
export type AllSentencesQueryResult = Apollo.QueryResult<AllSentencesQuery, AllSentencesQueryVariables>;