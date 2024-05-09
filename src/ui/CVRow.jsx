/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function CVRow({ cv }) {
  const { id, link, version } = cv;

  return (
    <a className="btn-primary text-sm normal-case" href={link} target="_blank">
      Download CV
    </a>
  );
}

export default CVRow;
