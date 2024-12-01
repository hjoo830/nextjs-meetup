import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>모임 웹 사이트</title>
      </Head>
      <main>
        <MeetupList />
      </main>
    </>
  );
}
