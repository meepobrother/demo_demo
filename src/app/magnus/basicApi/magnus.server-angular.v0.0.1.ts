/* tslint:disable */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Bool: any;
	Bytes: any;
	Date: any;
	Double: any;
	Empty: any;
	Error: any;
	Fixed32: any;
	Fixed64: any;
	Int32: any;
	Int64: any;
	Json: any;
	Sfixed32: any;
	Sfixed64: any;
	Sint32: any;
	Sint64: any;
	Timestamp: any;
	Uint32: any;
	Uint64: any;
};

export type LimitInput = {
	page?: Maybe<Scalars['Int']>;
	psize?: Maybe<Scalars['Int']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	userDelete?: Maybe<UserMessage>;
	userDeletes?: Maybe<UserMessage>;
	userUpdate?: Maybe<UserMessage>;
	userEdit?: Maybe<UserMessage>;
	userEdits?: Maybe<UserMessage>;
};

export type MutationUserDeleteArgs = {
	id: Scalars['Int'];
};

export type MutationUserDeletesArgs = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type MutationUserUpdateArgs = {
	id: Scalars['Int'];
	data: UserPartial;
};

export type MutationUserEditArgs = {
	data: UserInput;
};

export type MutationUserEditsArgs = {
	datas: Array<Maybe<UserInput>>;
};

export type Query = {
	__typename?: 'Query';
	userList?: Maybe<UserMessages>;
	userDetail?: Maybe<UserMessage>;
};

export type QueryUserListArgs = {
	where?: Maybe<UserInputWhere>;
	order?: Maybe<UserInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type QueryUserDetailArgs = {
	id: Scalars['Int'];
};

export type User = {
	__typename?: 'User';
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInput = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInputOrder = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInputWhere = {
	username_Not?: Maybe<Scalars['String']>;
	username_In?: Maybe<Array<Scalars['String']>>;
	username_NotIn?: Maybe<Array<Scalars['String']>>;
	username_Lt?: Maybe<Scalars['String']>;
	username_Lte?: Maybe<Scalars['String']>;
	username_Gt?: Maybe<Scalars['String']>;
	username_Gte?: Maybe<Scalars['String']>;
	username_Contains?: Maybe<Scalars['String']>;
	username_NotContains?: Maybe<Scalars['String']>;
	username_StartsWith?: Maybe<Scalars['String']>;
	username_NotStartsWith?: Maybe<Scalars['String']>;
	username_EndsWith?: Maybe<Scalars['String']>;
	username_NotEndsWith?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
	password_Not?: Maybe<Scalars['String']>;
	password_In?: Maybe<Array<Scalars['String']>>;
	password_NotIn?: Maybe<Array<Scalars['String']>>;
	password_Lt?: Maybe<Scalars['String']>;
	password_Lte?: Maybe<Scalars['String']>;
	password_Gt?: Maybe<Scalars['String']>;
	password_Gte?: Maybe<Scalars['String']>;
	password_Contains?: Maybe<Scalars['String']>;
	password_NotContains?: Maybe<Scalars['String']>;
	password_StartsWith?: Maybe<Scalars['String']>;
	password_NotStartsWith?: Maybe<Scalars['String']>;
	password_EndsWith?: Maybe<Scalars['String']>;
	password_NotEndsWith?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
	AND?: Maybe<Array<UserInputWhere>>;
	OR?: Maybe<Array<UserInputWhere>>;
	NOT?: Maybe<Array<UserInputWhere>>;
};

export type UserListResult = {
	__typename?: 'UserListResult';
	list: Array<Maybe<User>>;
	count: Scalars['Int'];
};

export type UserMessage = {
	__typename?: 'UserMessage';
	code: Scalars['String'];
	message: Scalars['String'];
	data?: Maybe<User>;
};

export type UserMessages = {
	__typename?: 'UserMessages';
	code: Scalars['String'];
	message: Scalars['String'];
	data?: Maybe<UserListResult>;
};

export type UserPartial = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};
export type UserListQueryVariables = {
	where?: Maybe<UserInputWhere>;
	order?: Maybe<UserInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type UserListQuery = { __typename?: 'Query' } & {
	userList: Maybe<
		{ __typename?: 'UserMessages' } & Pick<UserMessages, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'UserListResult' } & Pick<UserListResult, 'count'> & {
							list: Array<Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>>;
						}
				>;
			}
	>;
};

