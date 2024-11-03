/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum IsWeekend {
  Sunday = 'true',
  Monday = 'false',
  Tuesday = 'false',
  Wednesday = 'false',
  Thursday = 'false',
  Friday = 'false',
  Saturday = 'true',
}

function isWeekend(day: string): boolean {
  if (day === 'true') {
    console.log(true);
    return true
  }
  console.log(false);
  return false
}

isWeekend(IsWeekend.Sunday);
isWeekend(IsWeekend.Monday);
isWeekend(IsWeekend.Tuesday);
isWeekend(IsWeekend.Wednesday);
isWeekend(IsWeekend.Thursday);
isWeekend(IsWeekend.Friday);
isWeekend(IsWeekend.Saturday);
