import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";
import { css } from "@emotion/react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async ctx => {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache({key : "css"});
};

