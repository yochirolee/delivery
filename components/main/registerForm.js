import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm({ HandleSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    HandleSubmit(data);
  };

  return (
    <div className="flex-first mr-10">
      <form id="form-product" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Product Name
          </label>
          <input
            name="name"
            ref={register({ required: true })}
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-describedby="nameValidation"
          ></input>
          {errors.name && (
               <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Product Price
          </label>
          <input
            name="price"
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={register({
              required: true,
              max: 100,
              min: 1,
              maxLength: 5,
              pattern: /(\d+\.\d{2,2})/i,
            })}
          />
          {errors.price && (
               <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Cant
          </label>
          <input
            name="cant"
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={register({ required: true })}
            type="number"
          />
          {errors.ingredients && (
            <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Picture
          </label>
          <input
            name="pictureUrl"
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={register()}
            
          />
          {errors.ingredients && (
            <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>

        

         <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Ingredients
          </label>
          <input
            name="ingredients"
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={register({ required: true })}
          />
          {errors.ingredients && (
            <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Product Description
          </label>
          <input
            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            ref={register({ required: true })}
          />
          {errors.description && (
              <small className="text-red-400">
              This Field is Required.
            </small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <button
            type="submit"
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
