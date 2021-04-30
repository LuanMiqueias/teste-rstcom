// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      title: string;
      white: string;
      button: string;
    };
    font: {
      family: {
        default: string;
      };
    };
  }
}
