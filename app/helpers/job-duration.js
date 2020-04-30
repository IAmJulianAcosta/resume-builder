import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function duration([start, end]) {
  start = moment(start);
  end = moment(end);

  const duration = moment.duration(end.diff(start));
  const days = Math.floor(duration.as('days'));

  if (days < 60) {
    return `${days} days`
  } else if (days < 365) {
    let months = Math.floor(duration.as('months'));
    return `${months} months`
  } else {
    const years = Math.floor(duration.as('years'));
    let months = Math.floor(duration.as('months'));
    let string = `${years} ${years === 1 ? 'year' : 'years' }`;
    if (years >= 1) {
      months = months % 12;
      string += `, ${months} ${months === 1 ? 'month' : 'months'}`;
    }
    return string;
  }
});
