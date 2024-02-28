const getdata = async (id) => {
  let data = await fetch("http://localhost:3000/api/users/" + id);
  data = await data.json();
  return data.result;
};

const SingleUser = async ({ params }) => {
  const data = await getdata(params.userid);
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.class}</h1>
    </div>
  );
};

export default SingleUser;
