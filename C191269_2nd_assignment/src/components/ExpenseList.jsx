const ExpenseList = () => {
  return (
    <div>
      <div>
        <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

        {/* <p className="py-2.5 text-gray-600">There are no expenses.</p> */}

        <ul id="expense-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>House Rent</span>
              <div>
                <span className="text-red-600">-10,000.00</span>
                <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                  Delete
                </span>
              </div>
            </div>
          </li>
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Groceries</span>
              <div>
                <span className="text-red-600">-5,000.00</span>
                <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                  Delete
                </span>
              </div>
            </div>
          </li>
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Other Expenses</span>
              <div>
                <span className="text-red-600">-2,000.00</span>
                <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                  Delete
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
