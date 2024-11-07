'use server';

// app/finish/page.tsx
import FinishContent from './result';
import ErrorPage from '../playing/error';
import api from '../api/axios';

async function fetchResultData(entryId: string) {
  // Legacy
  // const res = await fetch(
  //   `http://localhost:3000/api/results/${entryId}`,
  // );
  // if (!res.ok) {
  //   throw new Error('Failed to fetch result data');
  // }
  // return await res.json();

  // fetch
  const res = await api.get(`/api/results/${entryId}`);

  if (res.status >= 300) {
    throw new Error("Error trying to api/results/");
  };

  return res.data;
}

export default async function FinishPage({
  searchParams,
}: {
  searchParams: Promise<{ entryId?: string }>;
}) {
  const { entryId } = await searchParams;

  if (!entryId) {
    console.error("entryId is not defined")
    return <ErrorPage />;
  }

  try {
    const res = await fetchResultData(entryId);
    const resultFramework = res.data;
    
    return (
      <FinishContent resultFramework={resultFramework} />
    );
  } catch (error) {
    console.error(error)
    return <ErrorPage />;
  }
}
