//APIを利用して住所を取得する。

import { ChangeEvent, useState } from "react";
import axios from "axios";

import { Ex300Practice } from "./subComponents/Ex300Practice";

type AddressInfo = {
  items: [{ address: string }];
  length: number;
  status: number;
};

export const Ex300 = () => {
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");

  require("axios");
  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>): void => {
    setZipcode(event.target.value);
  };
  const getAddress = async (): Promise<void> => {
    const response = await axios.get<AddressInfo>("https://zipcoda.net/api", {
      adapter: require("axios-jsonp"),
      params: {
        zipcode: zipcode,
      },
    });
    setAddress(response.data.items[0].address);
  };
  return (
    <div className="ex300">
      <h2>EX300</h2>
      <p>APIで住所を取得する( https://zipcoda.net/api )</p>
      <p>郵便番号を入力する。</p>
      <input type="text" onChange={onChangeZipcode} value={zipcode} />
      <button type="button" onClick={getAddress}>
        データ取得
      </button>
      <div>住所：{address}</div>
      <hr />
      <Ex300Practice />
    </div>
  );
};
