import { helper } from '@ember/component/helper';

export default helper(function socialLink([social]) {
  if (social.url) {
    return social.url;
  }
  switch (social.network) {
    case 'github':
      return `https://github.com/${social.userName}`;
    case 'stack-overflow':
      return `https://stackoverflow.com/users/${social.userName}`;
    case 'linkedIn':
      return `https://www.linkedIn.com/in/${social.userName}`;
    case 'twitter':
      return `https://twitter.com/${social.userName}`;
    case 'medium':
      return `https://medium.com/@${social.userName}`;
    case 'reddit':
      return `https://www.reddit.com/user/@${social.userName}`;
    case 'facebook':
      return `https://www.facebook.com/${social.userName}`;
    case 'instagram':
      return `https://www.instagram.com/${social.userName}`;
    case 'youtube-channel':
      return `https://www.youtube.com/channel/${social.userName}`;
    case 'youtube-user':
      return `https://www.youtube.com/user/${social.userName}`;
  }
});
