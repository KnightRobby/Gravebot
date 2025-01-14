import Promise from 'bluebird';
import nconf from 'nconf';
import R from 'ramda';
import _request from 'request';
import sentry from './config/sentry';

const request = Promise.promisify(_request);

function makePaste(bot, msg, paste) {
  let options = {
    url: 'http://pastebin.com/api/api_post.php',
    method: 'POST',
    form: {
      api_option: 'paste',
      api_paste_code: paste,
      api_dev_key: nconf.get('PASTEBIN_KEY')
    }
  };

  request(options)
    .then(R.prop('body'))
    .then(text => bot.sendMessage(msg.channel, text))
    .catch(err => {
      sentry.captureError(err);
      bot.sendMessage(msg.channel, `Error: ${err.message}`);
    });
}

export default {
  paste: makePaste,
  pastebin: makePaste,
  makepaste: makePaste
};
