import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUp(props)	{

	const addMeetupHandler = (data) => {
		console.log(data)
	}

	return (
		<NewMeetupForm onAddMeetup={addMeetupHandler}/>
	)
}

export default NewMeetUp;