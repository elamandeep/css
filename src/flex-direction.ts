import { COL, COLUMN, DASH, DIRECTION, FLEX, REVERSE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class FlexDirectionStyle extends Style {
    static override prefixes = /^flex:((row|col|column)(-reverse)?)/;
    static override properties = [FLEX + DASH + DIRECTION];
    static override values = {
        col: COLUMN,
        'col-reverse': COLUMN + DASH + REVERSE
    };
}