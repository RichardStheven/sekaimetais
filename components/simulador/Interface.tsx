'use client'

type Props = {
  setCut: (value: boolean) => void
}

export default function Interface({ setCut }: Props) {
  return (
    <div className="flex gap-4">
      <button
        className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-2 px-6 rounded transition"
        onClick={() => setCut(true)}
      >
        Cortar
      </button>
    </div>
  )
}
