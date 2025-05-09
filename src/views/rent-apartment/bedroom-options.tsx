import { Bed, Home } from "lucide-react"

export default function BedroomOptions() {
  const options = [
    { icon: <Bed className="h-5 w-5" />, title: "2 bedrooms" },
    { icon: <Bed className="h-5 w-5" />, title: "3 bedrooms" },
    { icon: <Home className="h-5 w-5" />, title: "10,123 sq.ft" },
    { icon: <Home className="h-5 w-5" />, title: "10,123 sq.ft" },
  ]

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
      {options.map((option, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg ">
          <div className="bg-blue-50 p-2 rounded-full text-blue-500 mb-2">{option.icon}</div>
          <p className="text-sm font-medium text-center">{option.title}</p>
        </div>
      ))}
    </div>
  )
}
