export function convertGraphData(data) {
  const filteredACDData = data.ACD.filter(([timestamp]) => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return (hours > 9 || (hours === 9 && minutes >= 30)) && (hours < 16 || (hours === 16 && minutes === 0));
  });
  const firstACDValue = filteredACDData[0][1];
  const acdData = filteredACDData.map((subArray) => ((subArray[1] - firstACDValue) / firstACDValue) * 100);

  const filteredCCMPData = data.CCMP.filter(([timestamp]) => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return (hours > 9 || (hours === 9 && minutes >= 30)) && (hours < 16 || (hours === 16 && minutes === 0));
  });
  const firstCCMPValue = filteredCCMPData[0][1];
  const ccmpData = filteredCCMPData.map((subArray) => ((subArray[1] - firstCCMPValue) / firstCCMPValue) * 100);

  const filteredSPXData = data.SPX.filter(([timestamp]) => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return (hours > 9 || (hours === 9 && minutes >= 30)) && (hours < 16 || (hours === 16 && minutes === 0));
  });
  const firstSPXValue = filteredSPXData[0][1];
  const spxData = filteredSPXData.map((subArray) => ((subArray[1] - firstSPXValue) / firstSPXValue) * 100);

  return { acdData, ccmpData, spxData };
}
