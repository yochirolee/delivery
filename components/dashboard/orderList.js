export default function OrderList({ order, HandleOrderDetails }) {
  return (
    <div class="border border-gray-400 mb-2 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="flex items-center justify-between">
        <div className="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="/img/pizza-mixta.jpg"
            alt="avatar"
          />
          <div class="text-sm w-64">
            <p class="text-gray-800  font-bold mb-1">{order.phone}</p>
            <p class="text-gray-600 leading-none mb-1">{order.name}</p>
            <p class="text-gray-600">{order.address}</p>
          </div>
          <p class="text-gray-600">{order.region}</p>
        </div>
        <div className="flex flex-row">
          <span className="flex rounded-full border-green-800 border text-green-700  px-2 py-1 text-xs font-bold mr-3">
            {order.status}
          </span>
          <button
            onClick={() => HandleOrderDetails(order)}
            className="flex  p-2 text-x font-bold "
          >
            <i className="fa fa-arrow-right text-green-800"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
