import { Random } from './components/Random';
import {Tag} from './components/Tag'


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background 
     overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg text-center mt-[35px]
       w-11/12 ml-10 mr-10 px-10 py-3 font-bold text-4xl">Gif Generator...</h1>
     
      <div className="flex flex-col w-full items-center gap-y-10 mt-8 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
