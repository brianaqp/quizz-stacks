async function fetchResultData(id) {
    const res = await fetch('http://localhost:3000/api/results/'+id, {
        method: "GET"
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch result data");
    }
  
    return res.json();
  }
  
  export default async function FinishPage({ searchParams }) {
    const { id } = await searchParams; // Obtén el ID del query param

    if (!id) {
      return <div>No result ID provided</div>;
    }
  
    const data = await fetchResultData(id);

    console.log(data)
  
    return (
      <div>
        <h1>Resultados</h1>
        <p>Nombre: {data.id}</p>
        <p>Descripción: {data.value}</p> 
      </div>
    );
  }
  