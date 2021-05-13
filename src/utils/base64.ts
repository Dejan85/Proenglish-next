export const base64 = (data: string): string =>
  Buffer.from(data).toString("base64");
