export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: userData[] = await response.json(); // Especifica el tipo de datos como UserData[]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl animate-jump">Users:</h1>
      <div>
        {data.map((value) => (
          <div key={value.id}>{value.name}</div>
        ))}
      </div>
    </main>
  );
}