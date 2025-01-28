import { formatQuestionData } from "./format_utils.js";
import { selectProblemQuery, recentAcSubmission } from "./gql_queries.js";
import { isRecentSubmission } from "./time.js";

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
        problemName = parsedUrl.pathname.split("/problems/")[1].split("/")[0];
      } else {
        throw new Error("Invalid GeeksforGeeks problem URL format.");
      }
    } else if (platform === "codeforces") {
      if (parsedUrl.pathname.includes("/problemset/problem/")) {
        const pathParts = parsedUrl.pathname.split("/");
        problemName = `${pathParts[pathParts.length - 2]}-${
          pathParts[pathParts.length - 1]
        }`;
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

async function checkLeetCodeProblemSolved(username, problemSlug) {
  /**
   * Verifies if the LeetCode problem has been solved by the user.
   */
  try {
    const variables = { username };

    const response = await fetch("/leetcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: recentAcSubmission,
        variables,
      }),
    });
    const result = await response.json();
    console.log(result.data.recentAcSubmissionList);
    const submissions = result.data.recentAcSubmissionList;

    console.log(submissions);
    const problem = submissions.find(
      (submission) =>
        submission.title === problemSlug &&
        submission.statusDisplay === "Accepted"
    );

    if(problem === undefined) return false;
    return isRecentSubmission(problem.timestamp);
  } catch (error) {
    console.error("Error checking problem status on LeetCode:", error.message);
    return false;
  }
}


async function fetchSingleProblemLeetCode(titleSlug) {
  /**
   * Fetch problem details from LeetCode using GraphQL API.
   */
  try {
    const response = await fetch("/leetcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
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

function getLeetCodeUsername(url) {
  try {
    const parsedUrl = new URL(url);

    // Validate if the URL contains the LeetCode user path
    if (!parsedUrl.hostname.includes("leetcode.com") || !parsedUrl.pathname.startsWith("/u/")) {
      throw new Error("Invalid LeetCode profile URL.");
    }

    // Extract the username from the pathname
    const username = parsedUrl.pathname.split("/u/")[1].replace("/", "");

    // Check if username is empty or invalid
    if (!username) {
      throw new Error("Username not found in URL.");
    }

    return username;
  } catch (error) {
    return { error: error.message };
  }
}

export { getPlatformAndProblem, fetchSingleProblemLeetCode, checkLeetCodeProblemSolved, getLeetCodeUsername };
