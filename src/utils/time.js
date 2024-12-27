function isRecentSubmission(timestamp) {
    // Current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);
  
    // Calculate the difference in seconds (1 day = 86400 seconds)
    const oneDayInSeconds = 86400;
    const timeDifference = currentTime - timestamp;
  
    // Return true if the difference is less than 1 day, otherwise false
    return timeDifference < oneDayInSeconds;
  }

export { isRecentSubmission };