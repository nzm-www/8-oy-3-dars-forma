import React, { useRef, useState } from "react";

const Forma: React.FC = () => {
  interface Job {
    logoUrl: string;
    companyName: string;
    position: string;
    isNew: boolean;
    isFeatured: boolean;
    time: string;
    jobType: string;
    location: string;
    skills: {
      fullstack: boolean;
      midweight: boolean;
      python: boolean;
      react: boolean;
    };
  }

  const [submittedJobs, setSubmittedJobs] = useState<Job[]>([]); // State for submitted jobs

  const logoUrlRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const jobTypeRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const isNewRef = useRef<HTMLInputElement>(null);
  const isFeaturedRef = useRef<HTMLInputElement>(null);
  const skillsRef = {
    fullstack: useRef<HTMLInputElement>(null),
    midweight: useRef<HTMLInputElement>(null),
    python: useRef<HTMLInputElement>(null),
    react: useRef<HTMLInputElement>(null),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const jobData: Job = {
      logoUrl: logoUrlRef.current?.value || "",
      companyName: companyNameRef.current?.value || "",
      position: positionRef.current?.value || "",
      isNew: isNewRef.current?.checked || false,
      isFeatured: isFeaturedRef.current?.checked || false,
      time: timeRef.current?.value || "",
      jobType: jobTypeRef.current?.value || "",
      location: locationRef.current?.value || "",
      skills: {
        fullstack: skillsRef.fullstack.current?.checked || false,
        midweight: skillsRef.midweight.current?.checked || false,
        python: skillsRef.python.current?.checked || false,
        react: skillsRef.react.current?.checked || false,
      },
    };

    setSubmittedJobs([...submittedJobs, jobData]);
    resetForm();
  };

  const resetForm = () => {
    if (logoUrlRef.current) logoUrlRef.current.value = "";
    if (companyNameRef.current) companyNameRef.current.value = "Manage";
    if (positionRef.current) positionRef.current.value = "Fullstack Developer";
    if (isNewRef.current) isNewRef.current.checked = false;
    if (isFeaturedRef.current) isFeaturedRef.current.checked = false;
    if (timeRef.current) timeRef.current.value = "";
    if (jobTypeRef.current) jobTypeRef.current.value = "";
    if (locationRef.current) locationRef.current.value = "";
    for (const skill in skillsRef) {
      if (skillsRef[skill].current) skillsRef[skill].current.checked = false;
    }
  };

  return (
    <div className="flex">
      <div className="  p-5">
        <form
          onSubmit={handleSubmit}
          className="w-[380px] ml-[130px] border-2 bg-white p-4 rounded-md"
        >
          <h2 className="text-xl  text-start pb-5 font-bold">
            Vakansiya ma'lumotlarini kiriting
          </h2>
          <div>
            <label className="block text-sm font-medium">Logotip URL</label>
            <input
              type="text"
              ref={logoUrlRef}
              placeholder="Logotip URL manzilini kiriting"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="pt-4">
            <label className="block text-sm font-medium">Kompaniya nomi</label>
            <input
              type="text"
              ref={companyNameRef}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <div className="flex pt-4 gap-5 font-semibold pb-5">
              <label className="flex items-center">
                <input type="checkbox" ref={isNewRef} className="mr-2" />
                Yangi
              </label>
              <label className="flex items-center">
                <input type="checkbox" ref={isFeaturedRef} className="mr-2" />
                Featured
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Lavozim</label>
            <select
              ref={positionRef}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
            </select>
          </div>
          <div className="flex items-center justify-between pb-6 pt-5">
            <div className="vaqt w-[90px]">
              <label className="block text-sm font-medium">Vaqt</label>
              <select
                ref={timeRef}
                className="mt-1 block w-full text-sm border border-gray-300 rounded-md p-2"
              >
                <option value="Jamoviy">Tanlang</option>
                <option value="Kundavomida">Kundavomida</option>
                <option value="Yarim kun">Yarim kun</option>
                <option value="Erkin grafik">Erkin grafik</option>
              </select>
            </div>
            <div className="ishturi w-[90px]">
              <label className="block text-sm font-medium">Ish turi</label>
              <select
                ref={jobTypeRef}
                className="mt-1 block w-full text-sm border border-gray-300 rounded-md p-2"
              >
                <option value="Jamoviy">Tanlang</option>
                <option value="Jamoviy">Jamoviy</option>
                <option value="Yolg'iz">Yolg'iz</option>
              </select>
            </div>
            <div className="joylashuv w-[90px]">
              <label className="block text-sm font-medium">Joylashuv</label>
              <select
                ref={locationRef}
                className="mt-1 block w-full text-sm border border-gray-300 rounded-md p-2"
              >
                <option value="Masofaviy">Tanlang</option>
                <option value="Masofaviy">Masofaviy</option>
                <option value="Ofisda">Ofisda</option>
              </select>
            </div>
          </div>
          <span className="block text-sm font-medium pb-2">Ko'nikmalar</span>
          <div className=" flex flex-wrap w-[250px] pb-5 items-center justify-between">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  ref={skillsRef.fullstack}
                  className="mr-2"
                />
                Fullstack
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  ref={skillsRef.midweight}
                  className="mr-2"
                />
                Midweight
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  ref={skillsRef.python}
                  className="mr-2"
                />
                Python
              </label>
              <label className="flex items-center">
                <input type="checkbox" ref={skillsRef.react} className="mr-2" />
                React
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black font-semibold text-white rounded-md p-2"
          >
            Saqlash
          </button>
        </form>
      </div>
      <div className="pt-7 ">
        {submittedJobs.map((job, index) => (
          <div
            key={index}
            className="p-4  flex items-center gap-32 border border-gray-300 rounded-md bg-white shadow-md mb-4"
          >
            <div className=" flex items-center gap-2">
              <div>
                <img
                  src={job.logoUrl}
                  alt="Logo"
                  className="w-12 h-12 rounded-full mr-2"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex">
                    <h3 className="text-base font-semibold text-[#5CA5A5]">
                      {job.companyName}
                    </h3>
                    {job.isNew && (
                      <span className="ml-2 bg-[#5CA5A5] text-white px-2 py-1 text-xs rounded">
                        NEW!
                      </span>
                    )}
                    {job.isFeatured && (
                      <span className="ml-2 bg-gray-800 text-white px-2 py-1 text-xs rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mt-2">{job.position}</h4>
                  <p className="text-gray-500">
                    1d ago • {job.jobType} • {job.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              {job.skills.fullstack && (
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                  Fullstack
                </span>
              )}
              {job.skills.midweight && (
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                  Midweight
                </span>
              )}
              {job.skills.python && (
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                  Python
                </span>
              )}
              {job.skills.react && (
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  React
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forma;
