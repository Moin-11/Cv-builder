interface Input {
name : string;
type : string;
placeholder ?: string;
register : (name: string, settings: Object) => void;
settings : Object;
width?: string;

}


function Input ({name, type, placeholder, register, settings, width} : Input) : JSX.Element {


  return (
    <div className={`w-full px-3 mb-6 md:w-${width} md:mb-0`}>

    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
     htmlFor= {name} >
       {name}
    </label>
  
  <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
   name={name}
   type={type}
   placeholder={placeholder}
   {...register(name, settings)}
   />
   
   </div>  );


}


export default Input;