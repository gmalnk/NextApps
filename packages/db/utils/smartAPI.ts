import { SmartAPI } from "smartapi-javascript";
const otplib = require("otplib");

const SmartAPIClientSingleton = () => {
  const smartAPI = new SmartAPI({
    api_key: process.env.API_APIKEY,
  });
  const session = smartAPI.generateSession(
    process.env.API_APIUSERNAME,
    process.env.API_APIPASSWORD,
    otplib.authenticator.generate(process.env.API_APITOKEN as string)
  );
  return session;
};

function getRefreshToken() {
  return SmartAPIClientSingleton();
}

const globalForResfreshToken = globalThis as unknown as {
  session: any;
};

export const session = globalForResfreshToken.session ?? getRefreshToken();
if (process.env.NODE_ENV !== "production")
  globalForResfreshToken.session = session;
