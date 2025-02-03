import './MenuCard.scss';

export default function MenuCard({ props }: any) {
  return (
    <>
      <div className='chbi-menu-card-container'>
        <div className='chbi-card-content'>
          <h1 className='chbi-menu-title'>Breakfast</h1>
          <div className='chbi-menu-items'>
            <div className='chbi-menu-item-container'>
              <p className='chbi-menu-food-icon'>🥞</p>
              <p className='chbi-menu-food-desc'>Pancake Sandwiches</p>
            </div>
            <p className='chbi-menu-food-icon'>🥞</p>
            <p className='chbi-menu-food-desc'>Pancake Sandwiches</p>
            <p className='chbi-menu-food-icon'>🥞</p>
            <p className='chbi-menu-food-desc'>Pancake Sandwiches</p>
            <p className='chbi-menu-food-icon'>🥞</p>
            <p className='chbi-menu-food-desc'>Pancake Sandwiches</p>
          </div>
          <div className='chbi-menu-item-macros'>
            <h2 className='chbi-header-macros'>How much are the macros?</h2>
            <div className='chbi-macro-sarcastic-comment'>
              <p>You didn't actually track your macros right?</p>
            </div>
            <div className='chbi-actual-total costs'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}