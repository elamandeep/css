import { Style } from '@master/style';
import { BORDER, DASH, STYLE } from './constants/css-property-keyword';

export class BorderStyleStyle extends Style {
    static override prefixes = /^b(order)?-style:/;
    static override property = BORDER + DASH + STYLE;
    static override supportFullName = false;
}