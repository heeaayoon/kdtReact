import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"

export default function FoodMain() {
  return (
    <div>
        {
            fooddata.map(item => 
                    <FoodCard key = {item.사업장명}
                              data = {item} />
            )
        }
    </div>
  )
}
