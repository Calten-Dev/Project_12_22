export function convertGraphData(data) {
  const filterAndNormalizeData = (dataSeries) => {
    const filteredData = dataSeries.filter(([timestamp]) => {
      const date = new Date(timestamp);
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      return (hours > 9 || (hours === 9 && minutes >= 30)) && (hours < 16 || (hours === 16 && minutes === 0));
    });

    const firstValue = filteredData[0][1];
    return filteredData.map((subArray) => ((subArray[1] - firstValue) / firstValue) * 100);
  };

  let returnData = {};
  Object.keys(data).map((item) => {
    return returnData[item] = filterAndNormalizeData(data[item]);
  });

  return returnData;
}
