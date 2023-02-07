import { MongoClient, ObjectId} from 'mongodb';
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://walayat37:walayat37Mongo@expensetracker.ijusz.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetUpId: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
    const meetUpId = context.params.meetUpId
  
    const client = await MongoClient.connect('mongodb+srv://walayat37:walayat37Mongo@expensetracker.ijusz.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetUpId)});
    client.close();
  return {
    props: {
      meetupData: {
        image: selectedMeetup.image,
        id: meetUpId,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      }
    }
  }
}

export default MeetupDetails;