import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';

import { GetAllCallsInput } from './input'

import { GetAllCallsOutput } from './output'

export const getAllCallsHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetAllCallsInput, GetAllCallsOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://api.justcall.io/v2/calls')
                .handleRequest((ctx, input, request) => {

                    Object.keys(input).filter(key => key !== 'id').forEach((key: string) => {
                        const keyInput = input as { [key: string]: unknown };
                        request = request.addQueryString(key, `${keyInput[key]}`);
                    });

                    return request
                        .withBearerToken(ctx.auth!.user.access_token)


                    // Handle adding path parameters
                    // if (input) {
                    //     Object.keys(input).forEach((key: string) => {
                    //         const keyInput = input as { [key: string]: unknown };
                    //         request.addQueryString(key, `${keyInput[key]}`);
                    //     });
                    // }
                    // Handle adding headers
                    // return request.addHeader('Authorization', `${ctx.auth!.user.api_key}:${ctx.auth!.user.api_secret}`)
                    return request
                })
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );