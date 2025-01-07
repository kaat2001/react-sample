import { apiClient } from "../../api/apiClient";
import { BaseGetQuery, CustomerDto } from "../../api/GeneratedApiClient";


export const getCustomers = async (
    getCustomersParams: BaseGetQuery
  ): Promise<CustomerDto[]> => {
    const response = await apiClient(({ client }) =>
        client.api.customerGetAll(getCustomersParams)
    );
  
    return response.data;
  };
  
  