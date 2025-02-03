import './BasicStats.scss';
import Card from '../Card/Card';
import { statsData } from '@/data/statsData';

export default function BasicStats() {
  return (
    <>
      <div className='basic-stats-container'>
        <div className='basic-stats-text-container'>
          <div className='basic-stats-texts'>
            <h1 className='basic-stats-header'>Basic Stats</h1>
            <div>
              <div className='basic-stats-sub-text'>
                <h2 className='basic-stats-exchange-text'>During the trip the exchange rate was:</h2>
                <h3 className='basic-stats-exchange-rate'>151JPY = 1USD</h3>
              </div>
            </div>
          </div>
          <div>
            <div className='stats-card-container'>
              {statsData.map((stat) => (
                <div className='stats-inner-card-container'>
                  <Card
                    icon={stat.icon}
                    title={stat.title}
                    description={stat.description}
                    value={stat.value}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}