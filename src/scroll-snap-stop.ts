import { Style } from '@master/style';
import { DASH, SCROLL, SNAP, STOP } from './constants/css-property-keyword';

export class ScrollSnapStopStyle extends Style {
    static override properties = [SCROLL + DASH + SNAP + DASH + STOP];
}