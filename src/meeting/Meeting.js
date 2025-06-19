import './Meeting.css'


const Meeting = () => {

    const meeting = [
        {
            title: 'Meeting with supervisor',
            content: [
                'I visited my parents and had a nice dinner.',
                'I met with my friends.',
                '14 Dec 2025'
            ]
        },
        
    ]

    for(let i=0; i<meeting.length; i++)

    return (
        < div className='width1'>
          <h2>{meeting[i].title}</h2>
          <p>{meeting[i].content[0]}</p>
          <p>{meeting[i].content[1]}</p>
          <p>{meeting[i].content[2]}</p>
          <h2>{meeting[i].title}</h2>
          <p>{meeting[i].content[0]}</p>
          <p>{meeting[i].content[1]}</p>
          <p>{meeting[i].content[2]}</p>
          <h2>{meeting[i].title}</h2>
          <p>{meeting[i].content[0]}</p>
          <p>{meeting[i].content[1]}</p>
          <p>{meeting[i].content[2]}</p>
        </div >
    )
}

export default Meeting