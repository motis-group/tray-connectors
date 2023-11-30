import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetTextInput } from './input'
import { GetTextOutput } from './output'

export const getTextHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetTextInput, GetTextOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get(`https://api.justcall.io/v2/texts/:id`)
                .handleRequest((ctx, input, request) => {

                    Object.keys(input).filter(key => key !== 'id').forEach((key: string) => {
                        const keyInput = input as { [key: string]: unknown };
                        request = request.addQueryString(key, `${keyInput[key]}`);
                    });

                    return request
                        .withBearerToken(ctx.auth!.user.access_token)
                        .addPathParameter('id', input.id.toString());
                }

                )
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
