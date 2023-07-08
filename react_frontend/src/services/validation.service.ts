import axios, { AxiosResponse } from "axios";
import { ValidationResponse } from "../interfaces/validationResponse";

const API_BASE_URL = "http://localhost:3100";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const validateCCNumber = async (
  ccNumber: string,
): Promise<ValidationResponse> => {
  try {
    const response: AxiosResponse<ValidationResponse> =
      await apiService.get<ValidationResponse>(`/validate/${ccNumber}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.error);
      }
    }
    throw new Error("Failed to validate CC number");
  }
};
