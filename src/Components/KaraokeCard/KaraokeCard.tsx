import './KaraokeCard.scss';

export default function KaraokeCard() {
  return (
    <div className='chbi-karaoke-card-container'>
      <div className='chbi-karaoke-card-title-container'>
        <h1 className='chbi-karaoke-title'>🎤 Karaokekan</h1>
        <span data-text='Dame da ne. Dame yo dame na no yo.
            Anta ga suki de sukisugite.
            Dore dake tsuyoi osake demo.
            Yugamanai omoide ga bakamitai' className='chbi-karaoke-text'>
          <p>Dame da ne. Dame yo dame na no yo.
            Anta ga suki de sukisugite.
            Dore dake tsuyoi osake demo.
            Yugamanai omoide ga bakamitai</p>
        </span>
      </div>
    </div>
  )
}