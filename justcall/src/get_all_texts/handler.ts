import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetAllTextsInput } from './input'
import { GetAllTextsOutput } from './output'

export const getAllTextsHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetAllTextsInput, GetAllTextsOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://api.justcall.io/v2/texts')
                .handleRequest((ctx, input, request) => {
                    Object.keys(input).filter(key => key !== 'id').forEach((key: string) => {
                        const keyInput = input as { [key: string]: unknown };
                        request = request.addQueryString(key, `${keyInput[key]}`);
                    });

                    return request
                        .withBearerToken(ctx.auth!.user.access_token)

                })
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
