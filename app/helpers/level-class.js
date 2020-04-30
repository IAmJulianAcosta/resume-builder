import { helper } from '@ember/component/helper';

export default helper(function levelClass([current, level]) {
  if (current >= level) {
    if (current - level < 1 && current - level > 0) {
      return "half-empty"
    }
    return "empty"
  }
  else {
    return "full";
  }
});
