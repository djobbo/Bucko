import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <div id="mobile-nav"></div>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
