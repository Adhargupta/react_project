
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../features/task/taskSlice';

function FilterItems() {
//   const [filter, setFilter] = useState("all") // "all" or "completed"
  const filter = useSelector(state=>state.task.filters)
  const dispatch = useDispatch()
    console.log(filter);
  return (
    <div className="filter space-x-2">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={filter === "all" ? "bg-green-400 px-4 py-2" : "bg-white px-4 py-2"}
      >
        All
      </button>
      <button
        onClick={() =>dispatch(setFilter('completed'))}
        className={filter === "completed" ? "bg-green-400 px-4 py-2" : "bg-white px-4 py-2"}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterItems
