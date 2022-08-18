export default function Card(props) {
  return (
    <div className='card'>
      <img
        src={require(`../Pictures/${props.img}`)}
        alt='Display'
        className='card--image'
      />
      <div className='card--stats'>
        <img
          src={require('../Pictures/Star.png')}
          alt='icon'
          className='card--star'
        />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p className='card--title'>{props.title}</p>
      <p className='card--price'>
        <span className='bold'>From ${props.price}</span> / person
      </p>
    </div>
  );
}
