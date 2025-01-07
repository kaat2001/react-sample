/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BankCorrespondentDto {
  /** @format uuid */
  id?: string;
  name: string;
  address?: string | null;
  swift: string;
  iban: string;
  isDefault: boolean;
}

export interface BankInfoDto {
  /** @format uuid */
  id?: string;
  name: string;
  address?: string | null;
  swift: string;
  iban: string;
}

export type BaseGetQuery = object;

export interface CustomerDto {
  /** @format uuid */
  id?: string | null;
  name: string;
}

export type EmployeeGetQuery = object;

export interface EmployeeInfoDto {
  /** @format uuid */
  id?: string | null;
  firstName: string;
  lastName: string;
  /** @format date-time */
  birthDate: string;
  email: string;
}

export interface EmployeeShortInfoDto {
  /** @format uuid */
  id: string;
  firstName: string;
  lastName: string;
  /** @format date-time */
  birthDate: string;
}

export interface InvoiceDto {
  /** @format uuid */
  id?: string | null;
  invoiceNumber: string;
  contractRef: string;
  /** @format date-time */
  issueDate?: string | null;
  /** @format date-time */
  dueDate?: string | null;
  /** @format date-time */
  periodStartDate?: string;
  /** @format date-time */
  periodEndDate?: string;
  customer: CustomerDto;
  supplier: SupplierDto;
  positions?: InvoicePositionDto[];
}

export interface InvoicePositionDto {
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  order?: number | null;
  description: string;
  /** @format double */
  positionAmount?: number;
  /** @format double */
  payablePercent?: number;
  /** @format double */
  payableAmount?: number;
}

export interface SupplierDto {
  /** @format uuid */
  id?: string | null;
  name: string;
  address: string;
  beneficiaryBank: BankInfoDto;
  bankCorresponents?: BankCorrespondentDto[];
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title ApiSample
 * @version v1
 */
export class GeneratedApiClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  api = {
    /**
     * No description
     *
     * @tags Customer
     * @name CustomerGetAll
     * @request GET:/api/v1/customer/get-all
     * @secure
     */
    customerGetAll: (params: RequestParams = {}) =>
      this.http.request<CustomerDto[], any>({
        path: `/api/v1/customer/get-all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerGet
     * @request GET:/api/v1/customer/get
     * @secure
     */
    customerGet: (
      query?: {
        /** @format uuid */
        customerId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EmployeeInfoDto, any>({
        path: `/api/v1/customer/get`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerCreate
     * @request POST:/api/v1/customer/create
     * @secure
     */
    customerCreate: (data: CustomerDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/customer/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerUpdate
     * @request PATCH:/api/v1/customer/update
     * @secure
     */
    customerUpdate: (data: CustomerDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/customer/update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDelete
     * @request DELETE:/api/v1/customer/delete
     * @secure
     */
    customerDelete: (
      query?: {
        /** @format uuid */
        customerId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, any>({
        path: `/api/v1/customer/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeGetAll
     * @request GET:/api/v1/employee/get-all
     * @secure
     */
    employeeGetAll: (
      query?: {
        query?: EmployeeGetQuery;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EmployeeShortInfoDto[], any>({
        path: `/api/v1/employee/get-all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeGet
     * @request GET:/api/v1/employee/get
     * @secure
     */
    employeeGet: (
      query?: {
        /** @format uuid */
        employeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EmployeeInfoDto, any>({
        path: `/api/v1/employee/get`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeCreate
     * @request POST:/api/v1/employee/create
     * @secure
     */
    employeeCreate: (data: EmployeeInfoDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/employee/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeUpdate
     * @request PATCH:/api/v1/employee/update
     * @secure
     */
    employeeUpdate: (data: EmployeeInfoDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/employee/update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeDelete
     * @request DELETE:/api/v1/employee/delete
     * @secure
     */
    employeeDelete: (
      query?: {
        /** @format uuid */
        employeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, any>({
        path: `/api/v1/employee/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceGetAll
     * @request GET:/api/v1/invoice/get-all
     * @secure
     */
    invoiceGetAll: (
      query?: {
        query?: BaseGetQuery;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceDto[], any>({
        path: `/api/v1/invoice/get-all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceGet
     * @request GET:/api/v1/invoice/get
     * @secure
     */
    invoiceGet: (
      query?: {
        /** @format uuid */
        invoiceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EmployeeInfoDto, any>({
        path: `/api/v1/invoice/get`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreate
     * @request POST:/api/v1/invoice/create
     * @secure
     */
    invoiceCreate: (data: InvoiceDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/invoice/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceUpdate
     * @request PATCH:/api/v1/invoice/update
     * @secure
     */
    invoiceUpdate: (data: InvoiceDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/invoice/update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceDelete
     * @request DELETE:/api/v1/invoice/delete
     * @secure
     */
    invoiceDelete: (
      query?: {
        /** @format uuid */
        invoiceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, any>({
        path: `/api/v1/invoice/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePosition
     * @name InvoicePositionGetAll
     * @request GET:/api/v1/invoice-position/get-all
     * @secure
     */
    invoicePositionGetAll: (
      query?: {
        /** @format uuid */
        invoiceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceDto[], any>({
        path: `/api/v1/invoice-position/get-all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePosition
     * @name InvoicePositionGet
     * @request GET:/api/v1/invoice-position/get
     * @secure
     */
    invoicePositionGet: (
      query?: {
        /** @format uuid */
        invoicePositionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EmployeeInfoDto, any>({
        path: `/api/v1/invoice-position/get`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePosition
     * @name InvoicePositionCreate
     * @request POST:/api/v1/invoice-position/create
     * @secure
     */
    invoicePositionCreate: (data: InvoicePositionDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/invoice-position/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePosition
     * @name InvoicePositionUpdate
     * @request PATCH:/api/v1/invoice-position/update
     * @secure
     */
    invoicePositionUpdate: (data: InvoicePositionDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/invoice-position/update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePosition
     * @name InvoicePositionDelete
     * @request DELETE:/api/v1/invoice-position/delete
     * @secure
     */
    invoicePositionDelete: (
      query?: {
        /** @format uuid */
        invoicePositionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, any>({
        path: `/api/v1/invoice-position/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierGetAll
     * @request GET:/api/v1/supplier/get-all
     * @secure
     */
    supplierGetAll: (
      query?: {
        query?: BaseGetQuery;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceDto[], any>({
        path: `/api/v1/supplier/get-all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierGet
     * @request GET:/api/v1/supplier/get
     * @secure
     */
    supplierGet: (
      query?: {
        /** @format uuid */
        supplier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SupplierDto, any>({
        path: `/api/v1/supplier/get`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierCreate
     * @request POST:/api/v1/supplier/create
     * @secure
     */
    supplierCreate: (data: SupplierDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/supplier/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierUpdate
     * @request PATCH:/api/v1/supplier/update
     * @secure
     */
    supplierUpdate: (data: SupplierDto, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/supplier/update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierDelete
     * @request DELETE:/api/v1/supplier/delete
     * @secure
     */
    supplierDelete: (
      query?: {
        /** @format uuid */
        supplierId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, any>({
        path: `/api/v1/supplier/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
