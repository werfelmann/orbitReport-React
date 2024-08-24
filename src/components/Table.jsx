const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>

      {sat.map((data, id) => {
        return (
          <tr>
          <td key={id}>{data.name}</td>
          <td key={id}>{data.type}</td>
          <td key={id}>{data.launchDate}</td>
          <td key={id}>{data.operational ? "active" : "inactive"}</td>
          </tr>
        );
      })}

     </tbody>
   </table>
  );
};

export default Table;