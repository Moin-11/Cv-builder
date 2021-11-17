/*********
 * 
 * 
 * 
 * 
 * 
            <div className='flex flex-wrap mb-2 -mx-3'>
              <div className='w-full px-3 mb-6 md:w-2/3 md:mb-0'>
                <label
                  className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                  htmlFor='grid-state'
                >
                  Select Number of Languages
                </label>
                <div className='relative'>
                  <select
                    className='block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
                    {...register('Number of Languages', { required: true })}
                    onChange={(event) => {
                      setLang(parseInt(event.target.value));
                      dispatch(setLanguages(parseInt(event.target.value)));
                    }}
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  {[...Array(lang)].map((e, i) => {
                    return (
                      <div className='flex flex-wrap mb-6 -mx-3'>
                        <Input
                          name={`Language #${i}`}
                          placeholder={`Language #${i}`}
                          type='text'
                          register={register}
                          settings={{ required: false, maxLength: 70 }}
                          width='full'
                        />
                      </div>
                    );
                  })}
                  <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'>
                    <svg
                      className='w-4 h-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
 */
