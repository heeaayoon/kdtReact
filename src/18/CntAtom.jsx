import { atom } from "jotai";


//전역변수 선언
//외부에서 사용하려면 export하기
export const cntAtom = atom(0)

//cntAtom(전역변수)의 상태가 변하면, cntAtom2(전역변수)의 상태도 변함
export const cntAtom2 = atom((get)=>get(cntAtom)*2)