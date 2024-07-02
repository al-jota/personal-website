import Image from './images/profile.jpg';

export default function Home() {

  return (
    <div>
      <div className='home-container'>
        <div className='header-image'>
          <img
            className='image'
            src={Image}
            alt='Allan Perry'
            />
        </div>
        <div className='cta-text'>
          <div className='tech-skills-container'>
            <h1>Technical Skills</h1>
            <p>I began learning web development in 2023 through BloomTech. I have experience in the following:</p>
            <p>Javascript, CSS, HTML, React</p>
          </div>
        </div>
      </div>
    </div>
  )
}