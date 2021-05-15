import axios, { AxiosResponse } from "axios";

export const request = async (
  urlProp: string,
  method: string
): Promise<AxiosResponse<any>> => {
  return await axios(urlProp).then((res) => res);
};
