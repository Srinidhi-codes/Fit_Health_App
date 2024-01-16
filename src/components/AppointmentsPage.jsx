import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const AppointmentsPage = () => {
  const location = useLocation();
  const formData = location.state;
  if (!formData) {
    return (
      <div className="flex justify-center items-center mt-10 w-full">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh] w-full bg-skin-base'>
        <h1 className='text-[2rem] font-bold mb-20 text-skin-text'>Appointments</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-skin-secondary text-sm ">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-skin-text">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-skin-text">Complaint</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-skin-text">Pain</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-skin-text">Dr.Name</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-skin-text">{formData.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-skin-text">{formData.complaints}</td>
                <td className="whitespace-nowrap px-4 py-2 text-skin-text">{formData.pain}</td>
                <td className="whitespace-nowrap px-4 py-2 text-skin-text">{formData.doctor.name}</td>
                <td className="whitespace-nowrap px-4 py-2">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to={"/"} className="rounded-lg bg-skin-main px-5 py-3 text-sm font-medium text-skin-base mt-20" >Go Back</Link>
      </div>
    </>
  )
}

export default AppointmentsPage