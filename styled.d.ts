// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      title: string;
      white: string;
      title_secondary: string;
      button: {
        default: string;
        hover: string;
        logout: string;
        logout_hover: string;
      };
      nav: {
        link: string;
        link_active: string;
      };
    };
    font: {
      family: {
        default: string;
      };
    };
  }
}
