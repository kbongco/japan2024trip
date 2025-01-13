import './Card.scss';

export default function Card({ props }: any) {
  return (
    <>
      <div className='chbi-card-container'>
        <div className='chbi-card-icon-container'>
          <p className='chbi-card-icon'>🔥</p>
          <div className='chbi-card-text'>
            <p>Most expensive meal</p>
            <p>Yakiniku</p>
            <div className='chbi-card-subtext'>
              <p>¥5000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}