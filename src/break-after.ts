import { Style } from '@master/style';
import { AFTER, BREAK, DASH } from './constants/css-property-keyword';

export class BreakAfterStyle extends Style {
    static override properties = [BREAK + DASH + AFTER];
}