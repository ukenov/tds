import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { User } from 'pages/users/model';
import useEditUser from 'pages/users/hooks/use-edit-user';
import useGetUser from 'pages/users/hooks/use-get-user';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

interface EditUserProps {
  userId: any;
}

const EditUser: React.FC<EditUserProps> = ({ userId }) => {
    const { control, register, handleSubmit, formState: { errors }, setValue } = useForm<User>();
    const { editUser, loading, error } = useEditUser();
    const { user, loading: getUserLoading, error: getUserError } = useGetUser(userId);
    const [skills, setSkills] = useState<string[]>([]);
    const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    // Set form values when user data is fetched
    if (user) {
      setValue('firstname', user.firstname);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
      setSkills(user.skills);
      setValue('dateOfRegistration', new Date(user.dateOfRegistration));
    }
  }, [user, setValue]);

  const onSubmitHandler = handleSubmit(async (data: User) => {
    data.skills = skills;
    await editUser(userId, data);
  });

  if (getUserLoading) {
    return <div>Loading...</div>;
  }

  if (getUserError) {
    return <div>Error occurred. Please try again later.</div>;
  }

  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }

  return (
    <form onSubmit={onSubmitHandler} className="bg-white px-4 pt-6 pb-8 mb-4">
      {/* Form fields */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
          First Name
        </label>
        <input
          {...register("firstname", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname"
          type="text"
          placeholder="First Name"
          disabled={loading}
        />
        {errors.firstname && <span className="text-red-500 text-xs">First name is required</span>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
          Last Name
        </label>
        <input
          {...register("lastname", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastname"
          type="text"
          placeholder="Last Name"
          disabled={loading}
        />
        {errors.lastname && <span className="text-red-500 text-xs">Last name is required</span>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { 
            required: true, 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
          },})}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          disabled={loading}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message || "Email is required"}</span>}
      </div>
      <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                    Skills
                </label>
                <div>
                    {skills.map((skill, index) => (
                        <div key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {skill}
                            <button type="button" onClick={() => setSkills(prevSkills => prevSkills.filter((_, i) => i !== index))} className="ml-1">X</button>
                        </div>
                    ))}
                </div>
                <div className="flex mb-2">
                    <input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="skills"
                        type="text"
                        placeholder="Add Skill"
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            if (newSkill.trim() !== '') {
                                setSkills(prevSkills => [...prevSkills, newSkill]);
                                setNewSkill('');
                            }
                        }}
                        disabled={loading}
                        className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add
                    </button>
                </div>
            </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registrationDate">
          Registration Date & Time
        </label>
        <Controller
          control={control}
          name='dateOfRegistration'
          rules={{ required: 'Registration date is required' }}
          render={({ field }) => (
            <div>
              <DatePicker
                selected={field.value}
                onChange={(date: Date | null) => field.onChange(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="registrationDate"
                placeholderText="Select Registration Date & Time"
              />
              <div>{errors.dateOfRegistration && <span className="text-red-500 text-xs">{errors.dateOfRegistration.message}</span>}</div>
            </div>
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm-6.938-2C1.135 17.824 0 15.042 0 12h4c0 1.792.73 3.417 1.938 4.602l-3 2.647z"
                ></path>
              </svg>
              <span>Processing...</span>
            </div>
          ) : (
            'SUBMIT'
          )}
        </button>
      </div>
    </form>
  );  
};

export default EditUser;
