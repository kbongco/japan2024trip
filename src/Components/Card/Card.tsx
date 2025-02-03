import { CardComponent } from '@/interfaces/component-interface';
import './Card.scss';

export default function Card({ icon, title, description, value }: CardComponent) {
  return (
    <div className='chbi-card-container'>
      <div className='chbi-card-icon-container'>
        <p className='chbi-card-icon'>{icon}</p>
        <div className='chbi-card-text'>
          <p>{title}</p>
          <p>{description} </p>
          <div className='chbi-card-subtext'>
          <p>{value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}