import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

export async function getStaticProps() {
	
	const client = await MongoClient.connect('mongodb+srv://walayat37:walayat37Mongo@expensetracker.ijusz.mongodb.net/?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
	client.close();
	return {
		props: {
			meetups: meetups.map(meetup => ({
				'id': meetup._id.toString(),
				'title': meetup.title,
				'image': meetup.image,
				'address': meetup.address,
				'description': meetup.description,
				}))
		},
		revalidate: 1
	}
}

function HomePage(props)	{
	return (
		<MeetupList meetups={props.meetups}/>
	)
}

export default HomePage;