import { gql } from "apollo-server-micro";

const schema = gql`
  type Asset {
    asset_id: String!
    name: String!
  }

  type Rate {
    asset_id_base: String!
    rate: Float!
  }

  type HistoricalRate {
    time: Int!
    price_low: Float!
    price_high: Float!
    price_open: Float!
    price_close: Float!
  }

  type Query {
    assets: [Asset!]!
    rate(asset_id_base: String!): Rate!
    historicalRates(
      asset_id_base: String!
      granularity: Int!
      time_start: String!
      time_end: String!
    ): [HistoricalRate!]!
    popularRates: [Rate!]!
  }
`;

export default schema;
