import { route } from "next/dist/server/router";
import Head from "next/dist/shared/lib/head";
import { useRouter } from "next/router"
export default function Dynamic(){
    const router = useRouter();
    console.log(router);
    return(
        <div>
        <Head>
        <title>{router.query.dynamus}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>Hello there !! , you are now in this {router.query.dynamus} dynamic path </div>

        </div>
    );
}