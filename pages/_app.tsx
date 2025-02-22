import "@/styles/globals.css"; 

import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "@components/common/Header";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
       <ChakraProvider>
       <Header />
      <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
