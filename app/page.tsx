'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [buttonPressed, setButtonPressed] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      {!buttonPressed ? (
        <button
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setButtonPressed(true)}
        >
          Press Button
        </button>
      ) : (
        <h1 className="mt-8 text-2xl font-bold">Hello Github World</h1>
      )}
    </div>
  )
}

