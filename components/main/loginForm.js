import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ HandleSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    HandleSubmit(data);
  };

  return (
    <div className="flex p-2 rounded-lg bg-white">
      <form id="form-product" className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-3 ">
          <label className="block text-gray-600 text-sm   font-bold mt-2">
            Correo
          </label>
          <input
            name="userName"
            ref={register({ required: true })}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" 
            aria-describedby="nameValidation"
          ></input>
          {errors.name && (
            <small className="text-gray-400">This Field is Required.</small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="block text-gray-600 text-sm font-bold mt-2">
            Password
          </label>
          <input
            name="password"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="password"
            ref={register({
              required: true,
              max: 25,
              min: 8,
            })}
          />
          {errors.price && (
            <small className="text-gray-400">This Field is Required.</small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <button
            type="submit"
            className="bg-orange-500  shadow-2xl rounded mt-4 h-12 text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
