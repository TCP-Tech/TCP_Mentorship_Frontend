// import { URL } from "url";
import { formatQuestionData } from "./format_utils.js";
import { selectProblemQuery } from "./gql_queries.js";

function getPlatformAndProblem(url) {
  /**
   * Parse the URL to determine the platform and extract the problem name or identifier.
   */
  try {
    // Parse the URL
    const parsedUrl = new URL(url);

    // Validate if the URL is well-formed
    if (!parsedUrl.hostname || !parsedUrl.protocol) {
      throw new Error("Invalid URL format.");
    }

    // Determine the platform
    const hostnameParts = parsedUrl.hostname.split(".");
    const platform =
      hostnameParts[0] === "www" ? hostnameParts[1] : hostnameParts[0];

    // Extract problem name based on the platform
    let problemName;
    if (platform === "leetcode") {
      if (parsedUrl.pathname.includes("/problems/")) {
        problemName = parsedUrl.pathname.split("/problems/")[1].split("/")[0];
      } else {
        throw new Error("Invalid LeetCode problem URL format.");
      }
    } else if (platform === "geeksforgeeks") {
      if (parsedUrl.pathname.includes("/problems/")) {
        problemName = parsedUrl.pathname
          .split("/problems/")[1]
          .split("/")[0];
      } else {
        throw new Error("Invalid GeeksforGeeks problem URL format.");
      }
    } else if (platform === "codeforces") {
      if (parsedUrl.pathname.includes("/problemset/problem/")) {
        const pathParts = parsedUrl.pathname.split("/");
        problemName = `${pathParts[pathParts.length - 2]}-${pathParts[pathParts.length - 1]}`;
      } else {
        throw new Error("Invalid Codeforces problem URL format.");
      }
    } else {
      throw new Error("Unsupported platform.");
    }

    return { platform, problemName };
  } catch (error) {
    return { error: error.message };
  }
}

const GRAPHQL_ENDPOINT = "https://leetcode.com/graphql";

async function fetchSingleProblemLeetCode(titleSlug) {
  /**
   * Fetch problem details from LeetCode using GraphQL API.
   */
  try {
    const response = await fetch('/api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: selectProblemQuery,
        variables: { titleSlug },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      return result; // Handle errors (you can customize error handling)
    }

    return formatQuestionData(result.data);
  } catch (error) {
    return { error: error.message }; // Handle errors
  }
}

export { getPlatformAndProblem, fetchSingleProblemLeetCode };
