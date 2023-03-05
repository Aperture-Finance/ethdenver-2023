import { ThemeProvider, useTheme } from "next-themes";
import { WagmiConfig } from "wagmi";
import { client } from "@/utils/wagmi";
import { dark, light, UIKitProvider } from "@aperture/uikit";
import { SWRConfig } from "swr";
import { GlobalStyle } from "@/GlobalStyle";

const StyledUIKitProvider: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  return (
    <UIKitProvider theme={light} {...props}>
      {children}
    </UIKitProvider>
  );
};

const Providers: React.FC<
  React.PropsWithChildren<{
    // store: Store;
    children: React.ReactNode;
  }>
> = ({
  children,
  // store,
}) => {
  return (
    //   <Provider store={store}>

    <WagmiConfig client={client}>
      <ThemeProvider>
        <StyledUIKitProvider>
        <GlobalStyle />
          <SWRConfig>
            {/* <SpectralProvider
              logo=""
              partnerId="79eb8b24-35b5-4162-9591-5d5f0e116663"
            > */}
              {/* <ModalProvider> */}
              {children}
              {/* </ModalProvider> */}
            {/* </SpectralProvider> */}
          </SWRConfig>
        </StyledUIKitProvider>
      </ThemeProvider>
    </WagmiConfig>

    //   </Provider>
  );
};

export default Providers;
