import { useState } from 'react';

interface Input {
  name: string;
  register: (name: string, settings: Object) => void;
  settings: Object;
  isMultiple?: 'multiple' | ''; // does it allow multiple files?
  files : any;
  setFiles : any;
}

function MultipleFileUpload({
  name,
  register,
  settings,
  isMultiple,
  files,
  setFiles
}: Input): JSX.Element {

  return (
    <div className={`w-full px-3 mb-6 md:w-full md:mb-0`}>
      <label
        className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
        htmlFor={name}
      >
        {name}
      </label>

      <input
        className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
        name={name}
        type='file'
        {...register(name, settings)}
        onChange={(e) => {
          setFiles(e.target.files);
          console.log(files);
        }}
        multiple
      />
    </div>
  );
}

export default MultipleFileUpload;
