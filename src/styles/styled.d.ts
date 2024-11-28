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
            gray: string;
            line: string;
            background: string;
            hoverPrimary: string;
            hoverSecondary: string;
            pressedPrimary: string;
            pressedSecondary: string;
            bgDisabled: string,
            textDisabled: string;
            light_blue: string;
        };

        fonts: {
            primary: string;
            highlight: string;
            lato: string;
        };
    }
}