import { FINANCIAL_URLS } from "./constants";

const getFollowedData = async () => {
  try {
    const response = await fetch(FINANCIAL_URLS.FOLLOWED_CLEAN_URL, {
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

const getIndividualPortfolioData = async (ticker) => {
  try {
    const response = await fetch(`${ticker}.json`, {
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
    throw error;
  }
};

const getManagerList = async () => {
  try {
    const response = await fetch(FINANCIAL_URLS.MANAGERLIST_CLEANED_URL, {
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

const getPositionDetailData = async (managerId) => {
  try {
    const response = await fetch(`${FINANCIAL_URLS.PORTFOLIO_CLEANED_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    const data = responseData.filter((item) => item[0] == managerId);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getMMDetailData = async (mmid) => {
  try {
    const response = await fetch(`${FINANCIAL_URLS.MANAGERLIST_CLEANED_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    const data = responseData.find((item) => item.mm_id == mmid);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const financeApis = {
  getFollowedData,
  getPortfolioData,
  getGraphData,
  getIndividualPortfolioData,
  getManagerList,
  getPositionDetailData,
  getMMDetailData,
};
