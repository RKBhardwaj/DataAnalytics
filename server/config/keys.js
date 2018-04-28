// Key.js figure out what set of credential to return
import * as ProdKeys from './prod';
import * as DevKeys from './dev';

let Keys;
if (process.env.NODE_ENV === 'production') {
  // We are production
  Keys = { ...ProdKeys };
} else {
  // We are in development,need to export only the dev keys
  Keys = { ...DevKeys };
}

export default Keys;