export type UserDetailQueryVariables = {
	id: Scalars['Int'];
};

export type UserDetailQuery = { __typename?: 'Query' } & {
	userDetail: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type UserDeleteMutationVariables = {
	id: Scalars['Int'];
};

export type UserDeleteMutation = { __typename?: 'Mutation' } & {
	userDelete: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type UserDeletesMutationVariables = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type UserDeletesMutation = { __typename?: 'Mutation' } & {
	userDeletes: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type UserUpdateMutationVariables = {
	id: Scalars['Int'];
	data: UserPartial;
};

export type UserUpdateMutation = { __typename?: 'Mutation' } & {
	userUpdate: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type UserEditMutationVariables = {
	data: UserInput;
};

export type UserEditMutation = { __typename?: 'Mutation' } & {
	userEdit: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type UserEditsMutationVariables = {
	datas: Array<Maybe<UserInput>>;
};

export type UserEditsMutation = { __typename?: 'Mutation' } & {
	userEdits: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export const UserListDocument = gql`
	query userList($where: UserInputWhere, $order: UserInputOrder, $limit: LimitInput) {
		userList(where: $where, order: $order, limit: $limit) {
			code
			message
			data {
				list {
					username
					password
				}
				count
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserListGQL extends Apollo.Query<UserListQuery, UserListQueryVariables> {
	document = UserListDocument;
	client = 'basicApi';
}
export const UserDetailDocument = gql`
	query userDetail($id: Int!) {
		userDetail(id: $id) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDetailGQL extends Apollo.Query<UserDetailQuery, UserDetailQueryVariables> {
	document = UserDetailDocument;
	client = 'basicApi';
}
export const UserDeleteDocument = gql`
	mutation userDelete($id: Int!) {
		userDelete(id: $id) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDeleteGQL extends Apollo.Mutation<UserDeleteMutation, UserDeleteMutationVariables> {
	document = UserDeleteDocument;
	client = 'basicApi';
}
export const UserDeletesDocument = gql`
	mutation userDeletes($ids: [Int]!) {
		userDeletes(ids: $ids) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDeletesGQL extends Apollo.Mutation<UserDeletesMutation, UserDeletesMutationVariables> {
	document = UserDeletesDocument;
	client = 'basicApi';
}
export const UserUpdateDocument = gql`
	mutation userUpdate($id: Int!, $data: UserPartial!) {
		userUpdate(id: $id, data: $data) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserUpdateGQL extends Apollo.Mutation<UserUpdateMutation, UserUpdateMutationVariables> {
	document = UserUpdateDocument;
	client = 'basicApi';
}
export const UserEditDocument = gql`
	mutation userEdit($data: UserInput!) {
		userEdit(data: $data) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserEditGQL extends Apollo.Mutation<UserEditMutation, UserEditMutationVariables> {
	document = UserEditDocument;
	client = 'basicApi';
}
export const UserEditsDocument = gql`
	mutation userEdits($datas: [UserInput]!) {
		userEdits(datas: $datas) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserEditsGQL extends Apollo.Mutation<UserEditsMutation, UserEditsMutationVariables> {
	document = UserEditsDocument;
	client = 'basicApi';
}
export interface IntrospectionResultData {
	__schema: {
		types: {
			kind: string;
			name: string;
			possibleTypes: {
				name: string;
			}[];
		}[];
	};
}

const result: IntrospectionResultData = {
	__schema: {
		types: []
	}
};

export default result;
