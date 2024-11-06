// app/finish/page.js
import FinishContent from "./result";
import ErrorPage from "./error";

async function fetchResultData(id) {
  const res = await fetch("http://localhost:3000/api/results/" + id);
  return await res.json();
}

export default async function FinishPage({ searchParams }) {
  const id = searchParams?.id;

  if (!id) {
    return <ErrorPage />;
  }

  try {
    const res = await fetchResultData(id);
    const resultFramework = res.data;

    return <FinishContent resultFramework={resultFramework} />;
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}
