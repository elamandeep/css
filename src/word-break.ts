import { BREAK, DASH, HIDDEN, OVERFLOW, WORD, WRAP } from './constants/css-property-keyword';
import { Style } from '@master/style';

const BREAK_WORD = BREAK + DASH + WORD;
const OVERFLOW_WRAP = OVERFLOW + DASH + WRAP;

export class WordBreakStyle extends Style {
    static override property = WORD + DASH + BREAK;
    static override unit = '';
    static override semantics = {
        // break-words
        [BREAK + DASH + WORD]: {
            [OVERFLOW_WRAP]: BREAK_WORD,
            [OVERFLOW]: HIDDEN
        }
    }
}