function Generate({ onClick }: any): JSX.Element {
  return (
    <button
      onClick={onClick}
      onSubmit={onClick}
      className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'
    >
      Generate
    </button>
  );
}
