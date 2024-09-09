export const formatDate = (dateString: string): Date => {
  // Remove extra spaces and split the string
  const parts = dateString.replace(/\s+/g, ' ').split(' ');

  if (parts.length !== 6) {
    console.error('Unexpected date format:', dateString);
    return new Date(NaN); // Invalid date
  }

  const [dayOfWeek, day, month, year, _, time] = parts;
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIndex = months.indexOf(month);

  if (monthIndex === -1) {
    console.error('Invalid month:', month);
    return new Date(NaN); // Invalid date
  }

  const [hours, minutes] = time.split(':');
  const date = new Date(
    parseInt(year),
    monthIndex,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
  );

  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString);
    return new Date(); // Return current date instead of invalid date
  } else {
    return date;
  }
};
