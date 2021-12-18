import { DASH, GRID, ROW, SPAN } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class GridRowStyle extends Style {
    static override prefixes = /^grid-row(-span)?:/;
    static override property = GRID + DASH + ROW;
    static override unit = '';
    static override supportFullName = false;
    override get parseValue() {
        return this.prefix.slice(-5, -1) === 'span' && this.value !== 'auto'
            ? SPAN + ' ' + this.value + '/' + SPAN + ' ' + this.value
            : this.value;
    }
}