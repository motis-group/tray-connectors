import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetTextInput } from './input'
import { GetTextOutput } from './output'

export const getTextHandler = OperationHandlerSetup.configureHandler<JustCallAuth, GetTextInput, GetTextOutput>((handler) =>
    handler.usingHttp((http) =>
        http.get(`https://api.justcall.io/v2/texts/:id`)
            .handleRequest((ctx, input, request) => {
                const { id, ...otherInputs } = input;
                Object.entries(otherInputs).forEach(([key, value]) => {
                    request = request.addQueryString(key, `${value}`);
                });

                return request
                    .withBearerToken(ctx.auth!.user.access_token)
                    .addPathParameter('id', id.toString());
            })
            .handleResponse((response) => response.parseWithBodyAsJson())
    )
);