import {LoggerService} from "../interfaces/LoggerService";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class ConsoleLoggerService implements LoggerService {

    public info(toLog: string, additionalData?: any): Promise<void> {

        console.log(toLog);

        return Promise.resolve();
    }

    warning(toLog: string, additionalData?: any): Promise<void> {

        console.warn(toLog);

        return Promise.resolve();
    }

    error(toLog: string, additionalData?: any): Promise<void> {

        console.error(toLog);

        return Promise.resolve();
    }
}
