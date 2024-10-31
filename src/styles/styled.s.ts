import 'styled-components';

declare module 'styled-components' {
    // extending theme with new properties
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            text: string;
            white100: string;
            white90: string;
            black100: string;
            black90: string;
            line: string;
            background: string;
        };

        fonts: {
            primary: string;
            highlight: string;
        };
    }
}