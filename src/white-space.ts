import { BREAK, DASH, SPACE, WHITE } from './constants/css-property-keyword';
import { Style } from '@master/style';

const WHITE_SPACE = WHITE + DASH + SPACE;
const BREAK_SPACES = BREAK + DASH + SPACE + 's';

export class WhiteSpaceStyle extends Style {
    static override property = WHITE_SPACE;
    static override unit = '';
    static override semantics = {
        // break-spaces
        [BREAK_SPACES]: {
            [WHITE_SPACE]: BREAK_SPACES
        }
    }
}