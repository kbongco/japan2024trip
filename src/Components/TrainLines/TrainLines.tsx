import { TrainLinesComponent } from '@/interfaces/component-interface';
import './TrainLines.scss';

export default function TrainLines({ name, color }: TrainLinesComponent) {
  return (
    <>
      <div className='chbi-train-container'>
        <div className='chbi-train-circle'
        style={{ backgroundColor: color }}>
        </div>
        <div className='chbi-train-line'
        style={{ backgroundColor: color }}>
        </div>
        <div className='chbi-train-name'>
          {name}
        </div>
      </div>
    </>
  )
}