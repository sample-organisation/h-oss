import Basket from './Basket';
import Apple from './Apple';

function Items() {
  return (
    <div className="flex content-center flex-wrap h-48">
      <div className="w-1/4 p-2">
        <Basket />
      </div>
      <div className="w-1/4 p-2">
        <div className="text-6xl text-center p-2">
          <Basket />
        </div>
      </div>
      <div className="w-1/4 p-2">
        <div className="text-6xl text-center p-2">
          <Basket />
        </div>
      </div>
      <div className="w-1/4 p-2">
        <div className="text-6xl text-center p-2">
          <Basket />
        </div>
      </div>
    </div>
  )
}

export default Items;
