// app/finish/page.tsx
import FinishContent from './result';
import ErrorPage from '../playing/error';

async function fetchResultData(entryId: string) {
  const res = await fetch(`http://localhost:3000/api/results/${entryId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch result data');
  }
  return await res.json();
}

export default async function FinishPage({ searchParams }: { searchParams: { entryId?: string } }) {
  const { entryId } = await searchParams;

  if (!entryId) {
    return <ErrorPage />;
  }

  try {
    const res = await fetchResultData(entryId);
    const resultFramework = res.data;

    return <FinishContent resultFramework={resultFramework} />;
  } catch (error) {
    console.error(error);
    return <ErrorPage />;
  }
}
