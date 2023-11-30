import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetCallInput } from './input'
import { GetCallOutput } from './output'

export const getCallHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetCallInput, GetCallOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://api.justcall.io/v2/calls/:id')
                .handleRequest((ctx, input, request) => {
                    const { id, ...otherInputs } = input;
                    Object.entries(otherInputs).forEach(([key, value]) => {
                        request = request.addQueryString(key, `${value}`);
                    });

                    return request
                        .withBearerToken(ctx.auth!.user.access_token)
                        .addPathParameter('id', id.toString());
                }
                )
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
