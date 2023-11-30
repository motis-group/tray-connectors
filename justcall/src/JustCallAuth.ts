import { TokenOperationHandlerAuth } from "@trayio/cdk-dsl/connector/operation/OperationHandler";

export type UserAuth = {
    access_token: string,
};

export type AppAuth = {
}

export type JustCallAuth = TokenOperationHandlerAuth<UserAuth,AppAuth>;
