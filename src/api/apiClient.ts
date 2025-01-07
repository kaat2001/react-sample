// I have generated it with `--axios` flag so I use axios here. 
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../data/serviceVariables";
import { GeneratedApiClient, HttpClient } from "./GeneratedApiClient";

// only this is exported. It is the only entry point to the api.
export const apiClient = async <ResponseType>(
    func: ApiClientOptions<ResponseType>
): Promise<AxiosResponse<ResponseType>> => {
    const apiClientInstance = createApiClient();
    const response = await func({
        client: apiClientInstance
    });

    return response;
};

// it is the type of the function. What should be intput and output for passing function
type ApiClientOptions<ResponseType> = (
    apiClientParameters: ApiClientParameters
) => Promise<AxiosResponse<ResponseType>>;

// if you want to add more paramaters to the ApiClient, I think they should be defined here
type ApiClientParameters = {
    client: GeneratedApiClient<unknown>;
};

//it is the internal method method
const createApiClient = (): GeneratedApiClient<unknown> => {
    const baseUrl = getBaseUrl();

    // we need to configure it a bit on start. I mean we need to pass a `baseUrl` for example.
    const httpClient = new HttpClient({
        baseURL: baseUrl,
        headers: {
            "X-api-version": "1.0",
            "content-type": "application/json;charset=UTF-8",
        },
        securityWorker,
    });
    return new GeneratedApiClient(httpClient);
};

const getBaseUrl = () => {
    // you should replace it with getting an addres from your conifg
    return API_BASE_URL;
}

// It is a specific part of the generated client. It allows you to modify the request before sending if it secured. So you can add an `Authorization` header to it, for example.
const securityWorker = <SecurityDataType = unknown>(
    securityData: SecurityDataType | null
): AxiosRequestConfig => {
    const result: AxiosRequestConfig = {};
    const token = getAuthToken();
    result.headers = { Authorization: token };
    return result;
};

const getAuthToken = () => {
    return "{token_for_current_user}";
}
