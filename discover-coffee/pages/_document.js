import Document, { Html,Head , Main, NextScript } from 'next/document'
class MyDocument extends  Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                  <link 
                     rel="preload" 
                     as="font" 
                     href="/fonts/IBMPlexSans-Bold.ttf" 
                     crossOrigin="anonymous" />
                     <link 
                     rel="preload" 
                     as="font" 
                     href="/fonts/IBMPlexSans-Regular.ttf" 
                     crossOrigin="anonymous" />
                     <link 
                     rel="preload" 
                     as="font" 
                     href="/fonts/IBMPlexSans-SemiBold.ttf" 
                     crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument ; 