import { useState } from "react"; //훅을 가져오기

export default function MyListItem({title, imgUrl, content}) {
  //let cnt = 0;
  //state 변수로 변환 -> (구조분해) cnt가 아닌, setCnt(setter 역할)로 cnt를 바꿈
  //useState() 훅을 이용해 state 변수를 만듦
  const [cnt, setCnt] = useState(0);

  const handleUp = () =>{
    //cnt = cnt+1;
    setCnt(cnt+1);
    //console.log(title, cnt);
  }

  const handleDown = () =>{
    (cnt-1) < 0 ? setCnt(0) : setCnt(cnt-1);
    //if(cnt>0) setCnt(cnt-1);
    //console.log(title, cnt);
  }

  return (
    <div className="w-full h-50
                    flex justify-start items-start
                    border rounded-2xl overflow-hidden
                    border-gray-400">
      <div className="w-1/4 h-full
                      flex items-center justify-start ml-4">
            <img src={imgUrl}/>            
      </div>
      <div className="w-3/4 h-full
                      flex flex-col 
                      items-center justify-between p-5">
            <div className="w-full flex flex-col justify-start items-start">
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="w-full flex flex-col justify-start items-start mt-1.5">{content}</p>
            </div>
            <div className="w-full h-4 
                            flex justify-end items-center">
                <span className="mx-4 cursor-pointer hover:text-indigo-600 "
                      onClick={handleUp}>💜좋아요</span>
                <span className="mx-4 cursor-pointer hover:text-red-600 "
                      onClick={handleDown}>💢싫어요</span>
                <span className="font-bold">{cnt}</span>
            </div>
      </div>
    </div>
  )
}
