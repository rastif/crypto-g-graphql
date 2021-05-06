import axios from "axios";
import qs from "qs";
import config from "../../config";

axios.defaults.baseURL = config.API_BASE;

const resolvers = {
  Query: {
    assets: async () => {
      const resp = await axios.get("/v1/assets");
      return resp.data;
    },
    rate: async (
      _: any,
      args: { asset_id_base: string; asset_id_quote: string }
    ) => {
      const queryParams = qs.stringify(
        {
          asset_id_base: args.asset_id_base,
          asset_id_quote: args.asset_id_quote,
        },
        { addQueryPrefix: true, skipNulls: true }
      );
      const resp = await axios.get(`/v1/rate${queryParams}`);
      return resp.data;
    },
    historicalRates: async (
      _: any,
      args: {
        asset_id_base: string;
        granularity: string;
        time_start: string;
        time_end: string;
      }
    ) => {
      const queryParams = qs.stringify(
        {
          asset_id_base: args.asset_id_base,
          granularity: args.granularity,
          time_start: args.time_start,
          time_end: args.time_end,
        },
        { addQueryPrefix: true, skipNulls: true }
      );
      const resp = await axios.get(`/v1/historicalrates${queryParams}`);

      return resp.data;
    },
    popularRates: async () => {
      const resp = await axios.get("/v1/popularratates");
      return resp.data;
    },
  },
};

export default resolvers;
