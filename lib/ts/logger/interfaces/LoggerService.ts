export interface LoggerService {

    info(toLog: string, additionalData?: any): Promise<void>;

    warning(toLog: string, additionalData?: any): Promise<void>;

    error(toLog: string, additionalData?: any): Promise<void>;

}
