import { MongoClient, ObjectId } from "mongodb";
import React from "react";

const MeetUpDetailPage = ({ meetupData }) => {
  return <div>MeetUpDetailPage</div>;
};

export default MeetUpDetailPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db("meetupDB");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const meetupId = params.meetupId;

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db("meetupDB");
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId.createFromHexString(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
