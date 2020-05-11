export default time => {
  // Set Out for Clean Up
  let out;

  // Use Promise
  return new Promise(resolve => {
    // Assignment Out
    out = setTimeout(
      () => {
        // Clean Up
        clearTimeout(out);

        // Execute
        resolve();
      },
      // Time
      time || 0
    );
  });
};
