import { COLUMN, DASH, SPAN } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class ColumnSpanStyle extends Style {
    static override prefixes = /^col-span:/;
    static override property = COLUMN + DASH + SPAN;
}