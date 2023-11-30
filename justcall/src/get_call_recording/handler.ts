import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetProductInput } from './input'
import { GetProductOutput } from './output'

export const getProductHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetProductInput, GetProductOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://api.justcall.io/v2/calls/:id/recording/download')
                .handleRequest((ctx, input, request) => {
                    const { id } = input;
                    return request
                        .withBearerToken(ctx.auth!.user.access_token)
                        .addPathParameter('id', id.toString());
                }
                )
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
