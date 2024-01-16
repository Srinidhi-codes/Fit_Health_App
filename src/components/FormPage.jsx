import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useForm } from "react-hook-form";
import { BiPhone, BiFont, BiPulse, BiSolidCity, BiMessageRounded, BiQuestionMark } from "react-icons/bi";
import doctors from "../doctorsdata.json"
import { Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';


const FormPage = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const [hidden, setHidden] = useState(false)
    const [modal2Open, setModal2Open] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();
    const { city: urlCity } = useParams();

    useEffect(() => {
        if (urlCity) {
            setValue('city', urlCity);
        }
    }, [urlCity, setValue]);

    const toggleHidden = () => {
        setHidden(!hidden);
    };
    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
        setHidden(false);
    };
    const onSubmit = (data) => {
        const updatedFormData = { ...data, doctor: selectedDoctor };
        setFormData(updatedFormData);
    };

    const handleForm = () => {
        navigate("/appointments", { state: formData })
    };


    return (
        <>
            <Header />
            <div className='bg-skin-base min-h-screen text-skin-text bg-[url(https://plus.unsplash.com/premium_photo-1676029883732-e3ad9257f0fb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)] bg-blend-overlay bg-cover bg-center bg-no-repeat'>
                <h1 className='text-center text-[2rem] font-semibold pt-5 text-skin-text'>Book Appointments In Your Finger Tips.</h1>
                <div>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg">

                            <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-skin-second">
                                <p className="text-center text-lg font-medium">Expert Physiotherapists waiting for you.</p>
                                <div>
                                    <div className="relative">
                                        <input
                                            {...register('name')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter Name"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiFont />
                                        </span>
                                    </div>
                                    {errors.name && <p>Name is required.</p>}
                                </div>

                                <div>
                                    <div className="relative">
                                        <input
                                            {...register('phone')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter phone"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiPhone />
                                        </span>
                                    </div>
                                    {errors.phone && <p>Phone is required.</p>}
                                </div>
                                <div>
                                    <div className="relative">
                                        <input
                                            {...register('age')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter age"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiPulse />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <input
                                            {...register('city')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter city"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiSolidCity />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <textarea
                                            {...register('complaints')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter complaints"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiMessageRounded />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    {watch('age') > 40 && (<div className="relative">
                                        <textarea
                                            {...register('prevexperience')}
                                            type="text"
                                            className="text-skin-base font-medium w-full placeholder:text-skin-base bg-gray-400 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter previous experience with physiotherapy"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <BiQuestionMark />
                                        </span>
                                    </div>)}
                                </div>
                                <div>
                                    <div className="relative">
                                        <div className='flex justify-between'>
                                            <p>Low</p>
                                            <p>Medium</p>
                                            <p>More</p>
                                            <p>High</p>
                                            <p>Severe</p>
                                        </div>
                                        <input
                                            {...register('pain')}
                                            type="range"
                                            className="text-skin-base font-medium w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="pain range"
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div onClick={toggleHidden} className="w-full flex justify-center rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
                                        <div
                                            {...register('doctor')}
                                            className="border-e px-4 py-2 text-xl hover:bg-slate-400 text-skin-text cursor-pointer"

                                        >
                                            Available Doctors 🔽
                                        </div>
                                    </div>

                                    {hidden ? <div
                                        className="relative bg-gray-400 cursor-pointer end-0 z-10 mt-2 w-full rounded-md border border-gray-100  shadow-lg"
                                        role="menu"
                                    >
                                        {doctors.map((d, i) => <div key={i} onClick={() => handleDoctorSelect(d)} className="p-2 w-full">
                                            <div
                                                // {...register('doctor')}
                                                className="flex flex-col rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-cyan-200 hover:text-gray-700"
                                                role="menuitem">
                                                <div className='text-xl font-bold'>{d.name}</div>
                                                <div className='text-lg font-medium'>{d.expertise}</div>
                                                <div className='text-md'>{d.city}</div>
                                            </div>
                                        </div>)}
                                    </div> : null}
                                </div>
                                {selectedDoctor && (
                                    <div className="mt-4 p-4 bg-gray-400 rounded-lg text-skin-base">
                                        <p className="text-2xl font-bold">Selected Doctor</p>
                                        <p className='font-bold'>Name: <span className='font-medium'>{selectedDoctor.name}</span></p>
                                        <p className='font-bold'>Expertise: <span className='font-medium'>{selectedDoctor.expertise}</span></p>
                                        <p className='font-bold'>City: <span className='font-medium'>{selectedDoctor.city}</span></p>
                                    </div>
                                )}
                                {/* <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-skin-main px-5 py-3 text-sm font-medium text-skin-base"
                                >
                                    Confirm Booking
                                </button> */}
                                <button className="w-full rounded-full bg-skin-main px-5 py-3 text-xl font-medium text-skin-base" type="submit" onClick={() => setModal2Open(true)}>
                                    Confirm Booking
                                </button>
                                <Modal
                                    title="Confirm Appointment"
                                    centered
                                    open={modal2Open}
                                    onOk={() => { handleForm() }}
                                    onCancel={() => setModal2Open(false)}
                                    okButtonProps={{ style: { backgroundColor: 'cyan', color: 'black' } }}
                                >
                                    {formData && (
                                        <>
                                            <p>
                                                <strong>Name:</strong> {formData.name}
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> {formData.phone}
                                            </p>
                                            <p>
                                                <strong>Age:</strong> {formData.age}
                                            </p>
                                            <p>
                                                <strong>Location:</strong> {formData.city}
                                            </p>
                                            <p>
                                                <strong>Complaints:</strong> {formData.complaints}
                                            </p>
                                            <p>
                                                <strong>Previous Experience:</strong> {formData.prevexperience}
                                            </p>
                                            <p>
                                                <strong>Pain:</strong> {formData.pain}%
                                            </p>
                                            <p>
                                                <strong>Doctor:</strong> {formData.doctor.name}
                                            </p>

                                        </>
                                    )}
                                </Modal>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};
export default FormPage;