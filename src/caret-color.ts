import { Style } from '@master/style';
import { CARET, COLOR, DASH } from './constants/css-property-keyword';

export class CaretColorStyle extends Style {
    static override property = CARET + DASH + COLOR;
}