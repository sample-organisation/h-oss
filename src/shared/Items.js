import Basket from './Basket';
import Apple from './Apple';

function Items() {
  return (
    <div className="flex content-center flex-wrap h-48">
      <div className="w-1/4 p-2">
        <Apple />
      </div>
      <div className="w-1/4 p-2">
        <Basket />
      </div>
      <div className="w-1/4 p-2">
        <Apple />
      </div>
      <div className="w-1/4 p-2">
        <Apple />
      </div>
    </div>
  )
}

export default Items;
