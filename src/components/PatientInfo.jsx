export const PatientInfo = ({ field, data }) => {
  return (
    <>
      <p>
        {field}: <span>{data}</span>
      </p>
    </>
  );
};
