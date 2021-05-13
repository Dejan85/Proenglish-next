import axios, { AxiosResponse } from "axios";

export const request = async (
  urlProp: string,
  method: string
): Promise<AxiosResponse<any>> => {
  const test = "http://207.154.226.106";
  //   const urlX = `${process.env.API_URL}/${urlProp}`;
  const urlX = `${test}/${urlProp}`;
  console.log("test", process.env.API_URL);

  return await axios(urlX).then((res) => res);
};
