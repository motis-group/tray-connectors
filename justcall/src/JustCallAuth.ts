import { TokenOperationHandlerAuth, Oauth1OperationHandlerAuth,  } from "@trayio/cdk-dsl/connector/operation/OperationHandler";

export type TokenOperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'TOKEN';
};
export type Oauth1OperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'OAUTH1';
};
export type Oauth2OperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'OAUTH2';
};
export type Oauth2PasswordOperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'OAUTH2_PASSWORD';
};
export type Oauth2ClientCredentialsOperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'OAUTH2_CLIENT_CREDENTIALS';
};
export type BuiltinOperationHandlerAuth<USER, APP> = OperationHandlerAuth<USER, APP> & {
    authType: 'BUILTIN';
};

export type JustCallAuth = never //No Authentication
