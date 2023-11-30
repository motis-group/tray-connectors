import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { getTextHandler } from './handler'
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(
	getTextHandler,
	(handlerTest) =>
		handlerTest
			.usingHandlerContext('test')
			.nothingBeforeAll()
			.testCase('should get a text', (testCase) =>
				testCase
					.givenNothing()
					.when(() => ({ id: 262998556, type: 'call' }))
					.then(({ output }) => {
						console.log(output);
						const outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output);
						console.log(outputValue);
						expect(outputValue);
					})
					.finallyDoNothing()
			)
			.nothingAfterAll()
);
