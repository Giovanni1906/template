export default async function Main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: userData[] = await response.json(); // Especifica el tipo de datos como UserData[]
  
    return (
      <section>
      <div>
          <h1>
              Hola
          </h1>
      </div>
      <div>
        {data.map((value) => (
          <div key={value.id}>{value.name}</div>
        ))}
      </div>
  </section>
    );
  }