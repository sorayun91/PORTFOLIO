import Document, { Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8" />
                <title>YUNSORA</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    name="keywords"
                    content=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}
