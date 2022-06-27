import './App.css';
import ShopItemFunc from './components/shop-func/ShopItemFunc';
import ShopItemClass from './components/shop-class/ShopItemClass';
import Calendar from './components/calendar/Calendar';
import moment from 'moment';
import 'moment/locale/ru';

function App() {
  const now = moment("2022-08-17");// Формат даты для проверки "YYYY-MM-DD"
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  
  return (
    //------- func-component -------//
    /*<div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
    */
    //------- class-component -------//
    /*<div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
    */
    //------- calendar -------//
    <div className="container">
      <Calendar date={now} />
    </div>
  );
}

export default App;