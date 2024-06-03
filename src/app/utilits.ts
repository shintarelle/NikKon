export default async function getData(url: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${url}`, {
    next: { revalidate: 10 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data.data
}
