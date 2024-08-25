export const getHeaders = (headers = {}) => {
  return {
    ...headers,
    Host: "tg-bot-tap.laborx.io",
    Accept: "*/*",
    "Sec-Fetch-Site": "cross-site",
    "Accept-Language": "en-GB,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Sec-Fetch-Mode": "cors",
    "Content-Type": "text/plain;charset=UTF-8",
    Origin: "https://tg-tap-miniapp.laborx.io",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    Referer: "https://tg-tap-miniapp.laborx.io/",
    Connection: "keep-alive",
    "Sec-Fetch-Dest": "empty",
  };
};
