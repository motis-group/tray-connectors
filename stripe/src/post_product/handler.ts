import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { JustCallAuth } from '../JustCallAuth';
import { GetProductInput } from './input'
import { GetProductOutput } from './output'

export const getProductHandler =
    OperationHandlerSetup.configureHandler<JustCallAuth, GetProductInput, GetProductOutput>((handler) =>
        handler.usingHttp((http) =>
            http.get('https://fakestoreapi.com/products/:id')
                .handleRequest((ctx, input, request) =>
                    request.addPathParameter('id', input.id.toString())
                )
                .handleResponse((response) => response.parseWithBodyAsJson())
        )
    );
