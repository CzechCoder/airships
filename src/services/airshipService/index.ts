import { apolloClient } from "../../app/graphql";
import { GET_ALL_AIRSHIPS } from "./queries";
import { GetAirships_airships } from "./__generated__/GetAirships";

class AirshipService {
  public async getAirships(): Promise<GetAirships_airships[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_AIRSHIPS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) return response.data.airships as GetAirships_airships[];

    return [];
  }
}

export default new AirshipService();
