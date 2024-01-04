export function getXAxisData() {
  const today = new Date();
  today.setHours(9, 30, 0, 0); // Set the time to 09:30:00

  const end = new Date();
  end.setHours(16, 0, 0, 0); // Set the time to 16:00:00

  let timeArray = [new Date(today)]; // Start with the initial time as 09:30:00

  while (today < end) {
    today.setMinutes(today.getMinutes() + 1); // Increment by 1 minute
    timeArray.push(new Date(today)); // Store the current time as a Date object
  }

  return timeArray;
}