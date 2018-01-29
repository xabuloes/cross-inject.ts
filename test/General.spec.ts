import {suite, test} from "mocha-typescript";
import {LoggerService} from "../lib/ts/logger/interfaces/LoggerService";
import {ConsoleLoggerService} from "../lib/ts/logger/classes/ConsoleLoggerService";
import {Container, inject, injectable} from "inversify";
import "reflect-metadata";

@suite
class Test {

    @test
    public testGeneralDependencyInjection(): void {

        const container: Container = new Container();

        container.bind<LoggerService>("logger").to(ConsoleLoggerService);

        @injectable()
        class TestApp {

            constructor(@inject("logger") private logger: LoggerService) {

            }

            public run(): void {
                this.logger.info("Test Message");
            }

        }

        const testApp: TestApp = container.resolve(TestApp);

        testApp.run();

    }

}
