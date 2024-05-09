/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ProjectRow({ project }) {
  const { id, name, stack, desciption, image, code, demo } = project;
  const { name: tectName } = stack;
  const { info } = desciption;
  return (
    <div className=" mb-10 grid max-h-min grid-cols-1 lg:grid-cols-2">
      <div className=" bg-blue-50 px-6 py-6">
        <img className=" min-h-full object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-4 bg-blue-50 px-6 py-6">
        <h4 className=" heading-tertiary ">{name}</h4>
        {info.map((info) => (
          <p className="paragraph-small" key={info}>
            {info}
          </p>
        ))}
        <div className="flex flex-wrap items-center gap-2 font-semibold uppercase">
          <p className="py-1 text-sm font-bold text-blue-950">Built with :</p>
          {tectName.map((name) => (
            <p
              className=" rounded-full bg-blue-300 px-5 py-0.5 text-sm text-blue-900"
              key={name}
            >
              {name}
            </p>
          ))}
        </div>
        <div className="justify-left  mt-2 flex items-start gap-1 ">
          <div>
            <a
              className="btn-primary px-6 text-sm s:px-10 "
              href={code}
              target="_blank"
            >
              Code
            </a>
          </div>
          <div>
            <a
              className="btn-secondary px-6 text-sm s:px-10"
              href={demo}
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
