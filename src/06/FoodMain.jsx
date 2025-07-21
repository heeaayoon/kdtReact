import FoodCard from "./foodCard"
import fooddata from "./fooddata.json"

export default function FoodMain() {
    console.log(fooddata)
  return (
    <div className ="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {    
            fooddata.map(item =>
                <FoodCard   key = {item.사업장명}
                            item = {item}
                />
            )
        }
    </div>

  )
}
