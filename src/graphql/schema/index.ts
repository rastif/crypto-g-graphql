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
    time_period_start: String!
    time_period_end: String!
    time_open: String!
    time_close: String!
    price_open: Float!
    price_close: Float!
    price_high: Float!
    price_low: Float!
  }

  type Query {
    assets: [Asset!]
    rate(asset_id_base: String!, asset_id_quote: String!): Rate!
    historicalRates(
      asset_id_base: String!
      asset_id_quote: String!
      period_id: String!
      time_start: String!
      time_end: String
    ): [HistoricalRate!]
    popularRates: [Rate!]
  }
`;

export default schema;
