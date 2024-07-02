import Image from './images/profile.jpg';

export default function About() {

  return (
    <div>
      <div className='about-container'>
        <div className='header-image'>
          <img
            className='image'
            src={Image}
            alt='Allan Perry'
            />
        </div>
        <div className='cta-text'>
          <div className='about-container'>
            <h1>About</h1>
            <p>I love spending time with my wife and 4-year-old son. </p>
            <p>Exhausted owner of Otis & Fili (two Hungarian Vizslas). </p>
          </div>
        </div>
      </div>
    </div>
  )
}