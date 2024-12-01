import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>모임 웹 사이트</title>
      </Head>
      <main>
        <MeetupList meetups={meetups} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db("meetupDB");

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}
