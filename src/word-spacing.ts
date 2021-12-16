import { DASH, SPACING, WORD } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class WordSpacingStyle extends Style {
    static override properties = [WORD + DASH + SPACING];
}