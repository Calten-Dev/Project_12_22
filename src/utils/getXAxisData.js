export function getXAxisData() {
  const today = new Date();
  today.setHours(9, 30, 0, 0);

  const end = new Date();
  end.setHours(16, 0, 0, 0);

  let timeArray = [new Date(today)];

  while (today < end) {
    today.setMinutes(today.getMinutes() + 1);
    timeArray.push(new Date(today));
  }

  return timeArray;
}