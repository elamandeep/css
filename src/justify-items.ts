import { DASH, ITEMS, JUSTIFY } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class JustifyItemsStyle extends Style {
    static override properties = [JUSTIFY + DASH + ITEMS];

}