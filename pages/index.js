import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		'id': 'mx1',
    'image': 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'title': 'This is first image',
    'address': 'This is meetup address'
	},
	{
		'id': 'mx2',
    'image': 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'title': 'This is second image',
    'address': 'This is meetup address second'
	}
];

function HomePage(props)	{
	return (
		<MeetupList meetups={DUMMY_MEETUPS}/>
	)
}

export default HomePage;