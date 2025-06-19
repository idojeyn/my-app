import './Quetion.css'

const Question = () => {
  const data = [
    {
      question: 'Which code editor would you recommend?',
      answer: "I'd highly recommend you Sublime Text - a free to try text editor which I'm using daily. Awesome tool!"
    },
    {
      question: 'Nice header. Where do I find more images like that one?',
      answer: "Well, there are thousands of stock art galleries, but personally, I prefer to use photos from these sites: Unsplash.com and Flickr - Creative Commons"
    },
    {
      question: 'Can I use it to build a site for my client?',
      answer: "Yes, you can. You may use this template for any purpose, just don't forget about the license, which says: 'You must give appropriate credit', i.e. you must provide the name of the creator and a link to the original template in your work."
    },
    {
      question: 'Can you customize this template for me?',
      answer: "Yes, I can. Please drop me a line to sergey-at-pozhilov.com and describe your needs in details. Please note, my services are not cheap."
    }
  ]

  return (
    <div>
      <div className="question">
        <h2>Frequently Asked Questions</h2>
        <div className="content1">
          {data.map((item, index) => (
            <div className="box" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="clr"></div>
      <div className="container">
        <div className="btn2">
          <h5>
            Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem doloribus recusandae facere magni ullam suscipit sunt atque rerum eaque iusto facilis esse nam veniam incidunt officia perspiciatis at voluptatibus. Libero, aliquid illum possimus numquam fuga.
          </h5>
          <button className='btn1 right'>Learn More <i className='fas fa-angles-right'></i></button>
        </div>
      </div>
    </div>
  )
}

export default Question
