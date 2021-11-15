import Input from '@/components/Input/input';
import MultipleFileUpload from '@/components/multi-file-upload/multi-file-upload';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import router, { NextRouter, useRouter } from 'next/router';
import Test from '@/components/display-certs/display-certs';

function Form(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [formStep, setFormStep] = useState(0);

  const nextRouter: NextRouter = useRouter();

  const [files, setFiles] = useState<FileList | null>();

  const isSubmitted: boolean = watch('certificates');

  return (
    <div className='flex items-center justify-center w-full h-full align-middle md:my-10'>
      <form className='w-full max-w-lg'>
        {formStep == 0 && (
          <>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='First Name'
                placeholder='Jonathan'
                type='text'
                register={register}
                settings={{ required: true, maxLength: 50 }}
                width='1/2'
              />
              <Input
                name='Last Name'
                placeholder='Joestar'
                type='text'
                register={register}
                settings={{ required: true, maxLength: 50 }}
                width='1/2'
              />
            </div>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='Email'
                placeholder='jojo@gmail.com'
                type='Email'
                register={register}
                settings={{ required: true }}
                width='1/2'
              />
              <Input
                name='Mobile Number'
                placeholder='+1 XXXXXXXXXX'
                type='tel'
                register={register}
                settings={{ required: true }}
                width='1/2'
              />
            </div>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='Password'
                placeholder='****************'
                type='password'
                register={register}
                settings={{ required: true, maxLength: 30 }}
                width='full'
              />
            </div>
          </>
        )}

        {formStep == 0 && (
          <>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='Address Line #1'
                placeholder=''
                type='text'
                register={register}
                settings={{ required: true, maxLength: 70 }}
                width='full'
              />
            </div>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='Address Line #2'
                placeholder=''
                type='text'
                register={register}
                settings={{ required: false, maxLength: 70 }}
                width='full'
              />
            </div>
            <div className='flex flex-wrap mb-2 -mx-3'>
              <Input
                name='City'
                placeholder='Bombay'
                type='text'
                register={register}
                settings={{ required: true, maxLength: 70 }}
                width='1/3'
              />

              <Input
                name='State'
                placeholder='Maharashtra'
                type='text'
                register={register}
                settings={{ required: true }}
                width='1/3'
              />
              <Input
                name='Postal Code'
                placeholder='400 XXX'
                type='text'
                register={register}
                settings={{ required: true }}
                width='1/3'
              />
            </div>
          </>
        )}
        {formStep == 0 && (
          <>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <Input
                name='Profile Picture'
                placeholder=''
                type='file'
                register={register}
                settings={{ required: true }}
                width='full'
              />
            </div>
            <div className='flex flex-wrap mb-2 -mx-3'>
              <Input
                name='Job Role'
                placeholder='Job'
                type='text'
                register={register}
                settings={{ required: true, maxLength: 70 }}
                width='1/3'
              />

              <Input
                name='Years of Experience'
                placeholder='5'
                type='number'
                register={register}
                settings={{ required: true }}
                width='1/3'
              />
              <Input
                name='Preferred Country'
                placeholder='Canada'
                type='text'
                register={register}
                settings={{ required: true }}
                width='1/3'
              />
            </div>
            <MultipleFileUpload
              name='certificates'
              settings={{ required: true }}
              register={register}
              isMultiple='multiple'
              files={files}
              setFiles={setFiles}
            />

            {isSubmitted == true && (
              <>
                <Test samplePDF={files[0]} />
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
