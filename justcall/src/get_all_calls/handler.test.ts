import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { getAllCallsHandler } from './handler'
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(
	getAllCallsHandler,
	(handlerTest) =>
		handlerTest
			.usingHandlerContext('test')
			.nothingBeforeAll()
			.testCase('should get all products', (testCase) =>
				testCase
					.givenNothing()
					.when(() => ({}))
					.then(({ output }) => {
						
						const outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output)
						console.log(outputValue);
						expect(outputValue);
					})
					.finallyDoNothing()
			)
			.nothingAfterAll()
);
