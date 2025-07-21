import TailButton from "./TailButton"

export default function TailSearch({TailRef, onSearch, onReset}) {

    //const keyRef = useRef(); //여기서 쓰지 말고 부모에서 사용하기

  return (
    <form className="w-8/10 lg:w-6/10 mt-10 flex justify-between items-center">
            <input  type = "text" 
                    id = "Tail" 
                    ref={TailRef}
                    className="mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" />
            <TailButton caption = "확인" 
                        color = "blue"
                        onHandle= {onSearch}
                        />
            <TailButton caption = "취소" 
                        color = "blue"
                        onHandle= {onReset}
                        />
    </form>
  )
}
