import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {
  return (
    <div className="w-9/10 gap-4 grid grid-cols-1 lg:grid-cols-3">
      <MyToggleBox setcolor = "blue" />
      <MyToggleBox setcolor = "orange" />
      <MyToggleBox setcolor = "lime" />
    </div>
  )
}
