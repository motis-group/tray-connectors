import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { getAllTextsHandler } from './handler'
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(
	getAllTextsHandler,
	(handlerTest) =>
		handlerTest
			.usingHandlerContext('test')
			.nothingBeforeAll()
			.testCase('should get all texts', (testCase) =>
				testCase
					.givenNothing()
					.when(() => ({contact_number: '+14158676463'}))
					.then(({ output }) => {
						// console.log(output);
						const outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output)
						console.log(outputValue);
						expect(outputValue);
					})
					.finallyDoNothing()
			)
			.nothingAfterAll()
);
