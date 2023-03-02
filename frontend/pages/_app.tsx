import type { AppProps } from "next/app";
import Head from "next/head";
import { NextPage } from "next";
import { Fragment } from "react";

import WrongNetworkModal from "@/components/Modals/WrongNetworkModal";
import Providers from "@/Providers";

function MyApp(props: AppProps) {
  return (
    <>
      <Head>
        <title>Aperture Finance V3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* todo: add favicon */}
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Providers>
        <App {...props} />
      </Providers>
    </>
  );
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /** render component without all layouts */
  pure?: true;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component.pure) {
    return <Component {...pageProps} />;
  } else {
    const Layout = Component.Layout || Fragment; //todo: add layout if needed
    return (
      <>
        <WrongNetworkModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
};

export default MyApp;
