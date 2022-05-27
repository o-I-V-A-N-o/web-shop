import './App.css';
import ShopItemFunc from './components/shop-func/ShopItemFunc';
import ShopItemClass from './components/shop-class/ShopItemClass';
import Calendar from './components/calendar/Calendar';
import moment from 'moment';
import 'moment/locale/ru';

function App() {
  const now = moment().toObject();
  
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
       <div className='highlight-overlay'></div>
      </div>
      
      <div className="window">
       <Calendar date={now} />
      </div>
    </div>
  );
}

export default App;

/*
<div className="window">
       <ShopItemFunc item={item} />
      </div>
      <div className="window">
       <ShopItemClass item={item} />
      </div>
      */