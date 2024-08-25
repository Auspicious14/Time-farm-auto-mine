import axios from "axios";
import { getHeaders } from "./config";

const baseUrl = "https://tg-bot-tap.laborx.io/api/v1";

const urls = {
  auth: `${baseUrl}/auth/validate-init/v2`,
  farmingInfo: `${baseUrl}/farming/info`,
  startFarming: `${baseUrl}/farming/start`,
  claimFarming: `${baseUrl}/farming/finish`,
};

const farm = (token: string, type: "start" | "claim") => {
  const headers = getHeaders({ Authorization: `Bearer ${token}` });
  axios
    .post(
      type === "start" ? urls.startFarming : urls.claimFarming,
      {},
      { headers }
    )
    .then((res) => {
      const data = res?.data?.data;
      console.log(data, "dataaa");
    })
    .catch((err) => {
      console.log(err.message, "errr");
      console.log(err.request, "errr");
    });
};

// export const startFarming = farm("", "start");
// export const claimPoints = farm("", "claim");

const validateAuth = (
  first_name: string,
  user_name: string,
  queryId?: string | "",
  last_name?: string | ""
) => {
  const initData = {
    queryId: queryId,
    user: {
      first_name,
      user_name,
      last_name,
    },
  };

  console.log(initData);
  axios
    .post(urls.auth, { initData, platform: "web" }, { headers: getHeaders() })
    .then((res) => {
      console.log(res?.statusText, "status text");
      console.log(res?.data, "dataaa");
    })
    .catch((err) => {
      console.log(err.message, "validate errr");
      console.log(err.request, "validate request errr");
    });
};

validateAuth("Auspicious", "Auspicious14", "AAGq0HdkAAAAAKrQd2RnBNwo");

// farm(
//   "token"
//   "claim"
// );
