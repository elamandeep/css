import { Style } from '@master/style';
import { DASH, SHADOW, TEXT } from './constants/css-property-keyword';

export class TextShadowStyle extends Style {
    static override prefixes = /^t(ext)?-shadow:/;
    static override properties = [TEXT + DASH + SHADOW];
    static override supportFullName = false;
}