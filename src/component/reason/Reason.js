import './Reason.css'

const Reason = () => {

  const icons = [
    'fas fa-gears fa-3x',
    'fas fa-bolt-lightning fa-3x',
    'fas fa-heart fa-3x',
    'far fa-face-smile fa-3x'
  ]

  const titles = [
    'Bootstrap-powered',
    'Fat-free',
    'Creative Commons',
    "Author's support"
  ]
  return (
    <div className='container_2'>
      <div className="container3">
        <p>Reasons to use this template</p>
        <div className="content">
          {icons.map((icon, index) => (
            <div className="box1" key={index}>
              <i className={icon}></i>
              <h5 className='py-3'>{titles[index]}</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia maxime neque laudantium facilis minus.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="clr"></div>
    </div>
  )
}

export default Reason