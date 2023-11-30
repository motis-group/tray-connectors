import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetCallInput } from './input'
import { GetCallOutput } from './output'

export const getCallHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetCallInput, GetCallOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://api.justcall.io/v2/calls/:id')
                .handleRequest((ctx, input, request) => {
                    // Add id
                    return request.addPathParameter(':id', input.id.toString())
//                    // Handle adding path parameters
                    // if (input) {
                    //     Object.keys(input).forEach((key: string) => {
                    //         const keyInput = input as { [key: string]: unknown };
                    //         request.addQueryString(key, `${keyInput[key]}`);
                    //     });
                    // }
                    // Handle adding headers
                   
                }
                )
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
