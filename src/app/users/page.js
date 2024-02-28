import Link from "next/link";

const getdata = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
};

const Users = async () => {
  const data = await getdata();

  return (
    <div>
      <h1>Users List </h1>
      {data.map((data, index) => (
        <div>
          <Link href={"/users/" + data.class} key={index}>
            {data.name}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Users;
