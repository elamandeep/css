import { Style } from '@master/style';
import { BACKGROUND, DASH, ORIGIN } from './constants/css-property-keyword';

export class BackgroundOriginStyle extends Style {
    static override prefixes = /^(bg|background)-origin:/;
    static override properties = [BACKGROUND + DASH + ORIGIN];
    static override supportFullName = false;
}