import { feature } from "topojson-client";
import statesTopo from "us-atlas/states-10m.json";
import worldTopo from "world-atlas/countries-110m.json";

type AnyTopo = Parameters<typeof feature>[0];
type Fc = {
  type: "FeatureCollection";
  features: { id?: string | number; [k: string]: any }[];
};

/**
 * The design's map components fetched these atlases from a CDN at runtime.
 * Resolving them from node_modules instead lets both maps render to static
 * SVG on the server: identical output, no d3 in the client bundle, and no
 * third-party request on page load.
 */
export const usStates = feature(
  statesTopo as unknown as AnyTopo,
  (statesTopo as any).objects.states,
) as unknown as Fc;

export const worldCountries = feature(
  worldTopo as unknown as AnyTopo,
  (worldTopo as any).objects.countries,
) as unknown as Fc;

export const FIPS_TO_AB: Record<string, string> = {
  "01": "AL",
  "02": "AK",
  "04": "AZ",
  "05": "AR",
  "06": "CA",
  "08": "CO",
  "09": "CT",
  "10": "DE",
  "11": "DC",
  "12": "FL",
  "13": "GA",
  "15": "HI",
  "16": "ID",
  "17": "IL",
  "18": "IN",
  "19": "IA",
  "20": "KS",
  "21": "KY",
  "22": "LA",
  "23": "ME",
  "24": "MD",
  "25": "MA",
  "26": "MI",
  "27": "MN",
  "28": "MS",
  "29": "MO",
  "30": "MT",
  "31": "NE",
  "32": "NV",
  "33": "NH",
  "34": "NJ",
  "35": "NM",
  "36": "NY",
  "37": "NC",
  "38": "ND",
  "39": "OH",
  "40": "OK",
  "41": "OR",
  "42": "PA",
  "44": "RI",
  "45": "SC",
  "46": "SD",
  "47": "TN",
  "48": "TX",
  "49": "UT",
  "50": "VT",
  "51": "VA",
  "53": "WA",
  "54": "WV",
  "55": "WI",
  "56": "WY",
};
