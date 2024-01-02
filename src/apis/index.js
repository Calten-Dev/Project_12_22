import { FINANCIAL_URLS } from "./constants";
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const getFollowedData = async () => {
  try {
    const response = await fetch(corsAnywhereUrl + FINANCIAL_URLS.FOLLOWED_CLEAN_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    return [];
  }
};

const getPortfolioData = async () => {
  try {
    const response = await fetch(
      FINANCIAL_URLS.PORTFOLIO_CLEANED_URL,
      { mode: "cors" },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    return [];
  }
};

const getGraphData = async () => {
  try {
    const response = await fetch(FINANCIAL_URLS.GRAPH_CLEANED_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    return [];
  }
};

export const financeApis = {
  getFollowedData,
  getPortfolioData,
  getGraphData,
};
