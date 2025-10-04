import Div from "./component/Div"
import Input from "./component/Input"

function App() {
  
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 text-amber-700">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

        {/* Input + Button */}
        <Input/>

        {/* Todo Items */}
        <Div/>
      </div>
    </div>

  )
}

export default App
