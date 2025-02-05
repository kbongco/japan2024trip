import ProgressBarComponent from '../ProgressBar/ProgressBarComponent';
import './FunStuff.scss';
import { funStuff } from '@/data/funstuff';

export default function FunStuff() {
  console.log(funStuff);
  return (
    <>
      <div className="chbi-funstuff-container">
        <h1 className="chbi-funstuff-header">Fun Stuff</h1>
        <p className="chbi-funstuff-desc">
          You spent a total of 67261 JPY on random expenses.  
          Let's take a look at the breakdown for this.
        </p>

        <div className="chbi-fun-stuff-items">
          {funStuff.map((fun) => (
            <div key={fun.id} className="chbi-fun-stuff-item">
              {/* Left Column: Name & Content */}
              <div className="chbi-fun-stuff-name-content">
                <h2>{fun.name}</h2>

                {/* Check for ProgressBarComponent */}
                {fun.content === "ProgressBarComponent" ? (
                  <ProgressBarComponent />
                ) : fun.content.startsWith("http") ? (
                  /* If content is a GIF or image */
                  <img src={fun.content} alt={fun.name} className="chbi-fun-stuff-image" />
                ) : (
                  /* Otherwise, it's an emoji or text */
                  <p className="chbi-fun-stuff-emoji">{fun.content}</p>
                )}
              </div>

              {/* Right Column: Description */}
              <div className="chbi-fun-stuff-description">
                <p>{fun.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}