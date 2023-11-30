import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { getCallHandler } from './handler'
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(
	getCallHandler,
	(handlerTest) =>
		handlerTest
			.usingHandlerContext('test')
			.nothingBeforeAll()
			.testCase('should get a product', (testCase) =>
				testCase
					.givenNothing()
					.when(() => ({ id: 2 }))
					.then(({ output }) => {
						// console.log(output);
						const outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output);
						console.log(outputValue);
						expect(outputValue);
					})
					.finallyDoNothing()
			)
			.nothingAfterAll()
);
