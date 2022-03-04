import { IOptions, Client, createClientAsync } from "soap";
import { IAuth } from "../Interfaces/IAuth";

class SoapBase {
  public SERVICE_URL: string = null;

  public _: Client;

  constructor(public appKey: string, public appSecret: string, public options: IOptions = {}) {}

  public async connect(): Promise<void> {
    this._ = await createClientAsync(this.SERVICE_URL, this.options);
  }

  public getAuth(): IAuth {
    const auth: IAuth = {
      appKey: this.appKey,
      appSecret: this.appSecret,
    };
    return auth;
  }
}

export default SoapBase;
